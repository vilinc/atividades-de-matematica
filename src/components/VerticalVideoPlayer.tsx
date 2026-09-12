import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Gauge,
} from 'lucide-react';
import defaultVideoUrl from '../assets/video.mp4';

interface VerticalVideoPlayerProps {
  customVideoUrl?: string;
  posterUrl?: string;
}

const SPEED_OPTIONS = [1, 1.25, 1.5, 1.75, 2];

export default function VerticalVideoPlayer({
  customVideoUrl,
  posterUrl,
}: VerticalVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [speedToast, setSpeedToast] = useState<string | null>(null);

  // Vídeo embutido direto no site (já pronto e ativo ao entrar na página)
  const videoSource = customVideoUrl || defaultVideoUrl || '/video.mp4';

  // Autoplay imediato em silêncio ao carregar a página
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playbackRate = playbackSpeed;
    video
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        setIsPlaying(false);
      });
  }, [videoSource]);

  // Monitora eventos do vídeo para sincronizar estado de play/pause/progresso
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      // Reinicia em loop contínuo
      video.currentTime = 0;
      video.play().catch(() => {});
      setProgress(0);
    };

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('ended', onEnded);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  // Clique principal: se ainda não foi clicado, remove o blur, ativa o som e reinicia do 0
  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!hasStarted) {
      // Reinicia do início, ativa som e remove o blur
      video.currentTime = 0;
      video.muted = false;
      setIsMuted(false);
      setHasStarted(true);
      video.playbackRate = playbackSpeed;
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          video.muted = true;
          setIsMuted(true);
          video.play();
        });
    } else {
      // Já iniciado: alterna play e pause
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  // Botão independente de volume
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  // Função para acelerar a velocidade do vídeo (1x, 1.25x, 1.5x, 1.75x, 2x)
  const changeSpeed = useCallback((newSpeed: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setPlaybackSpeed(newSpeed);

    if (videoRef.current) {
      videoRef.current.playbackRate = newSpeed;
    }

    setSpeedToast(`Velocidade: ${newSpeed}x`);
    setTimeout(() => {
      setSpeedToast(null);
    }, 1500);
  }, []);

  // Alterna ciclicamente a velocidade ao clicar no badge
  const cycleSpeed = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentIndex = SPEED_OPTIONS.indexOf(playbackSpeed);
    const nextIndex = (currentIndex + 1) % SPEED_OPTIONS.length;
    changeSpeed(SPEED_OPTIONS[nextIndex]);
  };

  return (
    <div className="my-6 sm:my-8 flex flex-col items-center">
      {/* Frame do vídeo na vertical (proporção balanceada de vídeo mobile 9:16) */}
      <div
        id="vertical-video-container"
        onClick={handleVideoClick}
        className="group relative w-[260px] sm:w-[290px] aspect-[9/16] bg-neutral-950 rounded-3xl overflow-hidden border-[6px] border-neutral-900 transition-all duration-200 cursor-pointer select-none shadow-2xl hover:scale-[1.01]"
      >
        {/* Elemento de vídeo sempre rodando ao fundo */}
        <video
          ref={videoRef}
          src={videoSource}
          poster={posterUrl}
          autoPlay
          playsInline
          muted
          loop
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover"
        />

        {/* Notificação toast de velocidade */}
        {speedToast && (
          <div className="absolute top-12 left-1/2 -translate-x-1/2 z-40 px-3 py-1.5 rounded-full bg-black/85 text-white text-xs font-bold tracking-wide backdrop-blur-md border border-white/20 shadow-lg pointer-events-none animate-in fade-in zoom-in duration-150">
            {speedToast}
          </div>
        )}

        {/* OVERLAY COM BLUR E COR ESCURA (ativo antes do clique inicial) */}
        <div
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center p-4 transition-all duration-500 backdrop-blur-[5px] bg-black/45 ${
            hasStarted ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {/* Frase no topo */}
          <p className="text-white text-sm sm:text-base font-bold text-center tracking-wide drop-shadow-md mb-4 animate-pulse">
            Clique para ver o vídeo
          </p>

          {/* Botão quadrado com ícone de mudo no azul do site */}
          <div
            id="vertical-video-square-btn"
            className="w-16 h-16 sm:w-18 sm:h-18 bg-sky-600 rounded-2xl shadow-2xl flex flex-col items-center justify-center border-2 border-sky-400 text-white transform transition-all duration-200 group-hover:scale-110 active:scale-95"
          >
            <VolumeX className="w-8 h-8 sm:w-9 sm:h-9 text-white stroke-[2.2]" />
            <span className="text-[10px] font-bold text-white mt-0.5 tracking-tight uppercase">
              Sem som
            </span>
          </div>
        </div>

        {/* Indicador visual de pause quando pausado pelo usuário */}
        {hasStarted && !isPlaying && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/35 backdrop-blur-[2px] transition-all">
            <div className="w-14 h-14 rounded-2xl bg-white/95 text-neutral-900 flex items-center justify-center shadow-lg border border-neutral-200">
              <Play className="w-7 h-7 fill-neutral-900 text-neutral-900 ml-0.5" />
            </div>
          </div>
        )}

        {/* Indicador discreto de pause no hover */}
        {hasStarted && isPlaying && (
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 rounded-2xl bg-black/50 text-white flex items-center justify-center backdrop-blur-xs">
              <Pause className="w-6 h-6 fill-white" />
            </div>
          </div>
        )}

        {/* CONTROLES SUPERIORES (ÁUDIO E ACELERADOR DE VELOCIDADE) */}
        <div className="absolute top-3 left-3 right-3 z-30 flex items-center justify-between pointer-events-auto">
          {/* BOTÃO DE ACELERAR O VÍDEO COM VELOCIDADE ATUAL */}
          <button
            type="button"
            id="vertical-video-speed-btn"
            onClick={cycleSpeed}
            title="Acelerar vídeo (toque para alternar: 1x, 1.25x, 1.5x, 1.75x, 2x)"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-black/65 text-white font-bold text-xs backdrop-blur-md border border-white/20 hover:bg-black/85 transition-all shadow-md active:scale-95"
          >
            <Gauge className="w-3.5 h-3.5 text-sky-300" />
            <span>{playbackSpeed}x</span>
          </button>

          {/* BOTÃO DE MUTE / SOM */}
          {hasStarted && (
            <button
              type="button"
              id="vertical-video-audio-toggle"
              onClick={toggleMute}
              aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
              className="w-8 h-8 rounded-xl bg-black/60 text-white flex items-center justify-center backdrop-blur-xs hover:bg-black/80 transition-colors border border-white/20"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-rose-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-emerald-400" />
              )}
            </button>
          )}
        </div>

        {/* RISCO MEIO GROSSO: LINHA DE PROGRESSO DO VÍDEO NO FUNDO */}
        <div
          id="vertical-video-progress-bar"
          className="absolute bottom-0 left-0 right-0 z-30 h-2 sm:h-2.5 bg-black/60 backdrop-blur-xs overflow-hidden"
          title="Progresso do vídeo"
        >
          <div
            className="h-full bg-gradient-to-r from-sky-400 to-sky-500 transition-all duration-100 ease-linear rounded-r-full shadow-sm"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

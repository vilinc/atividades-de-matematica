import { ArrowDown } from 'lucide-react';
import { HERO_DATA } from '../data';
import VerticalVideoPlayer from './VerticalVideoPlayer';

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section id="hero-section" className="py-10 sm:py-16 border-b border-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-tight sm:leading-[1.15]"
          >
            +60 atividades de matemática para{' '}
            <span className="bg-sky-100 text-sky-900 px-2 sm:px-3 py-0.5 rounded-lg inline-block font-extrabold">
              aprender brincando
            </span>
          </h1>

          <p
            id="hero-subtitle"
            className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mx-auto"
          >
            {HERO_DATA.subtitlePrefix}
            <strong className="font-bold text-neutral-900">{HERO_DATA.subtitleHighlight}</strong>
            {HERO_DATA.subtitleSuffix}
          </p>

          {/* Vídeo na vertical */}
          <VerticalVideoPlayer />

          <div className="mt-6 sm:mt-8 flex flex-col items-center">
            <button
              id="hero-cta-button"
              type="button"
              onClick={onCtaClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg font-bold text-white bg-sky-600 rounded-xl hover:bg-sky-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 active:scale-98"
            >
              <span>{HERO_DATA.ctaText}</span>
              <ArrowDown className="w-5 h-5" />
            </button>

            {/* Sub-texto abaixo do botão */}
            <p
              id="hero-subcta-text"
              className="mt-3 text-xs sm:text-sm font-medium text-neutral-500 tracking-wide"
            >
              {HERO_DATA.subCtaText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

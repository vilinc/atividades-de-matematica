import { useState, useEffect } from 'react';

interface TopBannerProps {
  onCtaClick: () => void;
}

const DURATION_SECONDS = 10 * 60; // 10 minutos

export default function TopBanner({ onCtaClick }: TopBannerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    try {
      const storedEnd = localStorage.getItem('promo_timer_end');
      if (storedEnd) {
        const remaining = Math.floor((parseInt(storedEnd, 10) - Date.now()) / 1000);
        if (remaining > 0) {
          return remaining;
        }
      }
      const newEndTime = Date.now() + DURATION_SECONDS * 1000;
      localStorage.setItem('promo_timer_end', newEndTime.toString());
      return DURATION_SECONDS;
    } catch {
      return DURATION_SECONDS;
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <aside
      id="top-promo-banner"
      onClick={onCtaClick}
      className="bg-sky-600 text-white border-b border-sky-700 py-3 px-4 text-center cursor-pointer hover:bg-sky-700 transition-colors select-none"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
        <span className="text-base sm:text-lg font-bold tracking-wide uppercase">
          PROMOÇÃO ATÉ
        </span>
        <span
          id="countdown-timer"
          className="inline-flex items-center justify-center px-3 py-0.5 rounded-md bg-white text-sky-700 font-bold text-base sm:text-lg shadow-xs"
        >
          {formattedTime}
        </span>
        <span className="text-xs sm:text-sm font-medium text-sky-100 underline underline-offset-2 ml-1">
          (Clique para garantir +60 Atividades + Bônus por R$ 9,90)
        </span>
      </div>
    </aside>
  );
}

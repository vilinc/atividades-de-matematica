import { AUDIENCE_DATA } from '../data';

interface PublicoAlvoProps {
  onCtaClick?: () => void;
}

export default function PublicoAlvo({ onCtaClick }: PublicoAlvoProps) {
  return (
    <section id="publico-section" className="py-14 sm:py-20 bg-neutral-50/50 border-b border-neutral-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2
          id="publico-title"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight"
        >
          Para{' '}
          <span className="bg-sky-100 text-sky-900 px-2 sm:px-2.5 py-0.5 rounded-lg inline-block font-bold">
            quem é?
          </span>
        </h2>

        <p
          id="publico-target"
          className="mt-5 text-xl sm:text-2xl text-neutral-900 font-medium"
        >
          {AUDIENCE_DATA.targetPrefix}
          <strong className="font-extrabold text-sky-800">{AUDIENCE_DATA.targetHighlight}</strong>
          {AUDIENCE_DATA.targetSuffix}
        </p>

        <p
          id="publico-description"
          className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-lg mx-auto"
        >
          {AUDIENCE_DATA.description}
        </p>

        {onCtaClick && (
          <div className="mt-8">
            <button
              type="button"
              id="publico-cta-button"
              onClick={onCtaClick}
              className="inline-flex items-center justify-center py-3.5 px-6 sm:px-8 text-base font-bold text-white bg-sky-600 rounded-xl hover:bg-sky-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 active:scale-98 cursor-pointer"
            >
              COMEÇAR AGORA POR R$ 9,90 (+60 ATIVIDADES + BÔNUS)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

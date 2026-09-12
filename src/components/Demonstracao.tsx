import { Maximize2 } from 'lucide-react';
import { PAGE_PREVIEWS, DEMO_DATA } from '../data';
import { PagePreview } from '../types';

interface DemonstracaoProps {
  onSelectPreview: (preview: PagePreview) => void;
  onCtaClick?: () => void;
}

export default function Demonstracao({ onSelectPreview, onCtaClick }: DemonstracaoProps) {
  return (
    <section
      id="demonstracao-section"
      className="py-14 sm:py-20 bg-white border-b border-neutral-100 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10 text-center">
        <h2
          id="demonstracao-title"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight"
        >
          Veja o material{' '}
          <span className="bg-sky-100 text-sky-900 px-2 sm:px-2.5 py-0.5 rounded-lg inline-block font-bold">
            por dentro
          </span>
        </h2>
        <p
          id="demonstracao-subtitle"
          className="mt-3 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto"
        >
          {DEMO_DATA.subtitle}
        </p>
        <p
          id="demonstracao-highlight"
          className="mt-2 text-sm sm:text-base font-bold text-sky-800"
        >
          {DEMO_DATA.highlight}
        </p>
      </div>

      {/* Carrossel Horizontal com Scroll Automático Infinito Sem Cortes */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Máscaras suaves nas bordas para transição visual elegante */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-32 z-10 bg-gradient-to-r from-white via-white/80 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-32 z-10 bg-gradient-to-l from-white via-white/80 to-transparent"
        />

        {/* Trilha do Marquee com 2 conjuntos perfeitamente idênticos para loop contínuo */}
        <div
          id="infinite-carousel-track"
          className="animate-infinite-scroll flex items-stretch select-none"
        >
          {/* Primeiro bloco com os 7 itens */}
          <div className="flex shrink-0 gap-5 sm:gap-6 pr-5 sm:pr-6">
            {PAGE_PREVIEWS.map((page) => (
              <div
                key={`track1-${page.id}`}
                id={`carousel-card-${page.id}`}
                onClick={() => onSelectPreview(page)}
                className="w-60 sm:w-72 shrink-0 bg-neutral-50/80 hover:bg-white rounded-2xl border border-neutral-200/90 hover:border-sky-300 p-3.5 transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col group text-left"
              >
                <div className="relative aspect-[3/4] w-full bg-white rounded-xl overflow-hidden border border-neutral-200/70 mb-3 shadow-2xs">
                  <img
                    src={page.imageSrc}
                    alt={`Página da atividade: ${page.title}`}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-800 bg-white/95 rounded-lg border border-neutral-200 shadow-sm">
                      <Maximize2 className="w-3.5 h-3.5 text-sky-600" />
                      Ampliar página
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${page.tagColor}`}
                  >
                    {page.category}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug group-hover:text-sky-700 transition-colors">
                  {page.title}
                </h3>

                <p className="mt-1 text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                  {page.description}
                </p>
              </div>
            ))}
          </div>

          {/* Segundo bloco espelhado e idêntico para criar o scroll infinito sem corte */}
          <div
            className="flex shrink-0 gap-5 sm:gap-6 pr-5 sm:pr-6"
            aria-hidden="true"
          >
            {PAGE_PREVIEWS.map((page) => (
              <div
                key={`track2-${page.id}`}
                onClick={() => onSelectPreview(page)}
                className="w-60 sm:w-72 shrink-0 bg-neutral-50/80 hover:bg-white rounded-2xl border border-neutral-200/90 hover:border-sky-300 p-3.5 transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col group text-left"
              >
                <div className="relative aspect-[3/4] w-full bg-white rounded-xl overflow-hidden border border-neutral-200/70 mb-3 shadow-2xs">
                  <img
                    src={page.imageSrc}
                    alt={`Página da atividade: ${page.title}`}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-800 bg-white/95 rounded-lg border border-neutral-200 shadow-sm">
                      <Maximize2 className="w-3.5 h-3.5 text-sky-600" />
                      Ampliar página
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${page.tagColor}`}
                  >
                    {page.category}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug group-hover:text-sky-700 transition-colors">
                  {page.title}
                </h3>

                <p className="mt-1 text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                  {page.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-8 sm:mt-10 px-4">
        {onCtaClick && (
          <button
            type="button"
            id="demo-cta-button"
            onClick={onCtaClick}
            className="inline-flex items-center justify-center py-3.5 px-6 sm:px-8 text-base font-bold text-white bg-sky-600 rounded-xl hover:bg-sky-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 active:scale-98 cursor-pointer"
          >
            QUERO RECEBER AS +60 ATIVIDADES + BÔNUS
          </button>
        )}
        <p className="text-xs text-neutral-400 font-medium mt-3">
          Total de +60 atividades progressivas acompanhadas de gabarito e 2 bônus exclusivos.
        </p>
      </div>
    </section>
  );
}

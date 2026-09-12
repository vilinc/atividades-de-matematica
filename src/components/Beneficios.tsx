import { Check } from 'lucide-react';
import { BENEFITS_DATA } from '../data';

interface BeneficiosProps {
  onCtaClick?: () => void;
}

export default function Beneficios({ onCtaClick }: BeneficiosProps) {
  return (
    <section id="beneficios-section" className="py-14 sm:py-20 bg-neutral-50/50 border-b border-neutral-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2
            id="beneficios-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight"
          >
            Por que escolher{' '}
            <span className="bg-sky-100 text-sky-900 px-2 sm:px-2.5 py-0.5 rounded-lg inline-block font-bold">
              este material?
            </span>
          </h2>
        </div>

        <div id="beneficios-list" className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {BENEFITS_DATA.items.map((benefit, index) => (
            <div
              key={benefit.id}
              id={`beneficio-item-${index + 1}`}
              className="bg-white p-5 sm:p-6 rounded-xl border border-neutral-200/70 flex items-start gap-4 shadow-2xs hover:border-neutral-300 transition-colors"
            >
              <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 leading-snug">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {onCtaClick && (
          <div className="text-center mt-10">
            <button
              type="button"
              id="beneficios-cta-button"
              onClick={onCtaClick}
              className="inline-flex items-center justify-center py-3.5 px-6 sm:px-8 text-base font-bold text-white bg-sky-600 rounded-xl hover:bg-sky-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 active:scale-98 cursor-pointer"
            >
              QUERO O CADERNO COM +60 ATIVIDADES E BÔNUS
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

import { Check, Gift } from 'lucide-react';
import { INCLUDED_DATA } from '../data';

interface VoceRecebeProps {
  onCtaClick?: () => void;
}

export default function VoceRecebe({ onCtaClick }: VoceRecebeProps) {
  return (
    <section id="voce-recebe-section" className="py-14 sm:py-20 bg-white border-b border-neutral-100">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2
            id="voce-recebe-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight"
          >
            Você{' '}
            <span className="bg-sky-100 text-sky-900 px-2 sm:px-2.5 py-0.5 rounded-lg inline-block font-bold">
              recebe
            </span>
          </h2>

          <p
            id="voce-recebe-product"
            className="mt-3 text-xl sm:text-2xl font-extrabold text-sky-900"
          >
            {INCLUDED_DATA.productTitle}
          </p>
        </div>

        <div
          id="voce-recebe-card"
          className="bg-neutral-50/70 rounded-2xl border border-neutral-200/80 p-6 sm:p-8 shadow-2xs"
        >
          <ul className="space-y-3.5">
            {INCLUDED_DATA.items.map((item, index) => (
              <li
                key={item.text}
                id={`voce-recebe-item-${index + 1}`}
                className="flex items-start sm:items-center gap-3 text-sm sm:text-base text-neutral-800 font-medium"
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0 ${
                    item.isBonus
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-emerald-100 text-emerald-700'
                  }`}
                >
                  {item.isBonus ? (
                    <Gift className="w-3.5 h-3.5 stroke-[2.3]" />
                  ) : (
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  )}
                </div>
                <div className="flex-1">
                  <span>{item.text}</span>
                  {item.isBonus && (
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-200/80 text-amber-900 uppercase tracking-wider">
                      Bônus Incluso
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {onCtaClick && (
          <div className="text-center mt-8">
            <button
              type="button"
              id="voce-recebe-cta-button"
              onClick={onCtaClick}
              className="w-full py-4 px-6 text-base sm:text-lg font-bold text-white bg-sky-600 rounded-xl hover:bg-sky-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 active:scale-98 cursor-pointer"
            >
              QUERO RECEBER AS +60 ATIVIDADES + BÔNUS POR R$ 9,90
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

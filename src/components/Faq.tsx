import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

interface FaqProps {
  onCtaClick?: () => void;
}

export default function Faq({ onCtaClick }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-14 sm:py-20 bg-white border-b border-neutral-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h2
            id="faq-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight"
          >
            Dúvidas{' '}
            <span className="bg-sky-100 text-sky-900 px-2 sm:px-2.5 py-0.5 rounded-lg inline-block font-bold">
              frequentes
            </span>
          </h2>
        </div>

        <div id="faq-accordion" className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                id={`faq-item-${index + 1}`}
                className="rounded-xl border border-neutral-200/80 overflow-hidden bg-neutral-50/50"
              >
                <button
                  type="button"
                  id={`faq-toggle-${index + 1}`}
                  onClick={() => toggleItem(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-neutral-900 hover:bg-neutral-100/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-neutral-800' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index + 1}`}
                    className="px-5 pb-4 pt-1 text-sm sm:text-base text-neutral-700 leading-relaxed border-t border-neutral-200/40 bg-white"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {onCtaClick && (
          <div className="text-center mt-8 sm:mt-10">
            <button
              type="button"
              id="faq-cta-button"
              onClick={onCtaClick}
              className="inline-flex items-center justify-center py-3.5 px-6 sm:px-8 text-base font-bold text-white bg-sky-600 rounded-xl hover:bg-sky-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 active:scale-98 cursor-pointer"
            >
              QUERO RECEBER AS +60 ATIVIDADES + BÔNUS
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

import { ShieldCheck, Sparkles } from 'lucide-react';
import { PRICING_DATA } from '../data';

interface OfertaProps {
  onBuyClick?: () => void;
}

export default function Oferta({ onBuyClick }: OfertaProps) {
  return (
    <section id="oferta" className="py-16 sm:py-24 bg-neutral-50/50 border-b border-neutral-100">
      <div className="max-w-md mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <h2
            id="oferta-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight"
          >
            Comece{' '}
            <span className="bg-sky-100 text-sky-900 px-2 sm:px-2.5 py-0.5 rounded-lg inline-block font-bold">
              hoje
            </span>
          </h2>
        </div>

        <div
          id="pricing-card"
          className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 shadow-xs text-center"
        >
          {/* Tag do pacote */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-bold mb-3">
            <span>+60 Atividades + 2 Bônus Inclusos</span>
          </div>

          {/* Preço riscado */}
          <span
            id="pricing-regular"
            className="text-base sm:text-lg text-neutral-400 line-through font-medium"
          >
            {PRICING_DATA.regularPrice}
          </span>

          {/* Preço em destaque */}
          <h3
            id="pricing-main"
            className="text-5xl sm:text-6xl font-extrabold text-neutral-900 tracking-tight mt-1 mb-2"
          >
            {PRICING_DATA.price}
          </h3>

          {/* Forma de pagamento */}
          <p
            id="pricing-installments"
            className="text-sm text-neutral-600 font-medium mb-6"
          >
            {PRICING_DATA.installments}
          </p>

          {/* Botão de compra direcionando para Kiwify */}
          <a
            id="buy-button"
            href={PRICING_DATA.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onBuyClick}
            className="w-full py-4 px-6 text-base sm:text-lg font-bold text-white bg-sky-600 rounded-xl hover:bg-sky-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-sky-200" />
            <span>{PRICING_DATA.ctaText}</span>
          </a>

          {/* Garantia */}
          <div className="mt-5 flex items-center justify-center gap-1.5 text-xs sm:text-sm text-neutral-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{PRICING_DATA.guaranteeText}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

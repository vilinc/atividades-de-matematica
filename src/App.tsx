import { useState } from 'react';
import TopBanner from './components/TopBanner';
import Hero from './components/Hero';
import Demonstracao from './components/Demonstracao';
import Beneficios from './components/Beneficios';
import Pratica from './components/Pratica';
import PublicoAlvo from './components/PublicoAlvo';
import VoceRecebe from './components/VoceRecebe';
import Oferta from './components/Oferta';
import Faq from './components/Faq';
import Rodape from './components/Rodape';
import ImageModal from './components/ImageModal';
import { PRICING_DATA } from './data';
import { PagePreview } from './types';

export default function App() {
  const [selectedPage, setSelectedPage] = useState<PagePreview | null>(null);

  const scrollToOferta = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(PRICING_DATA.checkoutUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800 selection:bg-sky-100 selection:text-sky-900">
      {/* Banner de promoção com cronômetro de 10 minutos (não fixo) */}
      <TopBanner onCtaClick={scrollToOferta} />

      {/* 1. # 60 atividades de matemática para aprender brincando */}
      <Hero onCtaClick={scrollToOferta} />

      {/* 2. ## Veja o material por dentro */}
      <Demonstracao
        onSelectPreview={(page) => setSelectedPage(page)}
        onCtaClick={scrollToOferta}
      />

      {/* 3. ## Por que escolher este material? */}
      <Beneficios onCtaClick={scrollToOferta} />

      {/* 4. ## O que a criança pratica? */}
      <Pratica />

      {/* 5. ## Para quem é? */}
      <PublicoAlvo onCtaClick={scrollToOferta} />

      {/* 6. ## Você recebe */}
      <VoceRecebe onCtaClick={scrollToOferta} />

      {/* 7. ## Comece hoje - Checkout Kiwify */}
      <Oferta />

      {/* 8. ## Dúvidas frequentes */}
      <Faq onCtaClick={scrollToOferta} />

      {/* Rodapé */}
      <Rodape />

      {/* Modal para ampliar imagem da página */}
      <ImageModal
        page={selectedPage}
        onClose={() => setSelectedPage(null)}
      />
    </main>
  );
}

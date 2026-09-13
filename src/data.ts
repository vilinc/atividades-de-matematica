import coverImage from './assets/images/caderno_capa_1789243503126.jpg';
import macasImage from './assets/images/ativ_conte_macas_1789244202422.jpg';
import joaninhasImage from './assets/images/ativ_joaninhas_1789244218499.jpg';
import ligueImage from './assets/images/ativ_ligue_numeros_1789244231900.jpg';
import estrelasImage from './assets/images/ativ_pinte_estrelas_1789244250898.jpg';
import baloesImage from './assets/images/ativ_onde_baloes_1789244265851.jpg';
import dedosImage from './assets/images/ativ_conte_dedos_1789244279650.jpg';
import brinquedosImage from './assets/images/ativ_conte_brinquedos_1789244297921.jpg';
import { Benefit, FaqItem, PagePreview } from './types';

export const HERO_DATA = {
  title: '+60 atividades de matemática para aprender brincando',
  subtitlePrefix: 'Atividades práticas para crianças de ',
  subtitleHighlight: '4 a 7 anos',
  subtitleSuffix: ', prontas para imprimir e usar em casa ou na escola.',
  ctaText: 'QUERO AS +60 ATIVIDADES + BÔNUS',
  subCtaText: 'PDF • +60 Atividades + 1 Bônus Incluso • Acesso imediato',
  coverImage,
};

export const DEMO_DATA = {
  title: 'Veja o material por dentro',
  subtitle: 'Conheça algumas das atividades incluídas no caderno.',
  highlight: '+60 páginas progressivas acompanhadas de gabarito e bônus exclusivos.',
};

export const PAGE_PREVIEWS: PagePreview[] = [
  {
    id: 'pag-macas',
    title: 'Conte as Maçãs',
    category: 'Contagem 1 a 5',
    description: 'Atividade visual de contagem com maçãs ilustradas e seleção do numeral correspondente.',
    imageSrc: macasImage,
    tagColor: 'bg-rose-50 text-rose-700 border-rose-200',
  },
  {
    id: 'pag-joaninhas',
    title: 'Quantas Joaninhas?',
    category: 'Contagem até 7',
    description: 'Exercício lúdico para exercitar a atenção e identificar a quantidade correta de joaninhas.',
    imageSrc: joaninhasImage,
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    id: 'pag-ligue',
    title: 'Ligue o Número à Quantidade',
    category: 'Associação',
    description: 'Traçado de linhas associando os numerais de 1 a 5 aos respectivos conjuntos de figuras.',
    imageSrc: ligueImage,
    tagColor: 'bg-sky-50 text-sky-700 border-sky-200',
  },
  {
    id: 'pag-estrelas',
    title: 'Pinte 5 Estrelas',
    category: 'Pintura e Quantidade',
    description: 'Atividade para colorir a quantia exata pedida, unindo coordenação motora e raciocínio.',
    imageSrc: estrelasImage,
    tagColor: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  },
  {
    id: 'pag-baloes',
    title: 'Onde Estão os 3 Balões?',
    category: 'Discriminação Visual',
    description: 'Comparação entre grupos de elementos para circular o quadro com a quantidade exata.',
    imageSrc: baloesImage,
    tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  {
    id: 'pag-dedos',
    title: 'Conte com os Dedos',
    category: 'Contagem Motora',
    description: 'Identificação dos dedos levantados e escrita do valor correspondente no campo em destaque.',
    imageSrc: dedosImage,
    tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    id: 'pag-brinquedos',
    title: 'Conte os Brinquedos',
    category: 'Cena e Classificação',
    description: 'Observação rica de quarto infantil para contar e registrar bolas, carrinhos, ursinhos e blocos.',
    imageSrc: brinquedosImage,
    tagColor: 'bg-teal-50 text-teal-700 border-teal-200',
  },
];

export const BENEFITS_DATA = {
  sectionTitle: 'Por que escolher este material?',
  items: [
    {
      id: 'ben-imprimir',
      badge: 'PDF',
      title: 'Pronto para imprimir',
      description: 'Arquivo em PDF, tamanho A4 e alta resolução.',
    },
    {
      id: 'ben-niveis',
      badge: 'Progressão',
      title: '+60 atividades progressivas',
      description: 'Exercícios do básico até noções iniciais de soma + bônus exclusivos.',
    },
    {
      id: 'ben-leve',
      badge: 'Lúdico',
      title: 'Aprendizado mais leve',
      description: 'Atividades visuais, simples e divertidas.',
    },
    {
      id: 'ben-praticidade',
      badge: 'Praticidade',
      title: 'Mais praticidade',
      description: 'Tudo organizado em um único material.',
    },
  ],
};

export const SKILLS_PRACTICED = {
  title: 'O que a criança pratica?',
  items: ['Números', 'Contagem', 'Associação', 'Sequências', 'Raciocínio', 'Soma'],
};

export const AUDIENCE_DATA = {
  title: 'Para quem é?',
  targetPrefix: 'Crianças de ',
  targetHighlight: '4 a 7 anos',
  targetSuffix: '.',
  description: 'Ideal para uso em casa, Educação Infantil e 1º ano.',
};

export const INCLUDED_DATA = {
  title: 'Você recebe',
  productTitle: '+60 atividades de matemática + 1 Bônus',
  items: [
    { text: '+60 atividades de matemática em PDF de alta resolução (A4)', isBonus: false },
    { text: 'Gabarito completo e orientações pedagógicas', isBonus: false },
    { text: 'Bônus 1: 18 Desafios Matemáticos Divertidos', isBonus: true },
    { text: 'Acesso imediato no seu e-mail', isBonus: false },
    { text: 'Impressão sempre que precisar', isBonus: false },
  ],
};

export const PRICING_DATA = {
  sectionTitle: 'Comece hoje',
  productName: '+60 Atividades de Matemática + 1 Bônus',
  regularPrice: 'R$ 39,90',
  price: 'R$ 9,90',
  installments: 'Pagamento único via PIX ou cartão.',
  ctaText: 'QUERO RECEBER O CADERNO + BÔNUS',
  guaranteeText: 'Garantia de 7 dias.',
  checkoutUrl: 'https://pay.kiwify.com.br/ARaF78N',
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como recebo?',
    answer: 'O acesso ao caderno (+60 atividades) e ao bônus é liberado imediatamente no seu e-mail após a confirmação do pagamento.',
  },
  {
    id: 'faq-2',
    question: 'O que vem no pacote?',
    answer: 'Você recebe o caderno principal com +60 atividades em PDF (A4), gabarito completo e o bônus: 18 Desafios Matemáticos Divertidos.',
  },
  {
    id: 'faq-3',
    question: 'É produto físico?',
    answer: 'Não. O material é 100% digital, pronto para download e impressão.',
  },
  {
    id: 'faq-4',
    question: 'Posso imprimir novamente?',
    answer: 'Sim, você tem acesso permanente e pode imprimir sempre que precisar.',
  },
  {
    id: 'faq-5',
    question: 'Qual a idade recomendada?',
    answer: 'De 4 a 7 anos (Educação Infantil e 1º ano).',
  },
];

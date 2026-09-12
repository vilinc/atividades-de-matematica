export interface PagePreview {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  tagColor: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

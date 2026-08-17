// src/data/serviceTypes.ts — الخدمات

export interface ServiceType {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  keywords: string[];
  image: string;
}

export const serviceTypes: ServiceType[] = [
  {
    slug: 'carpets',
    name: 'تركيب سجاد',
    shortDescription: 'تشكيلة واسعة من السجاد (زل وموكيت) بأنواعه المختلفة',
    description: 'نوفر تشكيلة واسعة من السجاد بأنواعه: سجاد أمازون، سجاد مسجد، سجاد تركي، سجاد حرير، سجاد صوف، زل، وموكيت. تركيب احترافي في جميع مناطق الكويت.',
    keywords: ['تركيب سجاد', 'زل', 'موكيت', 'سجاد الكويت', 'سجاد أمازون', 'سجاد مسجد', 'سجاد تركي'],
    image: '/images/hero-carpet.webp',
  },
  {
    slug: 'parquet',
    name: 'باركيه',
    shortDescription: 'أرضيات خشبية وباركيه بجودة عالية',
    description: 'باركيه HDF، باركيه خشبي طبيعي، وأرضيات laminate بجودة عالية وتركيب احترافي.',
    keywords: ['باركيه الكويت', 'أرضيات خشبية', 'تركيب باركيه', 'باركيه HDF'],
    image: '/images/hero-parquet.webp',
  },
  {
    slug: 'artificial-grass',
    name: 'ثيل صناعي',
    shortDescription: 'عشب صناعي للحدائق والمساحات الخارجية',
    description: 'ثيل صناعي مقاوم للأشعة فوق البنفسجية، لا يحتاج سقي أو قص، يدوم لسنوات طويلة.',
    keywords: ['ثيل صناعي', 'عشب صناعي', 'تركيب ثيل صناعي', 'تنسيق حدائق'],
    image: '/images/hero-grass.webp',
  },
];

// src/data/serviceAreas.ts — المناطق

export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  keywords: string[];
  nearby: string[]; // slugs مناطق قريبة للربط الداخلي
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'al-salmiya',
    name: 'السالمية',
    county: 'حولي',
    keywords: ['سجاد السالمية', 'باركيه السالمية', 'ثيل صناعي السالمية', 'زل السالمية', 'موكيت السالمية'],
    nearby: ['hawally', 'al-asimah'],
  },
  {
    slug: 'hawally',
    name: 'حولي',
    county: 'حولي',
    keywords: ['سجاد حولي', 'باركيه حولي', 'ثيل صناعي حولي', 'زل حولي', 'موكيت حولي'],
    nearby: ['al-salmiya', 'al-asimah'],
  },
  {
    slug: 'al-farwaniyah',
    name: 'الفروانية',
    county: 'الفروانية',
    keywords: ['سجاد الفروانية', 'باركيه الفروانية', 'ثيل صناعي الفروانية', 'زل الفروانية', 'موكيت الفروانية'],
    nearby: ['al-jahra', 'al-asimah'],
  },
  {
    slug: 'al-ahmadi',
    name: 'الأحمدي',
    county: 'الأحمدي',
    keywords: ['سجاد الأحمدي', 'باركيه الأحمدي', 'ثيل صناعي الأحمدي', 'زل الأحمدي', 'موكيت الأحمدي'],
    nearby: ['al-asimah', 'hawally'],
  },
  {
    slug: 'al-jahra',
    name: 'الجهراء',
    county: 'الجهراء',
    keywords: ['سجاد الجهراء', 'باركيه الجهراء', 'ثيل صناعي الجهراء', 'زل الجهراء', 'موكيت الجهراء'],
    nearby: ['al-farwaniyah', 'al-asimah'],
  },
  {
    slug: 'al-asimah',
    name: 'العاصمة',
    county: 'العاصمة',
    keywords: ['سجاد العاصمة', 'باركيه العاصمة', 'ثيل صناعي العاصمة', 'زل العاصمة', 'موكيت العاصمة'],
    nearby: ['hawally', 'al-salmiya'],
  },
];

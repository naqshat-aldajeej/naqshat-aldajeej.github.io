// src/data/business.ts — بيانات مخزن نقشات الضجيج للسجاد
// [ملاحظة]: الحقول بين [ ] معلومات غير متوفرة — استبدلها ببيانات حقيقية قبل النشر

export const business = {
  name: 'مخزن نقشات الضجيج للسجاد',
  legalName: 'مخزن نقشات الضجيج للسجاد',
  tagline: 'سجاد وباركيه وثيل صناعي بجودة عالية وتركيب احترافي في الكويت',
  description:
    'أفضل تشكيلة سجاد (زل وموكيت) وباركيه وثيل صناعي في الكويت. تركيب احترافي بأسعار تنافسية. أكثر من 1700 مشروع منذ 2019.',
  phone: '65061072',
  phoneIntl: '+96565061072',
  phoneHref: 'tel:+96565061072',
  whatsapp: '96565061072',
  whatsappHref: 'https://wa.me/96565061072',
  email: 'info@naqshat-aldajeej.github.io',
  website: 'https://naqshat-aldajeej.github.io',
  owner: 'حامد الشويطي',
  yearEstablished: 2019,
  projectsCount: 1700,
  address: {
    streetAddress: 'الضجيج',
    city: 'الكويت',
    state: 'الكويت',
    zip: '80001',
    country: 'KW',
  },
  coordinates: {
    lat: 29.3759,
    lng: 47.9774,
  },
  // نص معروض في التذييل وصفحة التواصل
  hours: [
    { days: 'السبت - الجمعة', hours: '10:00 ص - 11:00 م' },
  ],
  // بيانات آلية Schema.org (openingHoursSpecification)
  hoursSchema: [
    {
      dayOfWeek: [
        'Saturday',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '10:00',
      closes: '23:00',
    },
  ],
  // معرّف قياس Google Analytics 4 — يُستخدم في BaseLayout.astro
  // ponytail: اتركه فارغاً ('') لتعطيل التتبع كلياً دون حذف الكود.
  analytics: {
    ga4: 'G-7CG6Y612EH',
  },
  // ponytail: روابط السوشيال ميديا مؤجَّلة بطلب صريح من المستخدم (2026-08-17) —
  // لا تُطلب منه ولا تُذكَّر بها في أي جلسة قادمة؛ اتركها placeholders حتى
  // يطلب هو إضافتها بنفسه.
  social: {
    instagram: '[رابط إنستغرام]',
    facebook: '[رابط فيسبوك]',
    tiktok: '[رابط تيك توك]',
  },
};

export const yearsInBusiness = () => new Date().getFullYear() - business.yearEstablished;

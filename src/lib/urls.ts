// روابط الموقع — بنية التوليف: /services/{الخدمة}/{المنطقة}/
// (مطابقة لخطة السيو 02_SITE_STRUCTURE.md و05_SCHEMA_TEMPLATES.json)
export const serviceUrl = (serviceSlug: string) => `/services/${serviceSlug}/`;
export const areaUrl = (areaSlug: string) => `/areas/${areaSlug}/`;
export const comboUrl = (serviceSlug: string, areaSlug: string) =>
  `/services/${serviceSlug}/${areaSlug}/`;
export const contactUrl = () => '/contact/';
export const aboutUrl = () => '/about/';
export const servicesUrl = () => '/services/';
export const areasUrl = () => '/areas/';

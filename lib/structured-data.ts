import { getCanonicalUrl, siteUrl } from '@/lib/seo';
import { caseStudies } from '@/lib/case-studies';
import { siteConfig } from '@/lib/site-config';

const normalizedPhone = siteConfig.contacts.phoneHref.replace('tel:', '');

type BreadcrumbItem = {
  name: string;
  path: string;
};

type ServiceSchemaInput = {
  name: string;
  path: string;
  description: string;
  serviceType: string;
  offers?: string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: siteConfig.brandName,
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    description: siteConfig.description,
    email: siteConfig.contacts.email,
    telephone: normalizedPhone,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: siteConfig.contacts.email,
        telephone: normalizedPhone,
        areaServed: 'RU',
        availableLanguage: ['ru'],
      },
    ],
  };
}

export function buildWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.brandName,
    description: siteConfig.description,
    inLanguage: 'ru-RU',
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
  };
}

export function buildProfessionalServiceJsonLd(path: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${getCanonicalUrl(path)}#service-business`,
    name: siteConfig.brandName,
    url: getCanonicalUrl(path),
    description,
    email: siteConfig.contacts.email,
    telephone: normalizedPhone,
    areaServed: ['RU', 'CIS', 'Worldwide'],
    availableLanguage: ['ru'],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Разработка сайтов',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Интеграция AI',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO-продвижение',
        },
      },
    ],
    parentOrganization: {
      '@id': `${siteUrl}/#organization`,
    },
  };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}

export function buildServiceJsonLd({
  name,
  path,
  description,
  serviceType,
  offers = [],
}: ServiceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${getCanonicalUrl(path)}#service`,
    name,
    serviceType,
    description,
    provider: {
      '@id': `${siteUrl}/#organization`,
    },
    areaServed: ['RU', 'CIS', 'Worldwide'],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: getCanonicalUrl(path),
    },
    hasOfferCatalog: offers.length
      ? {
          '@type': 'OfferCatalog',
          name: `${name} - направления работы`,
          itemListElement: offers.map((offer) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: offer,
            },
          })),
        }
      : undefined,
  };
}

export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildCollectionPageJsonLd(name: string, path: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${getCanonicalUrl(path)}#collection`,
    name,
    url: getCanonicalUrl(path),
    description,
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
  };
}

export function buildCasesItemListJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: caseStudies.map((caseStudy, index) => ({
      '@type': 'CreativeWork',
      position: index + 1,
      name: caseStudy.client,
      description: caseStudy.summary,
      about: caseStudy.industry,
      url: getCanonicalUrl(`/cases#${caseStudy.id}`),
    })),
  };
}

export function buildContactPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${getCanonicalUrl('/contacts')}#contact-page`,
    name: `Контакты ${siteConfig.brandName}`,
    url: getCanonicalUrl('/contacts'),
    description: 'Контакты студии Vorontsov Labs для обсуждения сайта, AI-проекта, SEO или продуктовой разработки.',
    mainEntity: {
      '@id': `${siteUrl}/#organization`,
    },
  };
}

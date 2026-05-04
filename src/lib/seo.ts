import type { Metadata } from "next";
import { CONFIG, type SeoPageKey } from "@/config";
import type { SeoPageMetadata } from "@/types";

/**
 * Generate Next.js Metadata for a given page key.
 * Merges per-page SEO overrides with global defaults.
 */
export function generatePageMetadata(pageKey: SeoPageKey): Metadata {
  const page = CONFIG.seo.pages[pageKey] as SeoPageMetadata;
  const seo = CONFIG.seo;

  return {
    metadataBase: new URL(seo.siteUrl),
    title: page.title || seo.defaultTitle,
    description: page.description || seo.defaultDescription,
    keywords: page.keywords || seo.defaultKeywords,
    authors: [{ name: CONFIG.company.name }],
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    alternates: {
      canonical: page.canonicalPath,
    },
    openGraph: {
      type: "website",
      siteName: CONFIG.company.name,
      locale: seo.locale,
      url: `${seo.siteUrl}${page.canonicalPath}`,
      title: page.ogTitle || page.title || seo.defaultTitle,
      description: page.ogDescription || page.description || seo.defaultDescription,
      images: [
        {
          url: seo.defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${CONFIG.company.name} — Industrial Painting & Protective Coating`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.ogTitle || page.title || seo.defaultTitle,
      description: page.ogDescription || page.description || seo.defaultDescription,
      images: [seo.defaultOgImage],
      ...(seo.twitterHandle ? { creator: seo.twitterHandle } : {}),
    },
    other: {
      "theme-color": seo.themeColor,
      "geo.region": "IN-GJ",
      "geo.placename": "Bhavnagar, Gujarat, India",
      "geo.position": `${CONFIG.seo.schema.localBusiness.geo.latitude};${CONFIG.seo.schema.localBusiness.geo.longitude}`,
      ICBM: `${CONFIG.seo.schema.localBusiness.geo.latitude}, ${CONFIG.seo.schema.localBusiness.geo.longitude}`,
      "format-detection": "telephone=no",
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-title": CONFIG.company.name,
    },
  };
}

/* ─── JSON-LD Schema Generators ─── */

/** Schema 1: LocalBusiness — inject on ALL pages */
export function getLocalBusinessSchema() {
  const lb = CONFIG.seo.schema.localBusiness;
  return {
    "@context": "https://schema.org",
    "@type": lb.type,
    additionalType: lb.additionalType,
    name: lb.name,
    description: lb.description,
    url: lb.url,
    telephone: lb.telephone,
    email: lb.email,
    foundingDate: lb.foundingDate,
    priceRange: lb.priceRange,
    currenciesAccepted: lb.currenciesAccepted,
    paymentAccepted: lb.paymentAccepted,
    areaServed: lb.areaServed,
    address: {
      "@type": "PostalAddress",
      streetAddress: lb.address.streetAddress,
      addressLocality: lb.address.addressLocality,
      addressRegion: lb.address.addressRegion,
      postalCode: lb.address.postalCode,
      addressCountry: lb.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: lb.geo.latitude,
      longitude: lb.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: lb.telephone,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi", "Gujarati"],
      areaServed: "IN",
    },
    sameAs: lb.sameAs,
  };
}

/** Schema 2: Service — inject on services page for each service */
export function getServiceSchemas(
  services: { id: string; title: string; fullDesc: string }[]
) {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.fullDesc,
    provider: {
      "@type": "LocalBusiness",
      name: CONFIG.company.name,
      url: CONFIG.seo.siteUrl,
    },
    areaServed: {
      "@type": "State",
      name: "Gujarat",
    },
    url: `${CONFIG.seo.siteUrl}/services#${service.id}`,
  }));
}

/** Schema 3: FAQPage — inject on contact page */
export function getFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/** Schema 4: BreadcrumbList — inject on every page except home */
export function getBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${CONFIG.seo.siteUrl}${item.path}`,
    })),
  };
}

/** Schema 5: WebSite with SearchAction — inject on home page only */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: CONFIG.company.name,
    url: CONFIG.seo.siteUrl,
    description: CONFIG.seo.defaultDescription,
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: `${CONFIG.seo.siteUrl}/projects?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

/** Schema 6: ImageObject — for OG/share image */
export function getOgImageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    url: `${CONFIG.seo.siteUrl}${CONFIG.seo.defaultOgImage}`,
    width: 1200,
    height: 630,
    caption: `${CONFIG.company.name} — Industrial Painting & Protective Coating Solutions, Bhavnagar, Gujarat`,
  };
}

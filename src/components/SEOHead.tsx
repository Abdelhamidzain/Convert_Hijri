import { useEffect } from 'react';
import type { PageSEO } from '@/lib/seoData';

interface SEOHeadProps {
  seo: PageSEO;
  schema?: object[];
}

export function SEOHead({ seo, schema }: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = seo.title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    const updateOGTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    updateMetaTag('description', seo.description);
    updateMetaTag('keywords', seo.keywords.join(', '));
    
    // Open Graph tags
    updateOGTag('og:title', seo.title);
    updateOGTag('og:description', seo.description);
    updateOGTag('og:type', 'website');
    updateOGTag('og:url', `https://hijri-converter.lovable.app${seo.canonical}`);
    
    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', seo.title);
    updateMetaTag('twitter:description', seo.description);
    
    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://hijri-converter.lovable.app${seo.canonical}`);
    
    // JSON-LD Schema
    if (schema && schema.length > 0) {
      // Remove existing schema scripts
      document.querySelectorAll('script[data-schema="programmatic"]').forEach(el => el.remove());
      
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.setAttribute('data-schema', 'programmatic');
      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }
    
    return () => {
      // Cleanup schema on unmount
      document.querySelectorAll('script[data-schema="programmatic"]').forEach(el => el.remove());
    };
  }, [seo, schema]);
  
  return null;
}

// Schema generators
export function generateWebPageSchema(seo: PageSEO): object {
  return {
    '@type': 'WebPage',
    '@id': `https://hijri-converter.lovable.app${seo.canonical}`,
    url: `https://hijri-converter.lovable.app${seo.canonical}`,
    name: seo.title,
    description: seo.description,
    inLanguage: 'ar',
    isPartOf: {
      '@id': 'https://hijri-converter.lovable.app/#website'
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]): object {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://hijri-converter.lovable.app${item.url}`
    }))
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]): object {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateHowToSchema(title: string, steps: string[]): object {
  return {
    '@type': 'HowTo',
    name: title,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      text: step
    }))
  };
}

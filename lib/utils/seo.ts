import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
  noindex?: boolean;
}

export function generateSEO({
  title,
  description,
  keywords,
  path = "",
  image = "/images/og-image.jpg",
  noindex = false,
}: SEOProps): Metadata {
  const url = `${SITE_CONFIG.domain}${path}`;
  const fullImage = image.startsWith("http") ? image : `${SITE_CONFIG.domain}${image}`;

  return {
    title,
    description,
    keywords: keywords || SITE_CONFIG.keywords,
    robots: noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImage],
    },
  };
}

// Calculate keyword density for SEO validation
export function calculateKeywordDensity(text: string, keyword: string): number {
  const words = text.toLowerCase().split(/\s+/).length;
  const keywordPattern = new RegExp(keyword.toLowerCase().replace(/\s+/g, "\\s+"), "gi");
  const matches = text.match(keywordPattern)?.length || 0;
  return (matches / words) * 100;
}

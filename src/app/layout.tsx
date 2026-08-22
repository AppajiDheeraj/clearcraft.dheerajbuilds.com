import type { Metadata } from "next";
import { Just_Another_Hand, Geist } from "next/font/google";
import localFont from "next/font/local";
import { offers } from "@/modules/home/data/offers";
import { siteConfig } from "@/lib/site";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const satoshi = localFont({
  src: "./fonts/satoshi-medium.woff2",
  weight: "500",
  style: "normal",
  variable: "--font-satoshi",
  display: "swap",
});

const justAnotherHand = Just_Another_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Appaji Dheeraj", url: siteConfig.url }],
  creator: "Appaji Dheeraj",
  publisher: siteConfig.name,
  category: "Web design and product design",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/metadata.png",
        width: 1200,
        height: 630,
        alt: "Dheeraj Builds web and product design studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@AppajiDheeraj",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/metadata.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-light.ico", type: "image/x-icon" },
    ],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.svg`,
    image: `${siteConfig.url}/metadata.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    founder: {
      "@type": "Person",
      name: "Appaji Dheeraj",
      jobTitle: "Product designer and developer",
      sameAs: siteConfig.socialLinks,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.countryCode,
    },
    areaServed: {
      "@type": "Country",
      name: siteConfig.location.country,
    },
    sameAs: siteConfig.socialLinks,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Design services",
      itemListElement: offers.map((offer) => ({
        "@type": "Offer",
        price: offer.priceValue,
        priceCurrency: "USD",
        url: `${siteConfig.url}/#pricing`,
        itemOffered: {
          "@type": "Service",
          name: offer.title,
          description: offer.description,
          provider: { "@id": `${siteConfig.url}/#business` },
        },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    description: siteConfig.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${siteConfig.url}/#business` },
  },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={cn("h-full", "antialiased", satoshi.variable, justAnotherHand.variable, "font-sans", geist.variable)}
    >
      <body className="flex min-h-full flex-col">
        {jsonLd.map((schema) => (
          <script
            key={schema["@type"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
            }}
          />
        ))}
        {children}
      </body>
    </html>
  );
}

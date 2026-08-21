import type { Metadata } from "next";
import { Just_Another_Hand, Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const satoshi = localFont({
  src: "./fonts/satoshi-medium.woff2",
  weight: "500",
  style: "normal",
  variable: "--font-satoshi",
  display: "swap",
});

const brittany = localFont({
  src: "./fonts/BrittanySignature.ttf",
  variable: "--font-signature",
  display: "swap",
});

const justAnotherHand = Just_Another_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studio.dheerajbuilds.com"),
  title: "Studio",
  description:
    "Studio creates high-quality websites, landing pages and UI/UX experiences that make brands easier to understand and choose.",
  openGraph: {
    title: "Studio",
    description:
      "Studio creates high-quality websites, landing pages and UI/UX experiences that make brands easier to understand and choose.",
    images: [
      {
        url: "/metadata.png",
        width: 1200,
        height: 630,
        alt: "Studio — Book a Call",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/metadata.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", satoshi.variable, brittany.variable, justAnotherHand.variable, "font-sans", geist.variable)}
    >
      <head>
        {/* SVG favicon — scales crisp at any size, supports dark/light mode natively */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* ICO fallback for older browsers (IE, older Edge) */}
        <link rel="icon" href="/favicon-light.ico" type="image/x-icon" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

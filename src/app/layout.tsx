import type { Metadata } from "next";
import "./globals.css";

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
      className="h-full antialiased"
    >
      <head>
        <link rel="icon" href="/favicon-light.ico" type="image/x-icon" />
        <link
          rel="icon"
          href="/favicon-light.ico"
          type="image/x-icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicon-dark.ico"
          type="image/x-icon"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

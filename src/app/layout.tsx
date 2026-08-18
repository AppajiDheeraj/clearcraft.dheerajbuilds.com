import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clear Craft — Web design made clear",
  description:
    "Clear Craft creates high-quality websites, landing pages and UI/UX experiences that make brands easier to understand and choose.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

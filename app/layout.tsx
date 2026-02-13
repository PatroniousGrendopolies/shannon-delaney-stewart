import type { Metadata } from "next";
import { ebGaramond } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shannon Delaney Stewart",
  description: "Photographer based in Tiohtià:ke (Montréal, Québec)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ebGaramond.variable}>
      <body className={`${ebGaramond.className} antialiased`}>{children}</body>
    </html>
  );
}

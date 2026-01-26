import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicanteen - The Ultimate Pouch Carrier",
  description: "Discreet, attractive, and pocket-friendly carrier for your nicotine pouches. Available in multiple colors.",
  keywords: "nicotine pouch carrier, pouch case, nicotine accessory, pocket carrier",
  metadataBase: new URL("https://thenicanteen.com"),
  openGraph: {
    title: "Nicanteen - The Ultimate Pouch Carrier",
    description: "Discreet, attractive, and pocket-friendly carrier for your nicotine pouches.",
    type: "website",
    url: "https://thenicanteen.com",
    siteName: "Nicanteen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicanteen - The Ultimate Pouch Carrier",
    description: "Discreet, attractive, and pocket-friendly carrier for your nicotine pouches.",
  },
  alternates: {
    canonical: "https://thenicanteen.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
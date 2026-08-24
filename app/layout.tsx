import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicanteen — The pouch case nobody notices",
  description: "A slim, matte-black carrier for nicotine pouches. Discreet enough to disappear into any pocket, keeping ~20 pouches fresh and uncrushed. $13, free shipping.",
  keywords: "nicotine pouch carrier, discreet pouch case, slim pouch holder, nicotine accessory, pocket carrier",
  metadataBase: new URL("https://thenicanteen.com"),
  openGraph: {
    title: "Nicanteen — The pouch case nobody notices",
    description: "A slim, matte-black carrier that keeps your nicotine pouches fresh, uncrushed, and out of sight. $13, free shipping.",
    type: "website",
    url: "https://thenicanteen.com",
    siteName: "Nicanteen",
    images: [{ url: "/product/case-4.jpg", width: 1200, height: 900, alt: "Nicanteen matte-black pouch carrier" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicanteen — The pouch case nobody notices",
    description: "A slim, matte-black carrier that keeps your nicotine pouches fresh, uncrushed, and out of sight.",
    images: ["/product/case-4.jpg"],
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
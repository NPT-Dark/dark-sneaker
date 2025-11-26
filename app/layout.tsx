import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Dark Sneaker",
    default: "Dark Sneaker — Premium Sneakers, Streetwear & Limited Drops",
  },
  description:
    "Discover the latest & hottest sneakers at Dark Sneaker. Shop authentic Nike, Adidas, Jordan, New Balance & more — fast shipping, best prices, and exclusive drops. Your ultimate sneaker destination.",

  keywords: [
    "sneakers",
    "giày sneaker",
    "buy sneakers online",
    "authentic sneakers",
    "Nike sneakers",
    "Adidas sneakers",
    "Jordan sneakers",
    "limited edition sneakers",
    "streetwear",
    "sneaker store",
    "Dark Sneaker",
    "giày thể thao chính hãng",
    "sneaker Vietnam",
  ],
  authors: [
    {
      name: "Dark Sneaker Team",
      url:
        process.env.NEXT_PUBLIC_SITE_URL || "https://dark-sneaker.vercel.app",
    },
  ],
  creator: "Dark Sneaker",
  publisher: "Dark Sneaker Co.",

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US", // hoặc "vi_VN" nếu chủ yếu khách VN
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://dark-sneaker.vercel.app",
    siteName: "Dark Sneaker",
    title: "Dark Sneaker — Where Style Meets Sole",
    description:
      "Authentic sneakers • Limited drops • Fast shipping • Trusted by 50,000+ sneakerheads.",
    images: [
      {
        url:
          (process.env.NEXT_PUBLIC_SITE_URL ||
            "https://dark-sneaker.vercel.app") + "/logo.png",
        width: 1200,
        height: 630,
        alt: "Dark Sneaker — Premium Sneaker Store",
        type: "image/png",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@DarkSneaker",
    creator: "@DarkSneaker",
    title: "Dark Sneaker — Fresh Drops. Fast Delivery.",
    description:
      "🔥 Shop the latest Nike, Jordan & Adidas drops. 100% authentic. Free shipping over $100.",
    images: [
      (process.env.NEXT_PUBLIC_SITE_URL || "https://dark-sneaker.vercel.app") +
        "/logo.png",
    ],
  },

  // Optional: Robots & Indexing control
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/x-icon" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/logo.png",
  },
  alternates: {
    canonical:
      process.env.NEXT_PUBLIC_SITE_URL || "https://dark-sneaker.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

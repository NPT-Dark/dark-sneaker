import BrandContent from "@/components/content/brandContent";
import HotDealContent from "@/components/content/hotDealContent";
import SectionHomeWrapper from "@/components/layout/sectionHomeWrapper";
import { HomeSchema } from "@/schemaOrg/homeSchema";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
export const dynamic = "force-dynamic";
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
    locale: "vi_VN", // hoặc "vi_VN" nếu chủ yếu khách VN
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
export default function Home() {
  return (
    <>
      <HomeSchema />
      <main className="flex flex-col snap-y snap-mandatory overflow-y-auto scroll-smooth px-default h-screen relative">
        <Image
          src="/home/banner-background.webp"
          fill
          alt="banner background homepage - dark sneaker"
          aria-label="banner background homepage - dark sneaker"
          title="banner background homepage - dark sneaker"
          className="w-full object-cover object-center -z-10"
        />
        <SectionHomeWrapper id="welcome">
          <div className="grid grid-cols-2 w-full h-screen place-items-center max-md:grid-cols-1 max-md:w-full">
            <div className="space-y-3 max-w-2/3 mx-auto max-sm:max-w-full">
              <p className="font-semibold text-lg">WELCOME TO</p>
              <h1 className="drop-shadow-fuchsia-300 drop-shadow-sm text-6xl font-bold w-fit max-lg:text-4xl">
                DARK SNEAKER
              </h1>
              <p className="whitespace-pre-wrap max-lg:text-sm">
                {`Step into the shadows of true street culture. Dark Sneaker brings you a curated selection of rare, limited-edition sneakers crafted for those who move differently.`}
                No noise, no hype—just{" "}
                <span className="font-semibold">pure attitude</span>,{" "}
                <span className="font-semibold">authentic quality</span>, and{" "}
                <span className="font-semibold">the underground energy</span>{" "}
                that defines real style.
              </p>
              <button className="bg-fuchsia-300 drop-shadow-sm drop-shadow-gray-300 px-8 py-3 rounded-3xl font-bold mt-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                Shop now
              </button>
            </div>
            <Image
              src="/home/sneaker-banner.webp"
              width={500}
              height={300}
              alt="sneaker banner homepage - dark sneaker"
              aria-label="sneaker banner homepage - dark sneaker"
              title="sneaker banner homepage - dark sneaker"
              className="w-auto object-contain object-center drop-shadow-2xl drop-shadow-fuchsia-300 max-w-2/3 max-md:hidden"
              priority
            />
          </div>
          <div className="absolute left-0 bottom-4 w-full flex justify-center">
            <Link
              href="#hot-deals"
              aria-label="link to section hot deals"
              title="link to section hot deals"
              rel="noopener noreferrer"
            >
              <FaCaretDown className="text-3xl text-fuchsia-300 drop-shadow-sm drop-shadow-gray-300 animate-bounce" />
            </Link>
          </div>
        </SectionHomeWrapper>
        <SectionHomeWrapper id="hot-deals">
          <div className="flex flex-col w-full h-full items-center justify-center gap-y-16 px-default max-sm:gap-y-5 relative">
            <h2 className="text-6xl font-bold">Hot Deals</h2>
            <HotDealContent />
            <div className="absolute left-0 bottom-4 w-full flex justify-center">
              <Link
                href="#brands"
                aria-label="link to section brands"
                title="link to section brands"
                rel="noopener noreferrer"
              >
                <FaCaretDown className="text-3xl text-fuchsia-300 drop-shadow-sm drop-shadow-gray-300 animate-bounce" />
              </Link>
            </div>
          </div>
        </SectionHomeWrapper>
        <SectionHomeWrapper id="brands">
          <div className="flex flex-col w-full h-full items-center justify-center gap-y-16 px-default max-sm:gap-y-5 relative">
            <h2 className="text-6xl font-bold">Brands</h2>
            <BrandContent />
            <div className="absolute left-0 bottom-4 w-full flex justify-center">
              <Link
                href="#welcome"
                aria-label="link to section welcome home"
                title="link to section welcome home"
                rel="noopener noreferrer"
                className="animate-bounce text-fuchsia-300"
              >
                <FaCaretUp className="text-3xl drop-shadow-sm drop-shadow-gray-300" />
                Top
              </Link>
            </div>
          </div>
        </SectionHomeWrapper>
      </main>
    </>
  );
}

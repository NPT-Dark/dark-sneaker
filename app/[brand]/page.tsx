import SneakerCard from "@/components/ui/sneakerCard";
import { Sneaker, SneakerCategory } from "@/data/home";
import { BrandSchema } from "@/schemaOrg/brandSchema";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
export const dynamic = "force-dynamic";
async function fetchSneakerByBrand({
  brand,
  page,
}: {
  brand: string;
  page: string;
}) {
  const params = new URLSearchParams();
  params.set("brand", brand);
  params.set("page", page);
  params.set("limit", "8");

  try {
    const url = `${process.env.NEXT_PUBLIC_SITE_URL
      }/api/sneaker?${params.toString()}`;
    const res = await fetch(url, { next: { revalidate: 60 } }); // ISR nếu bạn deploy rồi

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("❌ Fetch sneakers failed:", error);
    // Trả fallback hợp lý — ví dụ mảng rỗng + meta giả
    return {
      data: [],
      meta: { totalPages: 1, totalItems: 0 },
    };
  }
}

// 🔹 ✅ generateMetadata — chạy trên server
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ brand: string }>;
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const paramsAsync = await params;
  const searchParamsAsync = await searchParams;
  // 🔹 Danh sách brand hợp lệ — nên dùng enum hoặc const array
  const BRANDS = ["nike", "adidas", "puma"] as const;
  type Brand = (typeof BRANDS)[number];

  // 🔹 Thông tin chi tiết từng brand — dùng để generate metadata & content
  const BRAND_INFO: Record<
    Brand,
    {
      name: string;
      slogan: string;
      description: string;
      keywords: string[];
    }
  > = {
    nike: {
      name: "Nike",
      slogan: "Just Do It.",
      description:
        "Explore Nike sneakers at Dark Sneaker: Air Force 1, Air Jordan, Dunk Low, Air Max & exclusive collaborations. 100% authentic, fast shipping.",
      keywords: [
        "Nike sneakers",
        "Nike Air Force 1",
        "Nike Air Jordan",
        "Nike Dunk Low",
        "Nike SB",
        "buy Nike online",
        "Nike limited edition",
        "giày Nike chính hãng",
      ],
    },
    adidas: {
      name: "Adidas",
      slogan: "Impossible Is Nothing.",
      description:
        "Shop Adidas sneakers: Ultraboost, Samba, Gazelle, Yeezy (restock), Forum & more. Authentic stock, best prices, Vietnam delivery.",
      keywords: [
        "Adidas sneakers",
        "Adidas Ultraboost",
        "Adidas Samba",
        "Adidas Gazelle",
        "Adidas Yeezy",
        "Adidas Forum",
        "giày Adidas chính hãng",
      ],
    },
    puma: {
      name: "Puma",
      slogan: "Forever Faster.",
      description:
        "Discover Puma sneakers: RS-X, Suede, Clyde, Mayze & collaborations. Stylish, sporty, and affordable — all 100% authentic at Dark Sneaker.",
      keywords: [
        "Puma sneakers",
        "Puma RS-X",
        "Puma Suede",
        "Puma Clyde",
        "Puma Mayze",
        "giày Puma chính hãng",
        "Puma streetwear",
      ],
    },
  };
  const brandSlug = paramsAsync.brand.toLowerCase();
  const page = searchParamsAsync.page
    ? parseInt(searchParamsAsync.page, 10)
    : 1;

  // Kiểm tra brand hợp lệ
  if (!BRANDS.includes(brandSlug as Brand)) {
    return {
      title: "Brand Not Found | Dark Sneaker",
      robots: { index: false, follow: false },
    };
  }

  const brand = brandSlug as Brand;
  const info = BRAND_INFO[brand];

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://dark-sneaker.vercel.app";
  const url = `${baseUrl}/${brand}${page > 1 ? `?page=${page}&limit=8` : ""}`;

  return {
    title: {
      template: `%s | ${info.name} Sneakers | Dark Sneaker`,
      default: `${info.name} Sneakers ${page > 1 ? `— Page ${page}` : ""} | ${info.slogan
        } | Dark Sneaker`,
    },
    description:
      page === 1
        ? info.description
        : `${info.description} Page ${page} of ${info.name} collection.`,

    keywords: [
      ...info.keywords,
      "Dark Sneaker",
      "sneaker store",
      "authentic sneakers",
      "giày thể thao chính hãng",
    ],

    authors: [{ name: "Dark Sneaker Team", url: baseUrl }],
    creator: "Dark Sneaker",
    publisher: "Dark Sneaker Co.",

    openGraph: {
      type: "website",
      locale: "vi_VN",
      url,
      siteName: "Dark Sneaker",
      title: `${info.name} Sneakers Collection | Dark Sneaker`,
      description: info.description,
      images: [
        {
          url: `${baseUrl}/${brand}-icon.svg`, // ← nên có ảnh riêng cho từng brand
          width: 1200,
          height: 630,
          alt: `${info.name} Sneakers at Dark Sneaker`,
          type: "image/svg",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@DarkSneaker",
      creator: "@DarkSneaker",
      title: `${info.name} Sneakers — ${info.slogan}`,
      description: info.description,
      images: [`${baseUrl}/${brand}-icon.svg`],
    },

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: url,
    },
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ brand: string }>; // chỉ có `brand`
  searchParams: Promise<{ page?: string }>; // `page` là query string → string | undefined
}): Promise<React.ReactNode> {
  const { brand } = await params;
  const { page } = await searchParams;
  const listBrand = Object.values(SneakerCategory) as SneakerCategory[];
  if (listBrand.indexOf(brand as SneakerCategory) === -1)
    return (
      <div className="h-screen w-screen  text-3xl flex items-center justify-center">
        This brand does not exist
      </div>
    );
  const {
    data: listSneaker,
    meta: { totalPages },
  } = await fetchSneakerByBrand({ brand, page: page || "1" });
  return (
    <>
      <BrandSchema
        brand={brand as "nike" | "adidas" | "puma"}
        page={page ? parseInt(page !== undefined ? page : "1", 10) : 1}
        totalPages={totalPages}
        itemCount={listSneaker.length}
      />

      <main className="w-full p-default min-h-screen overflow-hidden pt-20 flex flex-col gap-2 items-center">
        <h1 className="text-3xl font-bold capitalize">{brand || "brand"}</h1>
        <div className="grid grid-cols-4 gap-5 px-4 max-w-safe max-xl:grid-cols-2 max-sm:grid-cols-1">
          {((listSneaker as Sneaker[]) || []).map((sneaker: Sneaker, index) => (
            <SneakerCard
              key={index}
              image={sneaker.image}
              name={sneaker.name}
              discount={sneaker.discount}
              price={sneaker.price}
              color={sneaker.color}
              category={sneaker.category}
            />
          ))}
        </div>
        <div className="flex flex-nowrap w-fit mx-auto gap-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageItem) => (
              <Link
                href={`/${brand}?page=${pageItem}`}
                prefetch={false}
                aria-label={`page ${pageItem} - ${brand} - dark sneaker`}
                title={`page ${pageItem} - ${brand} - dark sneaker`}
                key={pageItem}
                className={
                  "px-4 py-1 border border-fuchsia-200 rounded-lg  hover:scale-105 transition-all duration-300" +
                  (pageItem.toString() === (page || "1")
                    ? " bg-fuchsia-200"
                    : "bg-white")
                }
              >
                {pageItem}
              </Link>
            )
          )}
        </div>
      </main>
    </>
  );
}
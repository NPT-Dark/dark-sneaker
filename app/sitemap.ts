import { SneakerCategory } from "@/data/home";
import { MetadataRoute } from "next";
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://dark-sneaker.vercel.app";

  // Static routes
  const staticRoutes = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Brands routes
  const brands = Object.values(SneakerCategory) as SneakerCategory[];
  const brandRoutes = brands.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  for (const brand of brands) {
    const { meta: { totalPages } } = await fetchSneakerByBrand({ brand, page: "1" });

    // Tạo url page 1 ~ totalPages
    for (let page = 1; page <= totalPages; page++) {
      brandRoutes.push({
        url: `${baseUrl}/${brand}?page=${page}`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: 0.9,
      });
    }
  }

  return [...staticRoutes, ...brandRoutes];
}

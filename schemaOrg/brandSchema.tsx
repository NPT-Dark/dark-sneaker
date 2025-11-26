/* eslint-disable @typescript-eslint/no-explicit-any */
// components/seo/BrandSchema.tsx
import Script from "next/script";

interface BrandSchemaProps {
  brand: "nike" | "adidas" | "puma";
  page?: number;
  totalPages?: number;
  itemCount?: number;
}

export function BrandSchema({ brand, page = 1 }: BrandSchemaProps) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://dark-sneaker.vercel.app";
  const url = `${baseUrl}/${brand}${page > 1 ? `?page=${page}&limit=10` : ""}`;

  // Thông tin theo brand
  const brandInfo: Record<
    typeof brand,
    {
      name: string;
      slogan: string;
      description: string;
    }
  > = {
    nike: {
      name: "Nike",
      slogan: "Just Do It.",
      description:
        "Authentic Nike sneakers: Air Force 1, Air Jordan, Dunk, Air Max & more.",
    },
    adidas: {
      name: "Adidas",
      slogan: "Impossible Is Nothing.",
      description:
        "Real Adidas sneakers: Ultraboost, Samba, Gazelle, Yeezy & Forum.",
    },
    puma: {
      name: "Puma",
      slogan: "Forever Faster.",
      description:
        "Genuine Puma sneakers: RS-X, Suede, Clyde & Mayze collections.",
    },
  };

  const info = brandInfo[brand];

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url: url,
    name: `${info.name} Sneakers Collection${
      page > 1 ? ` - Page ${page}` : ""
    }`,
    description: `${info.description} Shop at Dark Sneaker — 100% authentic, fast Vietnam delivery.`,

    isPartOf: {
      "@type": "WebSite",
      "@id": `${baseUrl}#website`,
      name: "Dark Sneaker",
      url: baseUrl,
    },

    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: `${info.name} Sneakers`,
          item: `${baseUrl}/${brand}`,
        },
      ],
    },

    // ProductCollection (tốt cho Google Product Listings)
    "@graph": [
      {
        "@type": "ProductCollection",
        name: `${info.name} Sneakers at Dark Sneaker`,
        description: info.description,
        hasPart: {
          "@type": "ListItem",
          position: page,
          item: {
            "@type": "ProductCollection",
            name: `Page ${page} of ${info.name} Sneakers`,
          },
        },
      },

      // Organization (reuse from home)
      {
        "@type": "Organization",
        "@id": `${baseUrl}#organization`,
        name: "Dark Sneaker Co.",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo.png`,
          width: 512,
          height: 512,
        },
      },
    ],
  };

  // Nếu là trang 1 → thêm "mainEntity" để Google hiểu đây là landing page chính của brand
  if (page === 1) {
    (schema as any)["mainEntity"] = {
      "@type": "ProductCollection",
      name: `${info.name} Sneakers`,
      description: info.description,
      url: `${baseUrl}/${brand}`,
    };
  }

  return (
    <Script
      id={`dark-sneaker-brand-${brand}-schema`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

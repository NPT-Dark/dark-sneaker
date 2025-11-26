// components/seo/HomeSchema.tsx
import Script from "next/script";

export function HomeSchema() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://dark-sneaker.vercel.app";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dark Sneaker",
    url: baseUrl,
    description:
      "Premium Sneakers, Streetwear & Limited Drops — Authentic Nike, Adidas, Jordan & more.",
    publisher: {
      "@type": "Organization",
      name: "Dark Sneaker Co.",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
        width: 512,
        height: 512,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },

    // Optional: Add as Organization too
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}#organization`,
        name: "Dark Sneaker",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo.png`,
          width: 512,
          height: 512,
          caption: "Dark Sneaker Logo",
        },
        sameAs: [
          "https://facebook.com/darksneaker",
          "https://instagram.com/darksneaker",
          "https://twitter.com/DarkSneaker",
          // Thêm nếu có
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "VN",
          // Có thể thêm city, street nếu muốn
        },
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}#webpage`,
        url: baseUrl,
        name: "Dark Sneaker — Premium Sneaker Store",
        description:
          "Shop authentic Nike, Adidas, Jordan & Puma sneakers. Fast shipping, best prices, limited drops.",
        isPartOf: {
          "@id": `${baseUrl}#website`,
        },
        datePublished: "2024-01-01T00:00:00+07:00",
        dateModified: new Date().toISOString(),
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: baseUrl,
            },
          ],
        },
      },
    ],
  };

  return (
    <Script
      id="dark-sneaker-home-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

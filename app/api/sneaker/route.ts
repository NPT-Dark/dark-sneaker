// ...existing code...
import { sneakerData } from "../../../data/home";
export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get("search");

  if (q === "hot-deals") {
    const result = [...sneakerData]
      .sort((a, b) => b.discount - a.discount)
      .slice(0, 6);
    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
    });
  }

  // Pagination for general list
  const pageRaw = url.searchParams.get("page") ?? "1";
  const limitRaw = url.searchParams.get("limit") ?? "10";
  const brand = url.searchParams.get("brand");
  const page = Math.max(Number.parseInt(pageRaw, 10) || 1, 1);
  const limit = Math.max(Number.parseInt(limitRaw, 10) || 10, 1);

  const total = sneakerData.filter((item) => item.category === brand).length;
  const totalPages = Math.max(Math.ceil(total / limit), 1);
  const start = (page - 1) * limit;
  const items = sneakerData
    .filter((item) => item.category === brand)
    .slice(start, start + limit);

  const payload = {
    data: items,
    meta: {
      total,
      page,
      limit,
      totalPages,
    },
  };

  return new Response(JSON.stringify(payload), {
    headers: {
      "Content-Type": "application/json",
      "X-Total-Count": String(total),
      "X-Total-Pages": String(totalPages),
    },
  });
}

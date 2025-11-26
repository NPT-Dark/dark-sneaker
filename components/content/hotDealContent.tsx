import React from "react";
import HotDealList from "./hotDealList";

export default async function HotDealContent(): Promise<React.ReactNode> {
  const hotDealData = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/sneaker?search=hot-deals`
  ).then((res) => res.json());
  return <HotDealList listSneaker={hotDealData} />;
}

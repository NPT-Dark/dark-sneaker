import React from "react";
import { SneakerCategory } from "@/data/home";
import Image from "next/image";

export default function BrandContent(): React.ReactNode {
  const categories = Object.values(SneakerCategory) as SneakerCategory[];

  return (
    <div className="grid grid-cols-3 w-full max-w-safe max-sm:grid-cols-2 gap-default">
      {categories.map((category) => (
        <div
          key={category}
          className="p-default flex flex-col gap-8 text-3xl max-sm:text-xl max-sm:gap-4
           shadow-fuchsia-300 shadow-sm border border-gray-300 rounded-lg aspect-square
           capitalize items-center justify-center cursor-pointer bg-white hover:scale-95 transition-all duration-300"
        >
          <Image
            src={`/${category}-icon.svg`}
            width={100}
            height={100}
            alt=" - dark sneaker"
            aria-label=" - dark sneaker"
            title=" - dark sneaker"
            className="h-[100px] w-auto max-sm:h-10"
          />
          {category}
        </div>
      ))}
    </div>
  );
}

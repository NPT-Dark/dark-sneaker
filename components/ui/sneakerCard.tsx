import { Sneaker } from "@/data/home";
import Image from "next/image";
import React from "react";

export default function SneakerCard({
  image,
  name,
  discount,
  price,
  color,
  category,
}: Sneaker): React.ReactNode {
  const colorFormat = () => {
    switch (color) {
      case "black":
        return "bg-[#000000]";
      case "white":
        return "bg-[#ffffff]";
      case "red":
        return "bg-[#ff0000]";
      case "yellow":
        return "bg-[#ffff00]";
      default:
        return "bg-[#000000]";
    }
  };
  return (
    <div className="flex flex-col border border-fuchsia-200 rounded-xl overflow-hidden bg-white">
      <Image
        src={image}
        width={500}
        height={500}
        alt="image sneaker 1 - hot deals - dark sneaker"
        aria-label="image sneaker 1 - hot deals - dark sneaker"
        title="image sneaker 1 - hot deals - dark sneaker"
        className="object-cover object-center w-full h-auto aspect-4/3"
      />
      <div className="space-y-2 p-default">
        <div className="flex w-full items-center justify-between">
          <p className="text-2xl font-semibold">{name}</p>
          {discount > 0 && (
            <div className="bg-red-500 px-2 py-1 rounded-full text-white text-sm">
              - <span className="font-semibold">{discount}%</span>
            </div>
          )}
        </div>
        <div className="flex w-full items-center gap-2">
          <p className="capitalize">{category}</p>
          <span
            className={`size-5 ${colorFormat()} rounded-sm border border-gray-300`}
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center gap-2 w-fit">
            {discount > 0 && (
              <p className="line-through text-sm">${price.toFixed(2)}</p>
            )}
            <p className="font-semibold text-lg">
              ${(price - (price * discount) / 100).toFixed(2)}
            </p>
          </div>
          <button className="bg-fuchsia-300 px-3 py-2 font-semibold rounded-lg shadow-gray-300 shadow-lg cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

import { SneakerCategory } from "@/data/home";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header(): React.ReactNode {
  const categories = Object.values(SneakerCategory) as SneakerCategory[];
  return (
    <header className="fixed z-20 top-0 left-0 w-full flex items-center justify-between px-10 max-sm:px-default bg-white shadow-fuchsia-100 shadow-lg h-16 py-1">
      <Link
        href="/#welcome"
        aria-label="link to home page - dark sneaker"
        title="link to home page - dark sneaker"
        className="flex items-center h-full gap-2"
        rel="noopener noreferrer"
        prefetch={false}
      >
        <Image
          src="/favicon.ico"
          width={500}
          height={300}
          alt="logo - dark sneaker"
          aria-label="logo - dark sneaker"
          title="logo - dark sneaker"
          className="h-full w-auto aspect-square"
          priority
        />
        <p className="font-semibold drop-shadow-fuchsia-200 drop-shadow-sm max-sm:text-sm">
          DARK SNEAKER
        </p>
      </Link>
      <div className="h-full grid grid-cols-3 gap-4 max-sm:gap-2 w-[150px]">
        {categories.map((category) => (
          <Link
            href={`/${category}`}
            key={category}
            aria-label={"link to sneaker list - " + category + " - dark sneaker"}
            title={"link to sneaker list - " + category + " - dark sneaker"}
            className="capitalize text-sm flex flex-col justify-between items-center h-full max-sm:justify-center cursor-pointer"
            prefetch={false}
          >
            <div className="w-10 h-8 max-sm:w-8 max-sm:h-6 flex items-center justify-center">
              <Image
                src={`/${category}-icon.svg`}
                alt={"icon sneaker category - " + category + " - dark sneaker"}
                width={40}
                height={32}
                className="w-full h-auto"
              />
            </div>
            <p className="max-sm:hidden">{category}</p>
          </Link>
        ))}
      </div>
    </header>
  );
}

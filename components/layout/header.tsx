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
          height={500}
          alt="logo - dark sneaker"
          aria-label="logo - dark sneaker"
          title="logo - dark sneaker"
          className="h-full w-auto"
        />
        <p className="font-semibold drop-shadow-fuchsia-200 drop-shadow-sm max-sm:text-sm">
          DARK SNEAKER
        </p>
      </Link>
      <div className="h-full grid grid-cols-3 gap-4 max-sm:gap-2">
        {categories.map((category) => (
          <Link
            href={`/${category}`}
            key={category}
            aria-label={
              "link to sneaker list - " + category + " - dark sneaker"
            }
            title={"link to sneaker list - " + category + " - dark sneaker"}
            rel="noopener noreferrer"
            className="capitalize text-sm flex flex-col justify-between items-center h-full max-sm:justify-center cursor-pointer"
            prefetch={false}
          >
            <Image
              src={`/${category}-icon.svg`}
              width={100}
              height={100}
              alt={"icon sneaker category - " + category + " - dark sneaker"}
              aria-label={
                "icon sneaker category - " + category + " - dark sneaker"
              }
              title={"icon sneaker category - " + category + " - dark sneaker"}
              className="h-8 w-auto max-sm:h-6"
            />
            <p className="max-sm:hidden">{category}</p>
          </Link>
        ))}
      </div>
    </header>
  );
}

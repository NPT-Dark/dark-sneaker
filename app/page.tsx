import BrandContent from "@/components/content/brandContent";
import HotDealContent from "@/components/content/hotDealContent";
import SectionHomeWrapper from "@/components/layout/sectionHomeWrapper";
import { HomeSchema } from "@/schemaOrg/homeSchema";
import Image from "next/image";
import Link from "next/link";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <HomeSchema />
      <main className="flex flex-col snap-y snap-mandatory overflow-y-auto scroll-smooth px-default h-screen relative">
        <SectionHomeWrapper id="welcome">
          <Image
            src="/home/banner-background.webp"
            fill
            alt="banner background homepage - dark sneaker"
            aria-label="banner background homepage - dark sneaker"
            title="banner background homepage - dark sneaker"
            className="object-cover object-center -z-10"
          />
          <div className="grid grid-cols-2 w-full h-screen place-items-center max-md:grid-cols-1 max-md:w-full">
            <div className="space-y-3 max-w-2/3 mx-auto max-sm:max-w-full">
              <p className="font-semibold text-lg">WELCOME TO</p>
              <h1 className="drop-shadow-fuchsia-300 drop-shadow-sm text-6xl font-bold w-fit max-lg:text-4xl">
                DARK SNEAKER
              </h1>
              <p className="whitespace-pre-wrap max-lg:text-sm">
                {`Step into the shadows of true street culture. Dark Sneaker brings you a curated selection of rare, limited-edition sneakers crafted for those who move differently.`}
                No noise, no hype—just{" "}
                <span className="font-semibold">pure attitude</span>,{" "}
                <span className="font-semibold">authentic quality</span>, and{" "}
                <span className="font-semibold">the underground energy</span>{" "}
                that defines real style.
              </p>
              <button className="bg-fuchsia-300 drop-shadow-sm drop-shadow-gray-300 px-8 py-3 rounded-3xl font-bold mt-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                Shop now
              </button>
            </div>
            <Image
              src="/home/sneaker-banner.webp"
              width={500}
              height={500}
              alt="sneaker banner homepage - dark sneaker"
              aria-label="sneaker banner homepage - dark sneaker"
              title="sneaker banner homepage - dark sneaker"
              className="object-contain object-center drop-shadow-2xl drop-shadow-fuchsia-300 max-w-2/3 max-md:hidden"
              priority
            />
          </div>
          <div className="absolute left-0 bottom-4 w-full flex justify-center">
            <Link
              href="#hot-deals"
              aria-label="link to section hot deals"
              title="link to section hot deals"
              rel="noopener noreferrer"
            >
              <FaCaretDown className="text-3xl text-fuchsia-300 drop-shadow-sm drop-shadow-gray-300 animate-bounce" />
            </Link>
          </div>
        </SectionHomeWrapper>
        <SectionHomeWrapper id="hot-deals">
          <div className="flex flex-col w-full h-full items-center justify-center gap-y-16 px-default max-sm:gap-y-5 relative">
            <h2 className="text-6xl font-bold">Hot Deals</h2>
            <HotDealContent />
            <div className="absolute left-0 bottom-4 w-full flex justify-center">
              <Link
                href="#brands"
                aria-label="link to section brands"
                title="link to section brands"
                rel="noopener noreferrer"
              >
                <FaCaretDown className="text-3xl text-fuchsia-300 drop-shadow-sm drop-shadow-gray-300 animate-bounce" />
              </Link>
            </div>
          </div>
        </SectionHomeWrapper>
        <SectionHomeWrapper id="brands">
          <div className="flex flex-col w-full h-full items-center justify-center gap-y-16 px-default max-sm:gap-y-5 relative">
            <h2 className="text-6xl font-bold">Brands</h2>
            <BrandContent />
            <div className="absolute left-0 bottom-4 w-full flex justify-center">
              <Link
                href="#welcome"
                aria-label="link to section welcome home"
                title="link to section welcome home"
                rel="noopener noreferrer"
                className="animate-bounce text-fuchsia-300"
              >
                <FaCaretUp className="text-3xl drop-shadow-sm drop-shadow-gray-300" />
                Top
              </Link>
            </div>
          </div>
        </SectionHomeWrapper>
      </main>
    </>
  );
}

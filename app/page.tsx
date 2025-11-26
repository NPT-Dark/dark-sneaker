import SectionHomeWrapper from "@/components/layout/sectionHomeWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col scroll-smooth">
      <SectionHomeWrapper>
        <Image
          src="/home/banner-background.webp"
          fill
          alt="banner background homepage - dark sneaker"
          aria-label="banner background homepage - dark sneaker"
          title="banner background homepage - dark sneaker"
          className="object-cover object-center -z-10"
        />
        <div className="grid grid-cols-2 w-screen h-screen place-items-center">
          <div className="text-[#1f2937] space-y-3 max-w-2/3 mx-auto">
            <p className="font-semibold text-lg">WELCOME TO</p>
            <h1 className="drop-shadow-fuchsia-300 drop-shadow-sm text-6xl font-bold w-fit">
              DARK SNEAKER
            </h1>
            <p className="whitespace-pre-wrap">
              {`Step into the shadows of true street culture. Dark Sneaker brings you a curated selection of rare, limited-edition sneakers crafted for those who move differently.`}
              No noise, no hype—just <span className="font-semibold">pure attitude</span>, <span className="font-semibold">authentic quality</span>, and <span className="font-semibold">the underground energy</span> that defines real style.
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
            className="object-contain object-center drop-shadow-2xl drop-shadow-fuchsia-300"
          />
        </div>
      </SectionHomeWrapper>
    </main>
  );
}

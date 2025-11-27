"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Sneaker } from "@/data/home";
import Slider, { Settings } from "react-slick";
import SneakerCard from "../ui/sneakerCard";

export default function HotDealList({
  listSneaker,
}: {
  listSneaker: Sneaker[];
}): React.ReactNode {
  const [slidesToShow, setSlidesToShow] = React.useState(4);
  const updateSlides = () => {
    const width = window.innerWidth;
    if (!width || width === 0) return setSlidesToShow(4);
    if (width >= 1280) setSlidesToShow(4);
    else if (width >= 768) setSlidesToShow(2);
    else setSlidesToShow(1);
  };

  React.useEffect(() => {
    updateSlides(); // chạy khi load
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);
  const settings: Settings = {
    dots: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    infinite: true,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider
      className="w-full max-w-safe cursor-grab active:cursor-grabbing"
      {...settings}
    >
      {listSneaker.map((sneaker, index) => (
        <SneakerCard key={index} {...sneaker} />
      ))}
    </Slider>
  );
}

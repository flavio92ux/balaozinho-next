"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./custom-carousel.css";
import Image from "next/image";

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      modules={[Navigation]}
    >
      <SwiperSlide className="flex justify-center items-center h-full">
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src="/Component 1.png"
            alt="Banner"
            width={1200}
            height={500}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center h-full">
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src="/Component 1.png"
            alt="Banner"
            width={1200}
            height={500}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

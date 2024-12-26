"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

export default function Carousel() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide className='flex justify-center items-center h-full'>
        <div className='flex justify-center items-center w-full h-full'>
          <Image src="/Component 1.png" alt="Banner" width={1200} height={500} />
        </div>
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center h-full'>
        <div className='flex justify-center items-center w-full h-full'>
          <Image src="/Component 1.png" alt="Banner" width={1200} height={500} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

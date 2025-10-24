// src/app/_components/HeroSlider.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IconArrowLeft, IconArrowRight, IconArrowDown } from '@tabler/icons-react';
import 'swiper/css';
import 'swiper/css/navigation';


import heroBg1 from '../_assets/images/heroimage_1.jpg';
// import heroBg2 from '../_assets/images/hero-background-2.jpg';

const HeroSlider = () => {
  return (
    <div className="relative h-screen w-full text-white">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="h-full w-full"
      >
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center flex items-center justify-center"
       
            style={{ backgroundImage: `url(${heroBg1.src})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif">SHAPING</h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif">BENGAL'S SKYLINE</h2>
              <button className="mt-8 px-8 py-3 bg-white text-black font-semibold">
                Know More
              </button>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
           <div
            className="h-full w-full bg-cover bg-center flex items-center justify-center"
      
            style={{ backgroundImage: `url(${heroBg1.src})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif">ANOTHER</h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif">AMAZING VIEW</h2>
              <button className="mt-8 px-8 py-3 bg-white text-black font-semibold">
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex items-center space-x-8">
        <button className="swiper-button-prev flex items-center space-x-2">
          <IconArrowLeft className="w-5 h-5" />
          <span>BACK</span>
        </button>
        <button className="swiper-button-next flex items-center space-x-2">
          <span>NEXT</span>
          <IconArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <IconArrowDown className="w-6 h-6 animate-bounce" />
      </div>
    </div>
  );
};

export default HeroSlider;
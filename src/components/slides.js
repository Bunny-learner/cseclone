import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './slides.css'; // Custom styles

export default function Slides() {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        loop={true}
      >
        <SwiperSlide><img src="1.jpg" alt="Image 1" /></SwiperSlide>
        <SwiperSlide><img src="2.jpg" alt="Image 2" /></SwiperSlide>
        <SwiperSlide><img src="3.jpg" alt="Image 3" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

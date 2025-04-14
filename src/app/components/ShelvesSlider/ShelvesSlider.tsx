'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ShelvesSliderProps {
  items: React.ReactNode[];
}

const ShelvesSlider = ({ items }: ShelvesSliderProps) => {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      centeredSlides={true}
      slidesPerView={2}
      speed={700}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      breakpoints={{
        1440: {
          spaceBetween: 0,
          centeredSlides: false,
          slidesPerView: 4,
        },
      }}
      className="max-w-[1200px] w-[95%] mt-10 mx-auto xl:w-full xl:my-24"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ShelvesSlider;

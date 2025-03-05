'use client'


import Image from "next/image";
import styles from './Home.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Importe o CSS do autoplay
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from "next/link";
import Shelves from "./components/Shelves/Shelves";

export default function Home() {

  
  return (    
    <main className={styles["home-page"]}>
      <div className={styles["home-page--mainBanners"]}>
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          speed={700}                
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
        >
          <SwiperSlide>
            <Link href="/" className={styles["home-page--mainBanners-item"]}>
              <picture>            
                <source 
                  media="(max-width: 768px)" 
                  srcSet="/banner-ecomm-packluxe-mobile.webp" 
                />

                <Image 
                  src="/banner-lanzamiento-noosatri16.webp" 
                  alt="Banner Lanzamiento Noosatri 16" 
                  width={1920} 
                  height={720} 
                  priority 
                />
              </picture>
            </Link>
          </SwiperSlide>
          
          <SwiperSlide>
            <Link href="/" className={styles["home-page--mainBanners-item"]}>
              <picture>
                <source 
                  media="(max-width: 768px)" 
                  srcSet="/BannersResolutionX-Ecomm-v2-mobile.webp" 
                />

                <Image src='/banner-superblast2-nuevoscolores.webp' alt="banner-superblast2-nuevoscolores" width={1920} height={720} />
              </picture>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={styles["home-shelves"]}>
          <Shelves />
      </div>
    </main>    
  );
}

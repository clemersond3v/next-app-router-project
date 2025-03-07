'use client'

import Image from "next/image";
import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Importe o CSS do autoplay
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from "next/link";

const loadingBook = "/book-loading.gif";

const Shelves = dynamic(() => import('./components/Shelves/Shelves'), {
  ssr: false,
  loading: () => <div className="max-w-container mx-auto p-4 flex items-center justify-center"><Image src={loadingBook} alt="carregando prateleiras" width={150} height={150} /></div>,
});

export default function Home() {  
  return (    
    <main className="max-w-[1920px] mx-auto">
      <div>
        <Swiper
          className="max-w-[1920px] mx-auto"
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
            <Link href="/" className="block w-fit mx-auto">
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
            <Link href="/" className="block w-fit mx-auto">
              <picture>
                <source 
                  media="(max-width: 768px)" 
                  srcSet="/BannersResolutionX-Ecomm-v2-mobile.webp" 
                />

                <Image src='/banner-superblast2-nuevoscolores.webp' alt="banner-superblast2-nuevoscolores" width={1920} height={720} loading="lazy" />
              </picture>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
          <Shelves />
      </div>
    </main>    
  );
}

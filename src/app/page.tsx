'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from "next/link";
import { useProducts } from "../hooks/useProducts";
import ShelvesSlider from "./components/ShelvesSlider/ShelvesSlider";
import ShelvesCard from "./components/ShelvesCard/ShelvesCard";

interface ImageProps {
  name: string;
  alternativeText: string;
  width: number;
  height: number;
  url: string;
}

interface Product {
  documentId: string;
  productName: string;
  slug: string;
  price: number;
  oldPrice: number;
  installments: number;
  actived: boolean;
  stock: number;
  description: string | TrustedHTML;
  images: ImageProps[];
  category: {
      name: string;
  }
}

export default function Home() {
  const { data: products, isLoading, isError } = useProducts();
  const loadingBook = "/book-loading.gif";

  const shelvesItems = products?.slice(0, 15).map((product: Product) => (
    <ShelvesCard key={product.documentId} product={product} />
  )) || [];

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
                <Image 
                  src='/banner-superblast2-nuevoscolores.webp' 
                  alt="banner-superblast2-nuevoscolores" 
                  width={1920} 
                  height={720} 
                  loading="lazy"
                />
              </picture>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        {isLoading && (
          <div className="max-w-container mx-auto p-4 flex items-center justify-center">
            <Image src={loadingBook} alt="carregando prateleiras" width={150} height={150} />
          </div>
        )}
        {!isLoading && !isError && shelvesItems.length > 0 && (
          <ShelvesSlider items={shelvesItems} />
        )}
        {!isLoading && !isError && shelvesItems.length === 0 && (
          <p>Nenhum produto disponível.</p>
        )}
        {isError && (
          <p>Erro ao carregar produtos.</p>
        )}
      </div>
    </main>
  );
}

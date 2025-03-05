'use client';

import Image from "next/image";
import style from './Shelves.module.scss';
import { useProducts } from '../../../hooks/useProducts';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

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

const Shelves: React.FC = () => {
    const { products, loading, error } = useProducts();
    const [isMobile, setIsMobile] = useState(false);

    // Verifica se o usuário está em um dispositivo móvel
    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    if (loading) return <p>Carregando prateleira...</p>;
    if (error) return <p>Erro ao carregar produtos.</p>;
    if (!products.length) return <p>Nenhum produto disponível.</p>;

    return (
        <div className={style["shelf-item--container"]}>
            <Swiper
                loop={true}
                spaceBetween={isMobile ? 30 : 0}
                centeredSlides={isMobile}
                slidesPerView={isMobile ? 2 : 4}
                speed={700}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                {products.map((product: Product) => (
                    <SwiperSlide key={product.documentId}>
                        <div id={product.documentId} className={style["shelf-item--container-card"]}>
                            <div className={style["shelf-item"]}>
                                <div className={style["shelf-item--images"]}>
                                    {product.images.map((image: ImageProps) => (
                                        <Link key={image.name} href={`/${product.slug}/p`}>
                                            <Image src={image.url} alt={image.name} width={245} height={245} />
                                        </Link>
                                    ))}
                                </div>

                                <div className={style["shelf-item--content"]}>
                                    <Link href={`/${product.slug}/p`}>
                                        <h2 className={style["shelf-item--productName"]}>{product.productName}</h2>
                                    </Link> 
                                    <p className={style["shelf-item--productCategory"]}>{product.category.name}</p>

                                    <div className={style["shelf-item--price"]}>
                                        <p className={style["shelf-item--price-old"]}>{product.oldPrice.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</p>
                                        <p className={style["shelf-item--price-new"]}>{product.price.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</p>   
                                    </div>
                                                    
                                    <p className={style["shelf-item--stock"]}>{product.stock} unid. {product.stock > 1 ? "disponíveis" : "disponível"}</p>
                                </div>   
                                <div className={style["shelf-item--cta"]}>
                                    <Link className={style["shelf-item--cta-btn"]} href={`/${product.slug}/p`}>Comprar</Link>
                                </div>  
                            </div>                       
                        </div>
                    </SwiperSlide>
                ))}                
            </Swiper>
        </div>
    );
}

export default Shelves;

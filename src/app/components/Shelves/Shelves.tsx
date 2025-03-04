
'use client'

import Image from "next/image";
import style from './Shelves.module.scss';
import { useProducts } from '../../../hooks/useProducts';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

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
  
// interface ProductsQueryResult {
//     products: Product[];
// }

// interface ProductListProps {
//     products: Product[];
// }

  
const Shelves: React.FC = () => {
    const { products, loading, error } = useProducts();
    // console.log("products: ", products);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading products.</p>;

    return(
        <ul className={style["shelf-item--container"]}>
            <Swiper
                loop={true}
                spaceBetween={-30}
                slidesPerView={4}
                speed={700}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                {products.map((product: Product) => (
                    <SwiperSlide key={product.documentId}>
                        <li id={product.documentId} className={style["shelf-item--container-card"]}>
                            <div className={style["shelf-item"]}>
                                <div className={style["shelf-item--images"]}>
                                    <ul>
                                        {product.images.map((image: ImageProps) => (
                                            <li key={image.name}>
                                                <Link href={`/${product.slug}/p`}>
                                                    <Image  src={image.url} alt={image.name} width={245} height={245} />
                                                </Link>                                                
                                            </li>                            
                                        ))}
                                    </ul>                        
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
                        </li>
                    </SwiperSlide>
                ))}                
            </Swiper>
        </ul>
    );
}

export default Shelves;
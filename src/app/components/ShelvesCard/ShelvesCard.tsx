'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

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

interface ShelvesCardProps {
  product: Product;
}

const ShelvesCard = ({ product }: ShelvesCardProps) => {
  return (
    <div id={product.documentId} className="w-full">
      <div className="max-w-[245px] w-full rounded-lg mt-3 mx-auto mb-10 pb-3 shadow-[0_0_5px_2px_#eee]">
        <div>
          {product.images.map((image) => (
            <Link key={image.name} href={`/${product.slug}/p`}>
              <Image src={image.url} alt={image.name} width={245} height={245} loading="lazy" />
            </Link>
          ))}
        </div>

        <div className="p-[10px]">
          <Link href={`/${product.slug}/p`}>
            <h2 className="text-sm mb-[5px] min-h-11">{product.productName}</h2>
          </Link> 
          <p className="text-sm bg-[#e4e5f399] rounded-[4px] w-fit py-1 px-2 mb-[5px]">{product.category.name}</p>

          <div className="flex justify-start items-center mb-[5px] gap-2">
            <p className="text-xs line-through">{product.oldPrice.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</p>
            <p className="text-sm">{product.price.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</p>   
          </div>

          <p className="text-xs mb-[5px]">
            {product.stock} unid. {product.stock > 1 ? "disponíveis" : "disponível"}
          </p>
        </div>   

        <div className="px-2">
          <Link className="w-full h-10 bg-[#e4e5f399] rounded-lg flex justify-center items-center text-sm font-bold" href={`/${product.slug}/p`}>
            Comprar
          </Link>
        </div>  
      </div>
    </div>
  );
};

export default ShelvesCard;

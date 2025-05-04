'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Importe o CSS do autoplay
import { Autoplay } from 'swiper/modules';

const TopBar: React.FC = () => {
    return (
        <div className="bg-bglight500 overflow-hidden">
            <div>
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    speed={700}                  
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide>
                        <div className="font-bold text-base leading-tight h-9 text-primary cursor-pointer py-2 text-center">
                            <p>Melhores preços do Brasil</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="font-bold text-base leading-tight h-9 text-primary cursor-pointer py-2 text-center">
                            <p>Entrega em todo o território Brasileiro</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="font-bold text-base leading-tight h-9 text-primary cursor-pointer py-2 text-center">
                            <p>Frete Grátis em compras acima de R$899,90</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default TopBar;
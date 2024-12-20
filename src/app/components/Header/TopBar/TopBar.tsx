'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Importe o CSS do autoplay
import { Autoplay } from 'swiper/modules';
import styles from './TopBar.module.scss';

const TopBar: React.FC = () => {
    return (
        <div className={styles["topBar"]}>
            <ul className={styles["topBar--list"]}>
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
                        <li className={styles["topBar--list-item"]}>
                            <p>Melhores preços do Brasil</p>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide>
                        <li className={styles["topBar--list-item"]}>
                            <p>Entrega em todo o território Brasileiro</p>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide>
                        <li className={styles["topBar--list-item"]}>
                            <p>Frete Grátis em compras acima de R$899,90</p>
                        </li>
                    </SwiperSlide>
                </Swiper>
            </ul>
        </div>
    );
}

export default TopBar;
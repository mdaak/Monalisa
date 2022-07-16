import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { carouselItems } from './carouselImgFile';
import SwiperCore, { Autoplay } from 'swiper';
import styles from '../../../styles/styleComponent/Carousel.module.css'
console.log('aaa', carouselItems)
SwiperCore.use([Autoplay]);
function CarouselComp() {
  // const imgContainer = {
  //   margin:'5rem 0 3rem 0'
  // }
 
  return (
    <div className={styles.imgContainer}>
      <Swiper
        autoplay={{ delay: 1500 }}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          carouselItems.map(imgItem => {
            return (
              <SwiperSlide ><img className={styles.imgstyle} src={imgItem} alt="" /></SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default CarouselComp;
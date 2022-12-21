import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  EffectFade,
  Pagination,
  Scrollbar,
  Autoplay,
} from 'swiper';
import Slider1 from '../public/slider/slider1.jpg';
import Slider2 from '../public/slider/slider2.jpg';
import Slider3 from '../public/slider/slider3.jpg';
import Slider4 from '../public/slider/slider4.jpg';
import Slider5 from '../public/slider/slider5.jpg';
import Slider6 from '../public/slider/slider6.jpg';
import Slider7 from '../public/slider/slider7.jpg';
import Slider8 from '../public/slider/slider8.jpg';
import Slider9 from '../public/slider/slider9.jpg';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const Slideshow = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      effect='fade'
      autoplay={{ delay: 3000 }}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={true}
      keyboard={true}
      loop={true}
    >
      <SwiperSlide>
        <Image src={Slider1} alt='slider1' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Slider2} alt='slider2' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Slider3} alt='slider3' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Slider4} alt='slider4' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Slider5} alt='slider5' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Slider6} alt='slider6' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Slider7} alt='slider7' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Slider8} alt='slider8' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Slider9} alt='slider9' />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slideshow;

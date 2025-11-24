import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import 'swiper/css/navigation';





const Slider = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img className='w-full h-[500px] object-cover' src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[500px] object-cover' src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[500px] object-cover' src={img3} alt="" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;
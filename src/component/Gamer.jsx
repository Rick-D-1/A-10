import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Game1 from '../assets/D1.jpg';
import Game2 from '../assets/d2.jpeg';
import Game3 from '../assets/d3.jpg';

import { Link } from 'react-router';

const Gamer = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Popular <span className='text-orange-500'>Doctors</span></h1>
            <div className='mt-5 mb-5'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className='rounded-full h-[250px] w-[250px] object-cover' src={Game1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='rounded-full h-[250px] w-[250px] object-cover' src={Game2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='rounded-full h-[250px] w-[250px] object-cover' src={Game3} alt="" /></SwiperSlide>

                </Swiper>
            </div>

            <div className='mb-8 mt-10'>
                <div className="card bg-primary text-primary-content w-full">
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Join Now!</h2>

                        <div className="card-actions justify-end">
                            <label className="input">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="black"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input className='text-black' type="search" required placeholder="Search" />
                            </label>
                            <Link to={'/Services'}>
                                <button className="btn">Explore Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Gamer;
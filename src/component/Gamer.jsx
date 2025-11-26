import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Game1 from '../assets/gamer1.png';
import Game2 from '../assets/gamer2.png';
import Game3 from '../assets/gamer3.jpeg';
import Game4 from '../assets/gamer4.jpg';
import Game5 from '../assets/gamer5.jpg';
import { Link } from 'react-router';

const Gamer = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Popular <span className='text-orange-500'>Gamers</span></h1>
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
                    <SwiperSlide><img className='rounded-full h-[250px] w-[250px] object-cover' src={Game4} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='rounded-full h-[250px] w-[250px] object-cover' src={Game5} alt="" /></SwiperSlide>

                </Swiper>
            </div>

            <div className='mb-8 mt-10'>
                <div className="card bg-primary text-primary-content w-full">
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Join Now!</h2>
                        <p>In many online multiplayer games, you can join a friend's party or squad by typing specific commands into the chat box, such as /join [playername] or /invite [name]. The exact command varies by game, and you can usually find a list by typing /help or /allcommands.</p>
                        <div className="card-actions justify-end">
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
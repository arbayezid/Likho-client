import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { FaGithub, FaLinkedin, FaLinkedinIn, FaQuoteLeft, FaTwitter } from 'react-icons/fa';
import Container from '../shared/Container';

const Developer = () => {
    const [devs, setDevs] = useState([])

    useEffect(() => {
        fetch('/developers.json')
            .then(res => res.json())
            .then(data => setDevs(data))
    }, [])

    return (
        <div className="mb-20 font-poppins">
            <Container>
                <h2 className='text-5xl text- font-semibold font-poppins text-blue-950 text-center mb-12'>Meet Our Team </h2>

                <div className="lg:grid-cols-7 grid sm:mb-3 grid-cols-1    items-center text-center uppercase font-bold text-xs  justify-center gap-0">
                    <p className='bg-orange-400 w-20 rounded-sm text-slate-100 font-sans'>Leadership</p>
                    <p>Client services</p>
                    <p>creative</p>
                    <p>development</p>
                    <p>marketing & Sales</p>
                    <p>Strategy</p>
                    <p>All</p>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{ delay: 2500 }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        }
                    }}
                >

                           

                                {devs.map(dev => (
                                    <SwiperSlide key={dev.id} className='swiper-slide'>

                                        <div className='swiper-msg z-10 shadow-lg mb-6 p-6 mt-7'>
                                            <FaQuoteLeft className='mx-auto text-3xl mb-3 text-orange-500' />
                                            <p className='text-gray-700 font-sans'>
                                                {dev?.description.length > 500
                                                    ? dev?.description.substring(0, 500) + '...'
                                                    : dev?.description
                                                }
                                            </p>
                                        </div>

                                        <div className='flex items-center gap-3 md:flex-row  justify-center pt-10 mb-20 '>
                                            <div className='border-2 border-blue-300 rounded-full '>
                                                <img className=' w-10 h-10 md:w-16 md:h-16 rounded-full' src={dev?.image} alt={dev?.name} />
                                            </div>

                                            <div className="">
                                                <p className='border-y-8 border border-black md:h-auto'></p>
                                                <p className='border-y-8 border border-black md:h-auto'></p>
                                            </div>

                                            <div className='swiper-details px-2 space-y-[-2px]'>
                                                <p className='text-black font-semibold'>{dev?.name}</p>
                                                <p className='text-gray-500'>{dev?.title}</p>

                                                <div className="flex gap-4 text-xl pt-1">
                                                    <FaLinkedinIn className='text-gray-700' />
                                                    <FaTwitter className='text-gray-700' />
                                                    <FaGithub className='text-gray-700' />

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Container>
        </div>
                );
};

export default Developer;

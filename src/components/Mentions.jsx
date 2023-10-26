import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import africaPrize from '../assets/logo/africanPrize.png'
import africaPrizeThumbnail from '../assets/logo/africaThumbnail.png'
import news from '../data/news.js'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { BsNewspaper } from 'react-icons/bs'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Mentions = () => {


    // return (
    //     <div className="w-container">
    //         {/* <Slider {...settings}>

    //             {/* Slide */}
    //         <div className="shadow-mg rounded-md p-3">
    //             <div className='flex flex-col'>
    //                 <img src={africaPrizeThumbnail} alt="" />

    //                 <a href="https://africaprize.raeng.org.uk/2022-cohort/afomia-andualem#:~:text=Electrical%20engineer%20Afomia%20Adnualem%20and,plastic%20as%20a%20raw%20material">
    //                     <div className="flex">
    //                         <div className="h-40 w-40 rounded-full">
    //                             <img src={africaPrize} alt="" className='object-cover' />
    //                         </div>
    //                         <p>Agelgil is a sustainable range of packaging and tableware made from agricultural by-products like wheat and rice straw.</p>
    //                     </div>
    //                 </a>
    //             </div>

    //         </div>
    //         {/* End Slide */}

    //         {/* Slide */}

    //     </Slider> * /}




    //     </div >
    // );


    return (
        <div className='container py-10'>
            <p className="custom_font custom_title py-4">Top News</p>

            <Swiper
                navigation
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                    type: 'fraction'
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {news.map((item, index) => {
                    {
                        if (index < 6) {
                            return <SwiperSlide>
                                <Link to={`/news/${item.id}`}>
                                    <div className="h-[40vh] grid gap-x-6  overflow-hidden  sm:grid-cols-2 shadow-lg">
                                        <div className=" ">
                                            <img src={item.image} alt="" className="object-cover" />
                                        </div>
                                        <div className=''>
                                            <p className="text-lg ">{item.title}</p>
                                            <div className='py-7'>
                                                <p>{item.body.substring(0, 200)}</p>
                                                <div className="flex space-x-3 items-center">
                                                    <Icon icon="fluent:news-16-filled text-brown" />
                                                    <p className="text-brown">read more</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>


                            </SwiperSlide>
                        }
                    }
                })}
            </Swiper>
        </div>
    )


}

export default Mentions;

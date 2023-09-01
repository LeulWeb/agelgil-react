import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import africaPrize from '../assets/logo/africanPrize.png'
import africaPrizeThumbnail from '../assets/logo/africaThumbnail.png'

const Mentions = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 300,
    };

    return (
        <div className="w-container">
            <Slider {...settings}>

                {/* Slide */}
                <div className="shadow-mg rounded-md p-3">
                    <div className='flex flex-col'>
                        <img src={africaPrizeThumbnail} alt="" />

                        <a href="https://africaprize.raeng.org.uk/2022-cohort/afomia-andualem#:~:text=Electrical%20engineer%20Afomia%20Adnualem%20and,plastic%20as%20a%20raw%20material">
                            <div className="flex">
                                <div className="h-40 w-40 rounded-full">
                                    <img src={africaPrize} alt="" className='object-cover' />
                                </div>
                                <p>Agelgil is a sustainable range of packaging and tableware made from agricultural by-products like wheat and rice straw.</p>
                            </div>
                        </a>
                    </div>
                    
                </div>
                {/* End Slide */}

                {/* Slide */}
                
            </Slider>
        </div>
    );
}

export default Mentions;

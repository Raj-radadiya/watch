import React from 'react'
import offers from '../../../Assets/Images/offersBanner.webp';
import Slider from "react-slick";
import brandFirst from '../../../Assets/Logos/brandFirst.webp';
import brandSecond from '../../../Assets/Logos/brandSecond.webp';
import brandThird from '../../../Assets/Logos/brandThird.webp';
import brandForth from '../../../Assets/Logos/brandForth.webp';
import brandFifth from '../../../Assets/Logos/brandFifth.webp';
import brandSixth from '../../../Assets/Logos/brandSixth.webp';
import left from '../../../Assets/Icon/lsicon--left-outline.svg';
import right from '../../../Assets/Icon/lsicon--right-filled.svg';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='w-9 h-9 bg-black flex justify-center items-center absolute right-0 top-1/2 transform -translate-y-1/2 z-10'
            onClick={onClick}
        >
            <img src={right} alt="left" />

        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='w-9 h-9 bg-black flex justify-center items-center absolute left-0 top-1/2 transform -translate-y-1/2 z-10 '
            onClick={onClick}
        >
            <img src={left} alt="left" />
        </div>
    );
}
export default function DiscountBanner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2,
                    infinite: true,
                    dots: false
                }
            },
        ]
    };
    return (
        <div>
            <div className='relative py-20 tab:py-16'>
                <div className='h-[560px] tab:h-[320px] mob:h-52'>
                    <img className='h-full object-cover' src={offers} alt='offers' />
                </div>
                <div className='absolute top-1/2 left-16 transform -translate-y-1/2 text-white text-center flex flex-col gap-4 max-w-[700px] items-center tab:left-6 tab:max-w-[450px] tab:gap-3 mob:left-3 mob:max-w-[250px]'>
                    <p className='capitalize text-xl'>LIMITED EDITION</p>
                    <h1 className='text-6xl font-bold leading-tight tab:leading-snug tab:text-4xl mob:text-xl'>GET YOUR EPIC TIMES UP TO 25% OFF</h1>
                    <button className='mx-auto text-center justify-center capitalize px-6 py-2 bg-gray text-black font-semibold text-button hover:bg-grayHover hover:text-white transition-all ease-in-out duration-500 max-w-40'>discover more</button>
                </div>
            </div>
            <div>
                <div className="overflow-hidden ">
                    <Slider {...settings}>
                        <div className='h-[74px] w-[168px]'>
                            <img className='h-full w-auto mx-auto opacity-50 hover:opacity-100 duration-300' src={brandFirst} alt='brandFirst' />
                        </div>
                        <div className='h-[74px] w-[168px] opacity-50'>
                            <img className='h-full w-auto mx-auto opacity-50 hover:opacity-100 duration-300' src={brandSecond} alt='brandFirst' />
                        </div>
                        <div className='h-[74px] w-[168px] opacity-50'>
                            <img className='h-full w-auto mx-auto opacity-50 hover:opacity-100 duration-300' src={brandThird} alt='brandFirst' />
                        </div>
                        <div className='h-[74px] w-[168px] opacity-50'>
                            <img className='h-full w-auto mx-auto opacity-50 hover:opacity-100 duration-300' src={brandForth} alt='brandFirst' />
                        </div>
                        <div className='h-[74px] w-[168px] opacity-50'>
                            <img className='h-full w-auto mx-auto opacity-50 hover:opacity-100 duration-300' src={brandFifth} alt='brandFirst' />
                        </div>
                        <div className='h-[74px] w-[168px] opacity-50'>
                            <img className='h-full w-auto mx-auto opacity-50 hover:opacity-100 duration-300' src={brandSixth} alt='brandFirst' />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

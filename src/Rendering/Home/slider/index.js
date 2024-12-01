import React from "react";
import Slider from "react-slick";
import sliderFirst from '../../../Assets/Images/watch-slider-first.webp';
import sliderSecond from '../../../Assets/Images/watch-slider-second.webp';
import right from '../../../Assets/Icon/fe--arrow-left.svg';
import left from '../../../Assets/Icon/weui--arrow-filled.svg';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='w-10 h-10 bg-white rounded-full flex justify-center items-center absolute right-4 top-1/2 transform -translate-y-1/2 z-10 tab:hidden'
            onClick={onClick}
        >
            <img src={left} alt="left" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='w-10 h-10 bg-white rounded-full flex justify-center items-center absolute left-4 top-1/2 transform -translate-y-1/2 z-10 tab:hidden'
            onClick={onClick}
        >
            <img src={right} alt="left" />
        </div>
    );
}

export default function WatchSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div>
            <div className="overflow-hidden max-w-full">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className='relative'>
                            <div>
                                <img className="w-full tab:h-[400px] mob:h-[200px] mob:w-full object-cover" src={sliderFirst} alt='sliderFirst' />
                            </div>
                            <div>
                                <div className="max-w-[600px] absolute top-1/2 left-44 -translate-y-1/2 tab:left-14 tab:max-w-[380px] leading-[73px] tracking-wider mob:max-w-[180px] mob:left-8">
                                    <p className="text-white uppercase font-bold pb-4 tab:text-xs tab:pb-3 mob:pb-2 mob:text-p">latest collection </p>
                                    <h1 className="text-white text-6xl font-extrabold uppercase -tracking-tighter leading-[73px] pb-4 tab:text-4xl tab:leading-10 tab:tracking- mob:text-lg mob:leading-6 mob:pb-1 ">the vincero happiest hours </h1>
                                    <p className="text-white max-w-[400px] pb-4 tab:text-xs mob:hidden">We're celebrating feel-good moments with pieces to enjoy whatever it is that you enjoy.
                                    </p>
                                    <button className="px-5 py-2 bg-white text-black text-xs capitalize font-semibold">shop now</button>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <div>
                                <img className="w-full tab:h-[400px] mob:h-[200px] mob:w-auto object-cover" src={sliderSecond} alt='sliderSecond' />
                            </div>
                            <div>
                                <div className="max-w-[600px] absolute top-1/2 left-44 -translate-y-1/2 tab:left-14 tab:max-w-[380px] leading-[73px] tracking-wider mob:max-w-[180px] mob:left-8">
                                    <p className="text-white uppercase font-bold pb-4 tab:text-xs tab:pb-3 mob:text-p mob:pb-2">gift set for couple </p>
                                    <h1 className="text-white text-6xl font-extrabold uppercase -tracking-tighter leading-[73px] pb-4 tab:text-4xl tab:leading-10 tab:tracking- mob:text-lg mob:leading-6 mob:pb-1 ">men's watches on leather  </h1>
                                    <p className="text-white max-w-[400px] pb-4 tab:text-xs mob:hidden">We’re celebrating feel-good moments with pieces to enjoy whatever it is that you enjoy.
                                    </p>
                                    <button className="px-5 py-2 bg-white text-black text-xs capitalize font-semibold">shop now</button>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

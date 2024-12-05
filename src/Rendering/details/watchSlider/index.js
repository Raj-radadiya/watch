import React from "react";
import Slider from "react-slick";
import watchFirst from '../../../Assets/Images/slider/watchFirst.webp';
import watchSecond from '../../../Assets/Images/slider/watchSecond.webp';
import watchThird from '../../../Assets/Images/slider/watchThird.webp';
import watchForth from '../../../Assets/Images/slider/watchForth.webp';
import watchFifth from '../../../Assets/Images/slider/watchFifth.webp';
import left from '../../../Assets/Icon/fe--arrow-left.svg';
import right from '../../../Assets/Icon/weui--arrow-filled.svg';
import WatchDisc from "../watchDisc";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='absolute top-1/2 right-0'

            onClick={onClick}
        >
            <img src={right} alt="right" className="w-6 h-6 z-10" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='absolute top-1/2 left-0 z-10'

            onClick={onClick}
        >
            <img src={left} alt="left" className="w-6 h-6" />

        </div>
    );
}

export default function Productpart() {
    var settings = {
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
            <div>
                <div className='flex p-[50px] gap-5 relative'>
                    <div className="w-1/2 flex h-[475px] sticky top-0">
                        <div className='w-[20%]'>
                            <div className='w-[110px] h-[85px] border border-black mb-3 overflow-hidden hover:border-borderGray duration-300 mr-6'>
                                <img className='w-full h-full border-black transform scale-110 hover:scale-90 ease-in-out duration-300' src={watchFirst} alt='blazzer' />
                            </div>
                            <div className='w-[110px] h-[85px] border border-black mb-3 overflow-hidden hover:border-borderGray duration-300 mr-6'>
                                <img className='w-full h-full border-black transform scale-110 hover:scale-90 ease-in-out duration-300' src={watchSecond} alt='lady' />
                            </div>
                            <div className='w-[110px] h-[85px] border border-black mb-3 overflow-hidden hover:border-borderGray duration-300 mr-6'>
                                <img className='w-full h-full border-black transform scale-110 hover:scale-90 ease-in-out duration-300' src={watchThird} alt='blackblazzer' />
                            </div>
                            <div className='w-[110px] h-[85px] border border-black mb-3 overflow-hidden hover:border-borderGray duration-300 mr-6'>
                                <img className='w-full h-full border-black transform scale-110 hover:scale-90 ease-in-out duration-300' src={watchForth} alt='darkblazzer' />
                            </div>
                            <div className='w-[110px] h-[85px] border border-black overflow-hidden hover:border-borderGray duration-300 mr-6'>
                                <img className='w-full h-full border-black transform scale-110 hover:scale-90 ease-in-out duration-300' src={watchFifth} alt='darkblazzer' />
                            </div>
                        </div>
                        <div className='w-[80%] border border-borderGray'>
                            <div>
                                <Slider {...settings}>
                                    <div className="w-[560px] h-[430px]">
                                        <img className="w-[560px] h-[420px] object-cover" src={watchFirst} alt="watchFirst" />
                                    </div>
                                    <div>
                                        <img className="w-[560px] h-[420px] object-cover" src={watchSecond} alt="watchFirst" />
                                    </div>
                                    <div>
                                        <img className="w-[560px] h-[420px] object-cover" src={watchThird} alt="watchFirst" />
                                    </div>
                                    <div>
                                        <img className="w-[560px] h-[420px] object-cover" src={watchForth} alt="watchFirst" />
                                    </div>
                                    <div>
                                        <img className="w-[560px] h-[420px] object-cover" src={watchFifth} alt="watchFirst" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <WatchDisc />
                    </div>
                </div>
            </div>
        </div>
    )
}
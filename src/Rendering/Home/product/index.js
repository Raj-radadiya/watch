import React from 'react'
import Slider from "react-slick";
import watchFirst from '../../../Assets/Images/watchFirst.webp';
import watchFirstHover from '../../../Assets/Images/watchFirstHover.webp';
import watchSecond from '../../../Assets/Images/watchSecond.webp';
import watchSecondHover from '../../../Assets/Images/watchSecondHover.webp';
import watchThird from '../../../Assets/Images/watchThird.webp';
import watchThirdHover from '../../../Assets/Images/watchThirdHover.webp';
import watchForth from '../../../Assets/Images/watchForth.webp';
import watchForthHover from '../../../Assets/Images/watchForthHover.webp';
import watchFifth from '../../../Assets/Images/watchFifth.webp';
import watchFifthHover from '../../../Assets/Images/watchFifthHover.webp';
import heart from '../../../Assets/Icon/heart.svg';
import heartHover from '../../../Assets/Icon/heartHover.svg';
import chart from '../../../Assets/Icon/eva--bar-chart-outline.svg';
import chartHover from '../../../Assets/Icon/chartHover.svg';
import eye from '../../../Assets/Icon/tabler--eye.svg';
import eyeHover from '../../../Assets/Icon/eyeHover.svg';
import star from '../../../Assets/Icon/icons8-star-15.png';
import left from '../../../Assets/Icon/lsicon--left-outline.svg';
import right from '../../../Assets/Icon/lsicon--right-filled.svg';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='w-9 h-9 bg-black flex justify-center items-center absolute right-0 top-1/2 transform -translate-y-1/2 z-10 tab:hidden'
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
            className='w-9 h-9 bg-black flex justify-center items-center absolute left-0 top-1/2 transform -translate-y-1/2 z-10 tab:hidden'
            onClick={onClick}
        >
            <img src={left} alt="left" />
        </div>
    );
}
export default function Product() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
        ]
    };

    return (
        <div>
            <div className='max-w-[1430px] mx-auto pt-10 tab:py-12 mob:py-10'>
                <div className='pb-10 tab:pb-8'>
                    <div className='text-center mb-10 text-3xl font-semibold mob:text-2xl mob:mb-5'>
                        <h1>Special Product</h1>
                    </div>
                    <div>
                        <div className='flex gap-4 text-center justify-center'>
                            <div className='px-4 py-2 bg-black font-semibold cursor-pointer text-white'>
                                <p>Latest</p>
                            </div>
                            <div className='px-4 py-2 bg-gray font-semibold cursor-pointer hover:bg-black hover:text-white duration-300 text-black'>
                                <p>Featured</p>
                            </div>
                            <div className='px-4 py-2 bg-gray font-semibold cursor-pointer hover:bg-black hover:text-white duration-300 text-black'>
                                <p>Selling</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <Slider {...settings}>
                            <div className='px-2 tab:px-2'>
                                <div className='relative border border-borderGray'>
                                    <div className="h-64 tab:h-56 mob:h-40 group relative">
                                        <img className="h-full absolute duration-300 opacity-100 group-hover:opacity-0" src={watchFirst} alt="watch" />
                                        <img className="h-full absolute duration-300 opacity-0 group-hover:opacity-100" src={watchFirstHover} alt="watch" />
                                    </div>
                                    <div className='absolute top-5 left-5 mob:left-3'>
                                        <div>
                                            <div className='p-2 h-8 relative shadow-md text-white group hover:bg-black hover:text-white transition-all ease-in-out'>
                                                <img className='h-4 w-4  absolute duration-300 opacity-100 group-hover:opacity-0' src={heart} alt='heart' />
                                                <img className='h-4 w-4 absolute duration-300 opacity-0 group-hover:opacity-100' src={heartHover} alt='heartHover' />
                                            </div>
                                            <div className='p-2 h-8 relative shadow-md text-white group hover:bg-black hover:text-white transition-all ease-in-out'>
                                                <img className='h-4 w-4  absolute duration-300 opacity-100 group-hover:opacity-0' src={chart} alt='chart' />
                                                <img className='h-4 w-4 absolute duration-300 opacity-0 group-hover:opacity-100' src={chartHover} alt='chartHover' />
                                            </div>
                                            <div className='p-2 h-8 relative shadow-md text-white group hover:bg-black hover:text-white transition-all ease-in-out'>
                                                <img className='h-4 w-4  absolute duration-300 opacity-100 group-hover:opacity-0' src={eye} alt='eye' />
                                                <img className='h-4' src={eyeHover} alt='eyeHover' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center align-center flex flex-col gap-2 my-3'>
                                    <div>
                                        <div className='font-semibold hover:text-grayHover transition-all ease-in-out mob:text-sm'>
                                            <p>Tissot T-Classic Rhodium Dial Automatic Men's Watch</p>
                                        </div>
                                        <div className='flex justify-center  py-1'>
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                        </div>
                                    </div>
                                    <div>
                                        <span className='font-semibold mob:text-sm'>$200</span>
                                    </div>
                                    <div>
                                        <button className='mx-auto text-center justify-center capitalize px-6 py-2 bg-gray text-black font-semibold text-button hover:bg-black hover:text-white transition-all ease-in-out'>add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2 tab:px-2'>
                                <div className='relative border border-borderGray'>
                                    <div className="h-64 tab:h-56 mob:h-40 group relative">
                                        <img className="h-full absolute duration-300 opacity-100 group-hover:opacity-0" src={watchSecond} alt="watch" />
                                        <img className="h-full absolute duration-300 opacity-0 group-hover:opacity-100" src={watchSecondHover} alt="watch" />
                                    </div>
                                    <div className='absolute top-5 left-5 mob:left-3'>
                                        <div>
                                            <div className='p-2 h-8 relative shadow-md text-white group hover:bg-black hover:text-white transition-all ease-in-out'>
                                                <img className='h-4 w-4  absolute duration-300 opacity-100 group-hover:opacity-0' src={heart} alt='heart' />
                                                <img className='h-4 w-4 absolute duration-300 opacity-0 group-hover:opacity-100' src={heartHover} alt='heartHover' />
                                            </div>
                                            <div className='p-2 h-8 relative shadow-md text-white group hover:bg-black hover:text-white transition-all ease-in-out'>
                                                <img className='h-4 w-4  absolute duration-300 opacity-100 group-hover:opacity-0' src={chart} alt='chart' />
                                                <img className='h-4 w-4 absolute duration-300 opacity-0 group-hover:opacity-100' src={chartHover} alt='chartHover' />
                                            </div>
                                            <div className='p-2 h-8 relative shadow-md text-white group hover:bg-black hover:text-white transition-all ease-in-out'>
                                                <img className='h-4 w-4  absolute duration-300 opacity-100 group-hover:opacity-0' src={eye} alt='eye' />
                                                <img className='h-4' src={eyeHover} alt='eyeHover' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center align-center flex flex-col gap-2 py-3'>
                                    <div>
                                        <div className='hover:text-grayHover transition-all ease-in-out font-semibold mob:text-sm'>
                                            <p>The Prito Compatible Unbreakable Screen Watch</p>
                                        </div>
                                        <div className='flex justify-center py-1'>
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                        </div>
                                    </div>
                                    <div>
                                        <span className='font-semibold mob:text-sm'>$250</span>
                                    </div>
                                    <div>
                                        <button className='mx-auto text-center justify-center capitalize px-6 py-2 bg-gray text-black font-semibold text-button hover:bg-black hover:text-white transition-all ease-in-out'>add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2 tab:px-2'>
                                <div className='relative border border-borderGray'>
                                    <div className="h-64 tab:h-56 mob:h-40 group relative">
                                        <img className="h-full absolute duration-300 opacity-100 group-hover:opacity-0" src={watchThird} alt="watch" />
                                        <img className="h-full absolute duration-300 opacity-0 group-hover:opacity-100" src={watchThirdHover} alt="watch" />
                                    </div>
                                    <div className='absolute top-5 left-5 mob:left-3'>
                                        <div>
                                            <div className='p-2 h-8 relative shadow-md text-white group hover:bg-black hover:text-white transition-all ease-in-out'>
                                                <img className='h-4 w-4  absolute duration-300 opacity-100 group-hover:opacity-0' src={heart} alt='heart' />
                                                <img className='h-4 w-4 absolute duration-300 opacity-0 group-hover:opacity-100' src={heartHover} alt='heartHover' />
                                            </div>
                                            <div className='p-2 h-8 relative shadow-md text-white group hover:bg-black hover:text-white transition-all ease-in-out'>
                                                <img className='h-4 w-4  absolute duration-300 opacity-100 group-hover:opacity-0' src={chart} alt='chart' />
                                                <img className='h-4 w-4 absolute duration-300 opacity-0 group-hover:opacity-100' src={chartHover} alt='chartHover' />
                                            </div>
                                            <div className='p-2 h-8 relative shadow-md text-white group hover:bg-black hover:text-white transition-all ease-in-out'>
                                                <img className='h-4 w-4  absolute duration-300 opacity-100 group-hover:opacity-0' src={eye} alt='eye' />
                                                <img className='h-4' src={eyeHover} alt='eyeHover' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center align-center flex flex-col gap-2 py-3'>
                                    <div>
                                        <div className='hover:text-grayHover transition-all ease-in-out font-semibold mob:text-sm'>
                                            <p>Tissot T-Classic Rhodium Dial Automatic Men's Watch</p>
                                        </div>
                                        <div className='flex justify-center py-1'>
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                        </div>
                                    </div>
                                    <div>
                                        <span className='font-semibold mob:text-sm'>$200</span>
                                    </div>
                                    <div>
                                        <button className='mx-auto text-center justify-center capitalize px-6 py-2 bg-gray text-black font-semibold text-button hover:bg-black hover:text-white transition-all ease-in-out'>add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2 tab:px-2'>
                                <div className='relative border border-borderGray'>
                                    <div className="h-64 tab:h-56 mob:h-40 group relative">
                                        <img className="h-full absolute duration-300 opacity-100 group-hover:opacity-0" src={watchForth} alt="watch" />
                                        <img className="h-full absolute duration-300 opacity-0 group-hover:opacity-100" src={watchForthHover} alt="watch" />
                                    </div>
                                    <div className='absolute top-5 left-5 mob:left-3'>
                                        <div>
                                            <div className='p-2 h-8 relative shadow-md text-white group hover:bg-black hover:text-white transition-all ease-in-out'>
                                                <img className='h-4 w-4  absolute duration-300 opacity-100 group-hover:opacity-0' src={heart} alt='heart' />
                                                <img className='h-4 w-4 absolute duration-300 opacity-0 group-hover:opacity-100' src={heartHover} alt='heartHover' />
                                            </div>
                                            <div className='p-2 h-8 relative shadow-md text-white group hover:bg-black hover:text-white transition-all ease-in-out'>
                                                <img className='h-4 w-4  absolute duration-300 opacity-100 group-hover:opacity-0' src={chart} alt='chart' />
                                                <img className='h-4 w-4 absolute duration-300 opacity-0 group-hover:opacity-100' src={chartHover} alt='chartHover' />
                                            </div>
                                            <div className='p-2 h-8 relative shadow-md text-white group hover:bg-black hover:text-white transition-all ease-in-out'>
                                                <img className='h-4 w-4  absolute duration-300 opacity-100 group-hover:opacity-0' src={eye} alt='eye' />
                                                <img className='h-4' src={eyeHover} alt='eyeHover' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center align-center flex flex-col gap-2 py-3'>
                                    <div>
                                        <div className='hover:text-grayHover transition-all ease-in-out font-semibold mob:text-sm'>
                                            <p>Tissot T-Classic Rhodium Dial Automatic Men's Watch</p>
                                        </div>
                                        <div className='flex justify-center py-1'>
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                        </div>
                                    </div>
                                    <div>
                                        <span className='font-semibold mob:text-sm'>$200</span>
                                    </div>
                                    <div>
                                        <button className='mx-auto text-center justify-center capitalize px-6 py-2 bg-gray text-black font-semibold text-button hover:bg-black hover:text-white transition-all ease-in-out'>add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2 tab:px-2'>
                                <div className='relative border border-borderGray'>
                                    <div className="h-64 tab:h-56 mob:h-40 group relative">
                                        <img className="h-full absolute duration-300 opacity-100 group-hover:opacity-0" src={watchFifth} alt="watch" />
                                        <img className="h-full absolute duration-300 opacity-0 group-hover:opacity-100" src={watchFifthHover} alt="watch" />
                                    </div>
                                    <div className='absolute top-5 left-5 mob:left-3'>
                                        <div>
                                            <div className='p-2 h-8 relative shadow-md text-white group hover:bg-black hover:text-white transition-all ease-in-out'>
                                                <img className='h-4 w-4  absolute duration-300 opacity-100 group-hover:opacity-0' src={heart} alt='heart' />
                                                <img className='h-4 w-4 absolute duration-300 opacity-0 group-hover:opacity-100' src={heartHover} alt='heartHover' />
                                            </div>
                                            <div className='p-2 h-8 relative shadow-md text-white group hover:bg-black hover:text-white transition-all ease-in-out'>
                                                <img className='h-4 w-4  absolute duration-300 opacity-100 group-hover:opacity-0' src={chart} alt='chart' />
                                                <img className='h-4 w-4 absolute duration-300 opacity-0 group-hover:opacity-100' src={chartHover} alt='chartHover' />
                                            </div>
                                            <div className='p-2 h-8 relative shadow-md text-white group hover:bg-black hover:text-white transition-all ease-in-out'>
                                                <img className='h-4 w-4  absolute duration-300 opacity-100 group-hover:opacity-0' src={eye} alt='eye' />
                                                <img className='h-4' src={eyeHover} alt='eyeHover' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center align-center flex flex-col gap-2 py-3'>
                                    <div>
                                        <div className='hover:text-grayHover transition-all ease-in-out font-semibold mob:text-sm'>
                                            <p>Tissot T-Classic Rhodium Dial Automatic Men's Watch</p>
                                        </div>
                                        <div className='flex justify-center py-1'>
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                            <img className='w-4 h-4' src={star} alt='star' />
                                        </div>
                                    </div>
                                    <div>
                                        <span className='font-semibold mob:text-sm'>$200</span>
                                    </div>
                                    <div>
                                        <button className='mx-auto text-center justify-center capitalize px-6 py-2 bg-gray text-black font-semibold text-button hover:bg-black hover:text-white transition-all ease-in-out'>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

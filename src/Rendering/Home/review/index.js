import React from 'react'
import Slider from "react-slick";
import customerFirst from '../../../Assets/Images/customerFirst.webp';
import customerSecond from '../../../Assets/Images/customerSecond.webp';
import customerThird from '../../../Assets/Images/customerThird.webp';
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
            className='w-9 h-9 bg-black flex justify-center items-center absolute left-0 top-1/2 transform -translate-y-1/2 z-10'
            onClick={onClick}
        >
            <img src={left} alt="left" />
        </div>
    );
}
export default function Review() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    };
    return (
        <div>
            <div>
                <div className='max-w-[1430px] mx-auto py-16 tab:py-0 mob:py-0 mob:flex-col tab:px-5'>
                    <div>
                        <div className='text-center py-6 tab:pb-5 mob:pb-0'>
                            <p className='text-2xl font-semibold mob:text-xl'>Our Lovely Customers</p>
                        </div>
                        <div>
                            <div className="text-center">
                                <Slider {...settings}>
                                    <div className='text-center max-w-[330px] tab:px-3'>
                                        <div className='py-5 tab:py-4 mob:pb-1 '>
                                            <span className='text-2xl font-semibold tab:text-xl mob:text-lg'>Love it so much</span>
                                        </div>
                                        <div className='text-textGray pb-5 mob:py-2'>
                                            <p className='text-sm tab:leading-relaxed'>“Lorem ipsum dolor sit amet,consectetur dipiscing elit. Aliquam egetorcided atc, Donec quis faucibus.”</p>
                                        </div>
                                        <div className='pb-5 mob:py-0'>
                                            <img className='w-20 h-20 mx-auto rounded-full mob:h-16 mob:w-16' src={customerFirst} alt='customer' />
                                        </div>
                                        <div className='mob:pt-2'>
                                            <p className='text-base font-extrabold uppercase tracking-wider'>jennifer c.</p>
                                            <p className='text-sm'>Orlando.FL</p>
                                        </div>
                                    </div>
                                    <div className='text-center max-w-[330px] tab:px-3'>
                                        <div className='py-5 tab:py-4 mob:pb-1 '>
                                            <span className='text-2xl font-semibold tab:text-xl mob:text-lg'>so looking</span>
                                        </div>
                                        <div className='text-textGray pb-5 mob:py-2'>
                                            <p className='text-sm tab:leading-relaxed'>“Lorem ipsum dolor sit amet,consectetur dipiscing elit. Aliquam egetorcided atc, Donec quis faucibus.”</p>
                                        </div>
                                        <div className='pb-5 mob:py-0'>
                                            <img className='w-20 h-20 mx-auto rounded-full mob:h-16 mob:w-16' src={customerSecond} alt='customer' />
                                        </div>
                                        <div className='mob:pt-2'>
                                            <p className='text-base font-extrabold uppercase tracking-wider'>John D.</p>
                                            <p className='text-sm'>Orlando.FL</p>
                                        </div>
                                    </div>
                                    <div className='text-center max-w-[330px] tab:px-3'>
                                        <div className='py-5 tab:py-4 mob:pb-1 '>
                                            <span className='text-2xl font-semibold tab:text-xl mob:text-lg'>Very excellentely</span>
                                        </div>
                                        <div className='text-textGray pb-5 mob:py-2'>
                                            <p className='text-sm tab:leading-relaxed'>“Lorem ipsum dolor sit amet,consectetur dipiscing elit. Aliquam egetorcided atc, Donec quis faucibus.”</p>
                                        </div>
                                        <div className='pb-5 mob:py-0'>
                                            <img className='w-20 h-20 mx-auto rounded-full mob:h-16 mob:w-16' src={customerThird} alt='customer' />
                                        </div>
                                        <div className='mob:pt-2'>
                                            <p className='text-base font-extrabold uppercase tracking-wider'>keyol f.</p>
                                            <p className='text-sm'>Orlando.FL</p>
                                        </div>
                                    </div>
                                    <div className='text-center max-w-[330px] tab:px-3'>
                                        <div className='py-5 tab:py-4 mob:pb-1 '>
                                            <span className='text-2xl font-semibold tab:text-xl mob:text-lg'>We like, so nice</span>
                                        </div>
                                        <div className='text-textGray pb-5 mob:py-2'>
                                            <p className='text-sm tab:leading-relaxed'>“Lorem ipsum dolor sit amet,consectetur dipiscing elit. Aliquam egetorcided atc, Donec quis faucibus.”</p>
                                        </div>
                                        <div className='pb-5 mob:py-0'>
                                            <img className='w-20 h-20 mx-auto rounded-full mob:h-16 mob:w-16' src={customerFirst} alt='customer' />
                                        </div>
                                        <div className='mob:pt-2'>
                                            <p className='text-base font-extrabold uppercase tracking-wider'>semil j.</p>
                                            <p className='text-sm'>Orlando.FL</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

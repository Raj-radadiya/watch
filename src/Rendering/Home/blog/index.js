import React from 'react'
import Slider from "react-slick";
import blogFirst from '../../../Assets/Images/blogFirst.webp';
import blogSecond from '../../../Assets/Images/blogSecond.webp';
import blogThird from '../../../Assets/Images/blogThird.webp';
import blogForth from '../../../Assets/Images/blogForth.webp';
import blogFifth from '../../../Assets/Images/blogFifth.webp';
import blogSixth from '../../../Assets/Images/blogSixth.webp';
import left from '../../../Assets/Icon/lsicon--left-outline.svg';
import right from '../../../Assets/Icon/lsicon--right-filled.svg';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='w-9 h-9 bg-black flex justify-center items-center absolute right-0 top-1/2 transform -translate-y-1/2 z-10 tab:top-60 mob:top-44'
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
            className='w-9 h-9 bg-black flex justify-center items-center absolute left-0 top-1/2 transform -translate-y-1/2 z-10 tab:top-60 mob:top-44'
            onClick={onClick}
        >
            <img src={left} alt="left" />
        </div>
    );
}
export default function Blog() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: false
                }
            },
        ]
    };
    return (
        <div>
            <div className='max-w-[1430px] m-auto'>
                <div>
                    <div className='text-center pb-8 text-3xl font-semibold tab:py-10 tab:pb-7'>
                        <h2>Our Latest News</h2>
                    </div>
                    <div>
                        <div className='h-[450px]'>
                            <Slider {...settings}>
                                <div className='px-4 tab:pl-5 tab:pr-5'>
                                    <div className='h-72 tab:h-[235px] mob:h-[215px] w-auto'>
                                        <img className='h-full w-full object-cover transform hover:scale-110 ease-in-out duration-300' src={blogFirst} alt='blogFirst' />
                                    </div>

                                    <div className='py-5'>
                                        <div className='text-spanGray flex mb-2.5 items-center'>
                                            <span className='mr-2 hover:text-black ease-in-out duration-300 cursor-pointer'>February 9, 2024</span>
                                            <li></li>
                                            <span className='mr-1 text-sm'>by</span>
                                            <span className='hover:text-black ease-in-out duration-300 cursor-pointer text-sm'>Editor</span>
                                        </div>
                                        <div className='mb-2.5 text-xl tracking-wide font-semibold'>
                                            <h3 className='hover:text-grayHover ease-in-out duration-300 cursor-pointer'>How to Write a Blog Post Your Readers Will Love in 5 Steps</h3>
                                        </div>
                                        <div>
                                            <p className='text-spanGray text-sm'>Why the world would end without travel coupons. The 16 worst songs…</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-4 tab:pl-3 tab:pr-5'>
                                    <div className='h-72 tab:h-[235px] mob:h-[215px] w-auto overflow-hidden'>
                                        <img className='h-full w-full object-cover transform hover:scale-110 ease-in-out duration-300' src={blogSecond} alt='blogFirst' />
                                    </div>

                                    <div className='py-5'>
                                        <div className='text-spanGray flex mb-3 items-center'>
                                            <span className='mr-2 hover:text-black ease-in-out duration-300 cursor-pointer'>February 7, 2024</span>
                                            <li></li>
                                            <span className='mr-2 text-sm'>by</span>
                                            <span className='hover:text-black ease-in-out duration-300 cursor-pointer text-sm'>Editor</span>
                                        </div>
                                        <div className='mb-3 text-2xl font-semibold'>
                                            <h3 className='hover:text-grayHover ease-in-out duration-300 cursor-pointer'>9 Content Marketing Trends and Ideas to Increase Traffic</h3>
                                        </div>
                                        <div>
                                            <p className='text-spanGray '>Why do people think wholesale accessories are a good idea? Unbelievable cool…</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-4 tab:pl-5 tab:pr-3'>
                                    <div className='h-72 mob:h-[215px] w-auto overflow-hidden'>
                                        <img className='h-full w-full object-cover transform hover:scale-110 ease-in-out duration-300' src={blogThird} alt='blogFirst' />
                                    </div>

                                    <div className='py-5'>
                                        <div className='text-spanGray flex mb-2.5 items-center'>
                                            <span className='mr-2 hover:text-black ease-in-out duration-300 cursor-pointer'>February 5,, 2024</span>
                                            <li></li>
                                            <span className='mr-1 text-sm'>by</span>
                                            <span className='hover:text-black ease-in-out duration-300 cursor-pointer text-sm'>Editor</span>
                                        </div>
                                        <div className='mb-2.5 text-xl tracking-wide font-semibold'>
                                            <h3 className='hover:text-grayHover ease-in-out duration-300 cursor-pointer'>The Ultimate Guide to Marketing Strategies to Improve Sales</h3>
                                        </div>
                                        <div>
                                            <p className='text-spanGray text-sm'>Many things about electronic devices your kids don't want you to know…</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-4 tab:pl-3 tab:pr-5'>
                                    <div className='h-72 w-auto overflow-hidden'>
                                        <img className='h-full w-full object-cover transform hover:scale-110 ease-in-out duration-300' src={blogForth} alt='blogFirst' />
                                    </div>

                                    <div className='py-5'>
                                        <div className='text-spanGray flex mb-3 items-center'>
                                            <span className='mr-2 hover:text-black ease-in-out duration-300 cursor-pointer'>February 3, 2024</span>
                                            <li></li>
                                            <span className='mr-2 text-sm'>by</span>
                                            <span className='hover:text-black ease-in-out duration-300 cursor-pointer text-sm'>Editor</span>
                                        </div>
                                        <div className='mb-3 text-2xl font-semibold'>
                                            <h3 className='hover:text-grayHover ease-in-out duration-300 cursor-pointer'>50 Best Sales Questions to Determine Your Customer's Needs</h3>
                                        </div>
                                        <div>
                                            <p className='text-spanGray '>The unconventional guide to the software applications. Why do people think business…</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-4 tab:pl-5 tab:pr-3'>
                                    <div className='h-72 mob:h-[215px] w-auto overflow-hidden'>
                                        <img className='h-full w-full object-cover transform hover:scale-110 ease-in-out duration-300' src={blogFifth} alt='blogFirst' />
                                    </div>

                                    <div className='py-5'>
                                        <div className='text-spanGray flex mb-2.5 items-center'>
                                            <span className='mr-2 hover:text-black ease-in-out duration-300 cursor-pointer'>February 1, 2024</span>
                                            <li></li>
                                            <span className='mr-1 text-sm'>by</span>
                                            <span className='hover:text-black ease-in-out duration-300 cursor-pointer text-sm'>Editor</span>
                                        </div>
                                        <div className='mb-2.5 text-xl tracking-wide font-semibold'>
                                            <h3 className='hover:text-grayHover ease-in-out duration-300 cursor-pointer'>6 Simple Ways To Boost Your Ecommerce Conversion Rate</h3>
                                        </div>
                                        <div>
                                            <p className='text-spanGray text-sm'>The best ways to utilize interview techniques. 18 things your boss expects…</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-4 tab:pl-3 tab:pr-5'>
                                    <div className='h-72 w-auto overflow-hidden'>
                                        <img className='h-full w-full object-cover transform hover:scale-110 ease-in-out duration-300' src={blogSixth} alt='blogFirst' />
                                    </div>

                                    <div className='py-5'>
                                        <div className='text-spanGray flex mb-3 items-center'>
                                            <span className='mr-2 hover:text-black ease-in-out duration-300 cursor-pointer'>February 29, 2024</span>
                                            <li></li>
                                            <span className='mr-2 text-sm'>by</span>
                                            <span className='hover:text-black ease-in-out duration-300 cursor-pointer text-sm'>Editor</span>
                                        </div>
                                        <div className='mb-3 text-2xl font-semibold'>
                                            <h3 className='hover:text-grayHover ease-in-out duration-300 cursor-pointer'>9 Customer Experience Trends That'll Define the Next Year</h3>
                                        </div>
                                        <div>
                                            <p className='text-spanGray '>The oddest place you will find financial reports. Will businesses ever rule…</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

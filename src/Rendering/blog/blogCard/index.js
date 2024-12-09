import React from 'react'
import blogFirst from '../../../Assets/Images/blogFirst.webp';
import arrow from '../../../Assets/Icon/arrow-sm-right-svgrepo-com.svg';
import RelatedBlog from '../relatedBlog';
export default function BlogCard() {
    return (
        <div>
            <div className='text-center py-10 bg-gray tab:py-7 mob:py-4'>
                <div className='pb-3'>
                    <a href='#' className='hover:text-grayHover ease-in-out duration-300 cursor-pointer text-sm tracking-wider font-normal'>Home /</a>
                    <a href='#' className='hover:text-grayHover ease-in-out duration-300 cursor-pointer text-sm tracking-wider font-normal'> Blog</a>
                </div>
                <div className='text-3xl font-bold tracking-wide mob:text-2xl'>
                    <h3>Blog</h3>
                </div>
            </div>
            <div className='max-w-[1400px] mx-auto grid grid-cols-[1fr_280px] gap-8 py-12 tab:grid-cols-1 tab:px-5 tab:py-7'>
                <div className='grid grid-cols-2 gap-10 mob:grid-cols-1'>
                    <div>
                        <div className='h-[345px] tab:h-[235px] mob:h-[215px] w-auto overflow-hidden'>
                            <img className='h-full w-full object-cover transform hover:scale-110 ease-in-out duration-300' src={blogFirst} alt='blogFirst' />
                        </div>

                        <div className='pt-5'>
                            <div className='mb-1'>
                                <span className='text-xs uppercase font-bold pr-2 border-r border-black hover:text-grayHover ease-in-out duration-300 cursor-pointer '>business</span>
                                <span className='text-xs uppercase font-bold px-2 border-r border-black hover:text-grayHover ease-in-out duration-300 cursor-pointer '>marketing</span>
                                <span className='text-xs uppercase font-bold pl-2 hover:text-grayHover ease-in-out duration-300 cursor-pointer '>social media</span>
                            </div>

                            <div className='mb-2.5'>
                                <h3 className='hover:text-grayHover text-xl tracking-wide font-semibold ease-in-out duration-300 cursor-pointer mob:text-base'>How to Write a Blog Post Your Readers Will Love in 5 Steps</h3>
                            </div>
                            <div className='text-spanGray flex mb-2.5 items-center text-xs'>
                                <span className='text-xs mr-2.5'> by Editor</span>
                                <li></li>
                                <div>
                                    <span className='hover:text-black ease-in-out duration-300 cursor-pointer'>February 9, 2024</span>
                                </div>
                            </div>
                            <div className='mb-2.5'>
                                <p className='text-spanGray text-base leading-snug mob:text-sm'>Why the world would end without travel coupons. The 16 worst songs about spa deals. How daily me person.  The 11 worst business software in history. Why latest electronic gadgets will make you question everything. The evolution of cool science experiments. 16 facts about cool tech gadgets that'll keep you up at night.  How carnival...</p>
                            </div>
                            <div className='mt-2'>
                                <a className='uppercase font-extrabold tracking-widest text-xs hover:text-grayHover ease-in-out duration-300 cursor-pointer' href='#'>Read More</a>
                                <img className='w-7 h-5 inline' src={arrow} alt='arrow' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='h-[345px] tab:h-[235px] mob:h-[215px] w-auto overflow-hidden'>
                            <img className='h-full w-full object-cover transform hover:scale-110 ease-in-out duration-300' src={blogFirst} alt='blogFirst' />
                        </div>

                        <div className='pt-5'>
                            <div className='mb-1'>
                                <span className='text-xs uppercase font-bold pr-2 border-r border-black hover:text-grayHover ease-in-out duration-300 cursor-pointer '>business</span>
                                <span className='text-xs uppercase font-bold px-2 border-r border-black hover:text-grayHover ease-in-out duration-300 cursor-pointer '>marketing</span>
                                <span className='text-xs uppercase font-bold pl-2 hover:text-grayHover ease-in-out duration-300 cursor-pointer '>social media</span>
                            </div>

                            <div className='mb-2.5 text-xl tracking-wide font-semibold'>
                                <h3 className='hover:text-grayHover ease-in-out duration-300 cursor-pointer mob:text-base'>How to Write a Blog Post Your Readers Will Love in 5 Steps</h3>
                            </div>
                            <div className='text-spanGray flex mb-2.5 items-center text-xs'>
                                <span className='text-xs mr-2.5'> by Editor</span>
                                <li></li>
                                <div>
                                    <span className='hover:text-black ease-in-out duration-300 cursor-pointer'>February 9, 2024</span>
                                </div>
                            </div>
                            <div className='mb-2.5'>
                                <p className='text-spanGray text-base leading-snug mob:text-sm'>Why the world would end without travel coupons. The 16 worst songs about spa deals. How daily me person.  The 11 worst business software in history. Why latest electronic gadgets will make you question everything. The evolution of cool science experiments. 16 facts about cool tech gadgets that'll keep you up at night.  How carnival...</p>
                            </div>
                            <div className='mt-2'>
                                <a className='uppercase font-extrabold tracking-widest text-xs hover:text-grayHover ease-in-out duration-300 cursor-pointer' href='#'>Read More</a>
                                <img className='w-7 h-5 inline' src={arrow} alt='arrow' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='h-[345px] tab:h-[235px] mob:h-[215px] w-auto overflow-hidden'>
                            <img className='h-full w-full object-cover transform hover:scale-110 ease-in-out duration-300' src={blogFirst} alt='blogFirst' />
                        </div>

                        <div className='pt-5'>
                            <div className='mb-1'>
                                <span className='text-xs uppercase font-bold pr-2 border-r border-black hover:text-grayHover ease-in-out duration-300 cursor-pointer '>business</span>
                                <span className='text-xs uppercase font-bold px-2 border-r border-black hover:text-grayHover ease-in-out duration-300 cursor-pointer '>marketing</span>
                                <span className='text-xs uppercase font-bold pl-2 hover:text-grayHover ease-in-out duration-300 cursor-pointer '>social media</span>
                            </div>

                            <div className='mb-2.5 text-xl tracking-wide font-semibold'>
                                <h3 className='hover:text-grayHover ease-in-out duration-300 cursor-pointer mob:text-base'>How to Write a Blog Post Your Readers Will Love in 5 Steps</h3>
                            </div>
                            <div className='text-spanGray flex mb-2.5 items-center text-xs'>
                                <span className='text-xs mr-2.5'> by Editor</span>
                                <li></li>
                                <div>
                                    <span className='hover:text-black ease-in-out duration-300 cursor-pointer'>February 9, 2024</span>
                                </div>
                            </div>
                            <div className='mb-2.5'>
                                <p className='text-spanGray text-base leading-snug mob:text-sm'>Why the world would end without travel coupons. The 16 worst songs about spa deals. How daily me person.  The 11 worst business software in history. Why latest electronic gadgets will make you question everything. The evolution of cool science experiments. 16 facts about cool tech gadgets that'll keep you up at night.  How carnival...</p>
                            </div>
                            <div className='mt-2'>
                                <a className='uppercase font-extrabold tracking-widest text-xs hover:text-grayHover ease-in-out duration-300 cursor-pointer' href='#'>Read More</a>
                                <img className='w-7 h-5 inline' src={arrow} alt='arrow' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='h-[345px] tab:h-[235px] mob:h-[215px] w-auto overflow-hidden'>
                            <img className='h-full w-full object-cover transform hover:scale-110 ease-in-out duration-300' src={blogFirst} alt='blogFirst' />
                        </div>

                        <div className='pt-5'>
                            <div className='mb-1'>
                                <span className='text-xs uppercase font-bold pr-2 border-r border-black hover:text-grayHover ease-in-out duration-300 cursor-pointer '>business</span>
                                <span className='text-xs uppercase font-bold px-2 border-r border-black hover:text-grayHover ease-in-out duration-300 cursor-pointer '>marketing</span>
                                <span className='text-xs uppercase font-bold pl-2 hover:text-grayHover ease-in-out duration-300 cursor-pointer '>social media</span>
                            </div>

                            <div className='mb-2.5 text-xl tracking-wide font-semibold'>
                                <h3 className='hover:text-grayHover ease-in-out duration-300 cursor-pointer mob:text-base'>How to Write a Blog Post Your Readers Will Love in 5 Steps</h3>
                            </div>
                            <div className='text-spanGray flex mb-2.5 items-center text-xs'>
                                <span className='text-xs mr-2.5'> by Editor</span>
                                <li></li>
                                <div>
                                    <span className='hover:text-black ease-in-out duration-300 cursor-pointer'>February 9, 2024</span>
                                </div>
                            </div>
                            <div className='mb-2.5'>
                                <p className='text-spanGray text-base leading-snug mob:text-sm'>Why the world would end without travel coupons. The 16 worst songs about spa deals. How daily me person.  The 11 worst business software in history. Why latest electronic gadgets will make you question everything. The evolution of cool science experiments. 16 facts about cool tech gadgets that'll keep you up at night.  How carnival...</p>
                            </div>
                            <div className='mt-2'>
                                <a className='uppercase font-extrabold tracking-widest text-xs hover:text-grayHover ease-in-out duration-300 cursor-pointer' href='#'>Read More</a>
                                <img className='w-7 h-5 inline' src={arrow} alt='arrow' />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <RelatedBlog />
                    </div>
                </div>
            </div>
        </div>
    )
}

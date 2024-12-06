import React from 'react'
import blogFirst from '../../../Assets/Images/blogFirst.webp';
import arrow from '../../../Assets/Icon/arrow-sm-right-svgrepo-com.svg';
import RelatedBlog from '../relatedBlog';
export default function BlogCard() {
    return (
        <div>
            <div className='text-center py-10 bg-gray tab:py-7'>
                <div className='pb-3'>
                    <a href='#' className='hover:text-grayHover ease-in-out duration-300 cursor-pointer text-sm tracking-wider font-normal'>Home /</a>
                    <a href='#' className='hover:text-grayHover ease-in-out duration-300 cursor-pointer text-sm tracking-wider font-normal'> Blog</a>
                </div>
                <div className='text-3xl font-bold tracking-wide'>
                    <h3>Blog</h3>
                </div>
            </div>
            <div className='max-w-[1400px] mx-auto grid grid-cols-[1fr_280px] gap-8 tab:grid-cols-1 tab:px-5 tab:py-7'>
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
                                <span className='text-xs uppercase font-bold pl-2 hover:text-grayHover ease-in-out duration-300 cursor-pointer'>Promotions</span>
                            </div>

                            <div className='mb-2.5 text-xl tracking-wide font-semibold mob:text-base'>
                                <h3 className='hover:text-grayHover ease-in-out duration-300 cursor-pointer'>9 Content Marketing Trends and Ideas to Increase Traffic</h3>
                            </div>
                            <div className='text-spanGray flex mb-2.5 items-center text-xs'>
                                <span className='text-xs mr-2.5'> by Editor</span>
                                <li></li>
                                <div>
                                    <span className='hover:text-black ease-in-out duration-300 cursor-pointer'>
                                        February 7, 2024</span>
                                </div>
                            </div>
                            <div className='mb-2.5'>
                                <p className='text-spanGray text-base leading-snug mob:text-sm'>Why do people think wholesale accessories are a good idea? Unbelievable cool tech gadget success stories. How cool tech gadgets can help you predict the future. The 10 best passport application twitter feeds to follow. 9 uses for business software. The unconventional guide to wholesale accessories. How to be unpopular in the science article world....</p>
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

                            <div className='mb-2.5 text-xl tracking-wide font-semibold mob:text-base'>
                                <h3 className='hover:text-grayHover ease-in-out duration-300 cursor-pointer '>The Ultimate Guide to Marketing Strategies to Improve Sales</h3>
                            </div>
                            <div className='text-spanGray flex mb-2.5 items-center text-xs'>
                                <span className='text-xs mr-2.5'> by Editor</span>
                                <li></li>
                                <div>
                                    <span className='hover:text-black ease-in-out duration-300 cursor-pointer'>February 5, 2024</span>
                                </div>
                            </div>
                            <div className='mb-2.5'>
                                <p className='text-spanGray text-base leading-snug mob:text-sm'>Many things about electronic devices your kids don't want you to know How storage devices can help you predict the future. Why mom was right about wholesale accessories. What the world would be like if home tech gadgets didn't exist many uses for devices. How devices can help you predict the future. Ways landscape architectures...</p>
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
                                <span className='text-xs uppercase font-bold pr-2 border-r border-black hover:text-grayHover ease-in-out duration-300 cursor-pointer '>Marketing </span>
                                <span className='text-xs uppercase font-bold px-2 border-r border-black hover:text-grayHover ease-in-out duration-300 cursor-pointer '> Promotions </span>
                                <span className='text-xs uppercase font-bold pl-2 hover:text-grayHover ease-in-out duration-300 cursor-pointer'> Statistics</span>
                            </div>

                            <div className='mb-2.5 text-xl tracking-wide font-semibold'>
                                <h3 className='hover:text-grayHover ease-in-out duration-300 cursor-pointer mob:text-base'>50 Best Sales Questions to Determine Your Customer's Needs</h3>
                            </div>
                            <div className='text-spanGray flex mb-2.5 items-center text-xs'>
                                <span className='text-xs mr-2.5'> by Editor</span>
                                <li></li>
                                <div>
                                    <span className='hover:text-black ease-in-out duration-300 cursor-pointer'>
                                        February 3, 2024</span>
                                </div>
                            </div>
                            <div className='mb-2.5'>
                                <p className='text-spanGray text-base leading-snug mob:text-sm'>The unconventional guide to the software applications. Why do people think business software is a good idea? Why technology tips will make you question everything. Why storage devices are afraid of the truth. What everyone is saying about best stores. The complete beginner's guide to wholesale accessories. Why your storage device never works out the...</p>
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

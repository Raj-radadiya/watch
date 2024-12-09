import React from 'react'
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
import menuHover from '../../../Assets/Icon/menuWhite.svg';
import menu from '../../../Assets/Icon/menu black.svg';
import straitMenu from '../../../Assets/Icon/strait menu.svg';
import Filter from '../../../Layout/filterMenu';
import filter from '../../../Assets/Icon/mynaui--filter.svg';
export default function ManWatchSection() {
    return (
        <div>
            <div className=' max-w-[1430px] mx-auto px-4 grid grid-cols-[280px_1fr] gap-8 py-12 tab:grid-cols-1 tab:gap-12 tab:flex tab:flex-col-reverse'>
                <div>
                    <div>
                        <Filter />
                    </div>
                </div>
                <div className='tab:w-full'>
                    <div className='flex justify-between items-center pb-5'>
                        <div className='text-spanGray text-sm tab:hidden'>
                            <p>Showing all 4 results</p>
                        </div>
                        <div>
                            <div className='bg-black p-2 text-sm items-center gap-2 text-white hidden tab:block'>
                                <div className='flex gap-2 items-center'>
                                    <img className='w-5 h-5' src={filter} alt='filter' />
                                    <span>Filter</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='mob:p-1'>
                                <select className='outline-none border-b border-b-borderGray py-1 text-sm mob:p-3'>
                                    <option className='text-sm'>default Sorting</option>
                                    <option className='text-sm'>Sort by popularity</option>
                                    <option className='text-sm'>Sort by average rating</option>
                                    <option className='text-sm'>Sort by latest</option>
                                    <option className='text-sm'>Sort by price: low to high</option>
                                    <option className='text-sm'>Sort by price: high to low</option>
                                </select>
                            </div>
                            <div className='bg-black p-2 w-8 h-8 rounded-sm mob:hidden'>
                                <img src={straitMenu} alt='menu' />
                            </div>
                            <div className='group relative bg-gray rounded-sm mob:hidden'>
                                <img className='absolute group-hover:opacity-0 ease-in-out duration-300 p-2 w-8 h-8' src={menu} alt='menu' />
                                <img className='group-hover:opacity-100 ease-in-out duration-300 group-hover:bg-black p-2 w-8 h-8' src={menuHover} alt='menu' />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-7 tab:grid-cols-3 tab:gap-4 mob:grid-cols-2 mob:gap-3'>
                        <div className='mob:px-0'>
                            <div className='relative border border-borderGray'>
                                <div className="h-64 tab:h-56 mob:h-40 group relative cursor-pointer">
                                    <img className="h-full absolute duration-300 opacity-100 group-hover:opacity-0" src={watchFirst} alt="watch" />
                                    <img className="h-full absolute duration-300 opacity-0 group-hover:opacity-100" src={watchFirstHover} alt="watch" />
                                </div>
                                <div className='absolute top-5 left-5 cursor-pointer mob:left-3'>
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
                                    <div className='text-sm font-semibold hover:text-grayHover transition-all ease-in-out cursor-pointer'>
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
                                    <span className='font-semibold'>$200</span>
                                </div>
                                <div>
                                    <button className='mx-auto text-center justify-center capitalize px-6 py-2 bg-gray text-black font-semibold text-button hover:bg-black hover:text-white transition-all ease-in-out'>add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div className='mob:px-0'>
                            <div className='relative border border-borderGray'>
                                <div className="h-64 tab:h-56 mob:h-40 group relative cursor-pointer">
                                    <img className="h-full absolute duration-300 opacity-100 group-hover:opacity-0" src={watchSecond} alt="watch" />
                                    <img className="h-full absolute duration-300 opacity-0 group-hover:opacity-100" src={watchSecondHover} alt="watch" />
                                </div>
                                <div className='absolute top-5 left-5 cursor-pointer mob:left-3'>
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
                                <div className='absolute top-0.5 right-2 cursor-pointer'>
                                    <span className='bg-black text-white text-xs py-0.5 px-0.5'>-3%</span>
                                </div>
                            </div>
                            <div className='text-center align-center flex flex-col gap-2 py-3'>
                                <div>
                                    <div className='text-sm hover:text-grayHover transition-all ease-in-out font-semibold cursor-pointer'>
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
                                    <span className='font-semibold'>$250</span>
                                </div>
                                <div>
                                    <button className='mx-auto text-center justify-center capitalize px-6 py-2 bg-gray text-black font-semibold text-button hover:bg-black hover:text-white transition-all ease-in-out'>add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div className='mob:px-0'>
                            <div className='relative border border-borderGray'>
                                <div className="h-64 tab:h-56 mob:h-40 group relative cursor-pointer">
                                    <img className="h-full absolute duration-300 opacity-100 group-hover:opacity-0" src={watchThird} alt="watch" />
                                    <img className="h-full absolute duration-300 opacity-0 group-hover:opacity-100" src={watchThirdHover} alt="watch" />
                                </div>
                                <div className='absolute top-5 left-5 cursor-pointer mob:left-3'>
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
                                <div className='absolute top-0.5 right-1.5 cursor-pointer'>
                                    <span className='bg-black text-white text-xs py-0.5 px-0.5'>-3%</span>
                                </div>
                            </div>
                            <div className='text-center align-center flex flex-col gap-2 py-3'>
                                <div>
                                    <div className='text-sm hover:text-grayHover transition-all ease-in-out font-semibold cursor-pointer'>
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
                                    <span className='font-semibold'>$200</span>
                                </div>
                                <div>
                                    <button className='mx-auto text-center justify-center capitalize px-6 py-2 bg-gray text-black font-semibold text-button hover:bg-black hover:text-white transition-all ease-in-out'>add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div className='mob:px-0'>
                            <div className='relative border border-borderGray'>
                                <div className="h-64 tab:h-56 mob:h-40 group relative cursor-pointer">
                                    <img className="h-full absolute duration-300 opacity-100 group-hover:opacity-0" src={watchForth} alt="watch" />
                                    <img className="h-full absolute duration-300 opacity-0 group-hover:opacity-100" src={watchForthHover} alt="watch" />
                                </div>
                                <div className='absolute top-5 left-5 cursor-pointer mob:left-3'>
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
                                    <div className='text-sm hover:text-grayHover transition-all ease-in-out font-semibold cursor-pointer'>
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
                                    <span className='font-semibold'>$200</span>
                                </div>
                                <div>
                                    <button className='mx-auto text-center justify-center capitalize px-6 py-2 bg-gray text-black font-semibold text-button hover:bg-black hover:text-white transition-all ease-in-out'>add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div className='mob:px-0'>
                            <div className='relative border border-borderGray'>
                                <div className="h-64 tab:h-56 mob:h-40 group relative cursor-pointer">
                                    <img className="h-full absolute duration-300 opacity-100 group-hover:opacity-0" src={watchFifth} alt="watch" />
                                    <img className="h-full absolute duration-300 opacity-0 group-hover:opacity-100" src={watchFifthHover} alt="watch" />
                                </div>
                                <div className='absolute top-5 left-5 cursor-pointer mob:left-3'>
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
                                    <div className='text-sm hover:text-grayHover transition-all ease-in-out font-semibold cursor-pointer'>
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
                                    <span className='font-semibold'>$200</span>
                                </div>
                                <div>
                                    <button className='mx-auto text-center justify-center capitalize px-6 py-2 bg-gray text-black font-semibold text-button hover:bg-black hover:text-white transition-all ease-in-out'>add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

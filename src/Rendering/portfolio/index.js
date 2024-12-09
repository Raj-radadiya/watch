import React from 'react'
import tick from '../../Assets/Icon/check-circle-svgrepo-com.svg';
import portfolio from '../../Assets/Images/portfolioImg.webp';
import portfolioFirst from '../../Assets/Images/portfolioFirst.webp';
import portfolioSecond from '../../Assets/Images/portfolioSecond.webp';
import portfolioThird from '../../Assets/Images/portfolioThird.webp';
import portfolioForth from '../../Assets/Images/portfolioForth.webp';
import portfolioFifth from '../../Assets/Images/portfolioFifth.webp';
import portfolioSixth from '../../Assets/Images/portfolioSixth.webp';
export default function Portfolio() {
    return (
        <div >
            <div className='text-center py-10 bg-gray tab:py-7 mob:py-4'>
                <div className='pb-3'>
                    <a href='#' className='hover:text-grayHover ease-in-out duration-300 cursor-pointer text-sm tracking-wider font-normal'>Home /</a>
                    <a href='#' className='hover:text-grayHover ease-in-out duration-300 cursor-pointer text-sm tracking-wider font-normal'> Portfolio</a>
                </div>
                <div className='text-3xl font-bold tracking-wide mob:text-2xl'>
                    <h3>Portfolio</h3>
                </div>
            </div>

            <div className='max-w-[1400px] mx-auto my-14 grid grid-cols-2 items-center justify-between tab:grid-cols-1 tab:px-5 tab:gap-10 mob:my-7'>
                <div className='mr-14 tab:m-0'>
                    <div className='pb-3'>
                        <span className='text-textGray mob:text-sm'>Our work</span>
                    </div>
                    <div className='mb-7 mob:mb-4'>
                        <h3 className='text-2xl font-bold tracking-wider mob:text-xl'>Manage Everything in Your Hand</h3>
                    </div>
                    <div>
                        <p className='text-sm leading-6 text-textGray'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form have suffered alteration in some form. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </div>
                    <div className='mt-10 mob:mt-8'>
                        <div className='hover:opacity-60 transition-all ease-in-out duration-100 cursor-pointer flex items-center py-1'>
                            <img className='w-5 h-5 inline' src={tick} alt='tick' />
                            <span className='ml-2 mob:text-sm text-textGray'>Campaigns Per Day</span>
                        </div>
                        <div className='hover:opacity-60 transition-all ease-in-out duration-100 cursor-pointer flex items-center py-1'>
                            <img className='w-5 h-5 inline' src={tick} alt='tick' />
                            <span className='ml-2 mob:text-sm text-textGray'>Digital Marketing</span>
                        </div>
                        <div className='hover:opacity-60 transition-all ease-in-out duration-100 cursor-pointer flex items-center py-1'>
                            <img className='w-5 h-5 inline' src={tick} alt='tick' />
                            <span className='ml-2 mob:text-sm text-textGray'>Marketing Agency</span>
                        </div>
                        <div className='hover:opacity-60 transition-all ease-in-out duration-100 cursor-pointer flex items-center py-1'>
                            <img className='w-5 h-5 inline' src={tick} alt='tick' />
                            <span className='ml-2 mob:text-sm text-textGray'>Style Templates</span>
                        </div>
                        <div className='hover:opacity-60 transition-all ease-in-out duration-100 cursor-pointer flex items-center py-1'>
                            <img className='w-5 h-5 inline' src={tick} alt='tick' />
                            <span className='ml-2 mob:text-sm text-textGray'>24*7 Hour Supporty</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={portfolio} alt='portfolio' />
                    </div>
                </div>
            </div>
            <div className='max-w-[1400px] mx-auto my-20 mob:my-10 tab:px-5'>
                <div className='text-center mb-5 mob:mb-3'>
                    <div className='pb-3 mob:pb-2'>
                        <span className='text-textGray mob:text-sm'>Our Look-out</span>
                    </div>
                    <div>
                        <p className='text-3xl font-semibold mob:text-xl'>Best of our work</p>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-6 items-center mob:grid-cols-1'>
                    <div className='cursor-pointer overflow-hidden'>
                        <img className='transform hover:scale-110 transition ease-in-out duration-300' src={portfolioFirst} alt='portfolio' />
                    </div>
                    <div className='cursor-pointer overflow-hidden'>
                        <img className='transform hover:scale-110 transition ease-in-out duration-300' src={portfolioSecond} alt='portfolio' />
                    </div>
                    <div className='cursor-pointer overflow-hidden'>
                        <img className='transform hover:scale-110 transition ease-in-out duration-300' src={portfolioThird} alt='portfolio' />
                    </div>
                    <div className='cursor-pointer overflow-hidden'>
                        <img className='transform hover:scale-110 transition ease-in-out duration-300' src={portfolioForth} alt='portfolio' />
                    </div>
                    <div className='cursor-pointer overflow-hidden'>
                        <img className='transform hover:scale-110 transition ease-in-out duration-300' src={portfolioFifth} alt='portfolio' />
                    </div>
                    <div className='cursor-pointer overflow-hidden'>
                        <img className='transform hover:scale-110 transition ease-in-out duration-300' src={portfolioSixth} alt='portfolio' />
                    </div>
                </div>
            </div>
        </div>
    )
}

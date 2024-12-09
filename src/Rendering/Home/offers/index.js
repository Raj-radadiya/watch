import React from 'react'
import offersLeft from '../../../Assets/Images/offersLeft.webp';
import offersRight from '../../../Assets/Images/offersRiight.webp';
export default function Offers() {
    return (
        <div>
            <div className='max-w-[1430px] mx-auto py-16 tab:py-0 mob:py-5 flex gap-8 mob:flex-col tab:px-5'>
                <div className='relative overflow-hidden'>
                    <div>
                        <div className='h-64 w-[715px] tab:h-[140px] tab:w-auto transform hover:scale-110 ease-in-out duration-300 mob:h-36'>
                            <img className='h-full w-full object-cover' src={offersLeft} alt='offersLeft' />
                        </div>
                        <div className='absolute flex flex-col gap-4 top-1/2 left-16 transform -translate-y-1/2 tab:left-6 tab:gap-1'>
                            <p className='text-xl font-medium tab:font-normal tab:text-lg mob:text-base'>Up to 45% Discount</p>
                            <h2 className='text-3xl font-black tracking-wider tab:font-bold tab:tracking-tight mob:text-2xl'>Premium Pick</h2>
                            <a className='text-base font-semibold tracking-wider underline decoration-2 transform hover:scale-110 duration-300 tab:pt-2' href='#'>Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className='relative overflow-hidden'>
                    <div>
                        <div className='h-64 w-[715px] tab:h-[140px]  tab:w-auto transform hover:scale-110 ease-in-out duration-300 mob:h-36'>
                            <img className='h-full w-full' src={offersRight} alt='offersLeft' />
                        </div>
                        <div className='absolute flex flex-col gap-4 top-1/2 left-16 transform -translate-y-1/2 tab:left-6 tab:gap-1'>
                            <p className='text-xl font-medium tab:font-normal tab:text-lg mob:text-base'>Buy 2 Get 1 FREE</p>
                            <h2 className='text-3xl font-black tracking-wider tab:font-bold tab:tracking-tight mob:text-2xl'>Limited Offers</h2>
                            <a className='text-base font-semibold tracking-wider underline decoration-2 transform hover:scale-110 duration-300 tab:pt-2' href='#'>Shop Now</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

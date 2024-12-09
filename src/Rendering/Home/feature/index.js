import React from 'react'
import box from '../../../Assets/Icon/f7--shippingbox.svg';
import tick from '../../../Assets/Icon/charm--circle-tick.svg';
import chat from '../../../Assets/Icon/chat.svg';
import money from '../../../Assets/Icon/solar--hand-money-outline.svg';
export default function Feature() {
    return (
        <div>
            <div className='bg-gray px-4 py-10 tab:pb-5 mob:py-6'>
                <div className='flex justify-between max-w-[1430px] mx-auto gap-28 mob:gap-16 tab:w-[700px] mob:w-[350px] tab:mx-auto tab:overflow-x-auto mob:overflow-x-auto'>
                    <div className='font-semibold text-base mob:text-sm flex gap-4 items-center whitespace-nowrap tab:w-full mob:gap-2'>
                        <img className='h-14 tab:h-10 mob:h-8 inline' src={box} alt='box' />
                        <span>100% free shipping </span>
                    </div>
                    <div className='font-semibold text-base mob:text-sm flex gap-4 items-center whitespace-nowrap tab:w-full mob:gap-2'>
                        <img className='h-14 tab:h-10 mob:h-8 inline' src={tick} alt='box' />
                        <span>Quick & Easy to Returns</span>
                    </div>
                    <div className='font-semibold text-base mob:text-sm flex gap-4 items-center whitespace-nowrap tab:w-full mob:gap-2'>
                        <img className='h-14 tab:h-10 mob:h-8' src={chat} alt='box' />
                        <span>24/4 Online Best Support</span>
                    </div>
                    <div className='font-semibold text-base mob:text-sm flex gap-4 items-center whitespace-nowrap tab:w-full mob:gap-2'>
                        <img className='h-14 tab:h-10 mob:h-8' src={money} alt='box' />
                        <span>24/4 Online Best Support</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

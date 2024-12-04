import React from 'react'
import box from '../../../Assets/Icon/f7--shippingbox.svg';
import tick from '../../../Assets/Icon/charm--circle-tick.svg';
import chat from '../../../Assets/Icon/chat.svg';
import money from '../../../Assets/Icon/solar--hand-money-outline.svg';
export default function Feature() {
    return (
        <div>
            <div className='bg-gray px-4 py-10'>
                <div className='flex justify-between max-w-[1430px] mx-auto  mob:flex-col mob:gap-3'>
                    <div className='flex gap-4 items-center mob:justify-center'>
                        <div>
                            <img className='h-14 tab:h-10' src={box} alt='box' />
                        </div>
                        <div className='font-semibold text-base'>
                            <span>100% free shipping </span>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center mob:justify-center'>
                        <div>
                            <img className='h-14 tab:h-10' src={tick} alt='box' />
                        </div>
                        <div className='font-semibold text-base'>
                            <span>Quick & Easy to Returns</span>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center mob:justify-center'>
                        <div>
                            <img className='h-14 tab:h-10' src={chat} alt='box' />
                        </div>
                        <div className='font-semibold text-base'>
                            <span>24/4 Online Best Support</span>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center mob:justify-center'>
                        <div>
                            <img className='h-14 tab:h-10' src={money} alt='box' />
                        </div>
                        <div className='font-semibold text-base'>
                            <span>24/4 Online Best Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

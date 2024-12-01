import React from 'react'
import box from '../../../Assets/Icon/f7--shippingbox.svg';
import tick from '../../../Assets/Icon/charm--circle-tick.svg';
import chat from '../../../Assets/Icon/chat.svg';
import money from '../../../Assets/Icon/solar--hand-money-outline.svg';
export default function Feature() {
    return (
        <div>
            <div className='bg-gray px-4 py-10'>
                <div className='flex gap-4 max-w-[1430px] mx-auto '>
                    <div className='flex items-center'>
                        <img src={box} alt='box' />
                        <span>100% free shipping </span>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <img src={tick} alt='box' />
                        </div>
                        <div>
                            <span>Quick & Easy to Returns</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src={chat} alt='box' />
                        <span>24/4 Online Best Support</span>
                    </div>
                    <div className='flex items-center'>
                        <img src={money} alt='box' />
                        <span>24/4 Online Best Support</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import manWatch from '../../../Assets/Images/manWatch.webp';
import womanWatch from '../../../Assets/Images/womanWatch.webp';
import coupleWatch from '../../../Assets/Images/coupleWatch.webp';
export default function Category() {
    return (
        <div>
            <div className='max-w-[1430px] mx-auto pt-28 tab:py-16 mob:py-10'>
                <div className='text-center'>
                    <div className='mb-10 text-3xl font-semibold mob:text-2xl mob:mb-5'>
                        <h1>Shop By Category</h1>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-3 gap-4 tab:px-4 mob:grid-cols-1 mob:gap-2 mob:px-6'>
                        <div className='text-center'>
                            <div className='h-80 tab:h-60 overflow-hidden '>
                                <img className='h-full object-cover transform hover:scale-110 transition-all ease-in-out' src={manWatch} alt="manWatch" />
                            </div>
                            <div className='py-3'>
                                <div className='text-2xl font-semibold capitalize hover:text-indigo transition-all ease-in-out'>
                                    <p>man watch</p>
                                </div>
                                <div className='text-md'>
                                    <p>4 products</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>
                            <div className='h-80 tab:h-60 overflow-hidden'>
                                <img className='h-full object-cover transform hover:scale-105 transition-all ease-in-out' src={womanWatch} alt="manWatch" />
                            </div>
                            <div className='py-3'>
                                <div className='text-2xl font-semibold capitalize hover:text-indigo transition-all ease-in-out'>
                                    <p>ladies watch</p>
                                </div>
                                <div className='text-md'>
                                    <p>4 products</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>
                            <div className='h-80 tab:h-60 overflow-hidden'>
                                <img className='h-full object-cover transform hover:scale-105 transition-all ease-in-out' src={coupleWatch} alt="manWatch" />
                            </div>
                            <div className='py-3'>
                                <div className='text-2xl font-semibold capitalize hover:text-indigo transition-all ease-in-out'>
                                    <p>couple watch</p>
                                </div>
                                <div className='text-md'>
                                    <p>4 products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

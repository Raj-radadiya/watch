import React from 'react'

export default function Discount() {
    return (
        <div>
            <div className='mt-16 tab:m-0 text-center'>
                <div className='h-[350px] tab:h-[270px] bg-black flex justify-center items-center flex-col'>
                    <h2 className='text-5xl font-semibold text-white pb-12 tab:text-3xl mob:text-xl'>Get 10% OFF your first order</h2>
                    <input className='w-1/3 p-2 bg-black text-white capitalize border-b-0 tab:text-sm tab:w-[550px] mob:w-full' type='email' placeholder='enter your email address' />
                </div>
            </div>
        </div>
    )
}

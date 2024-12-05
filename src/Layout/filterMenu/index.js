import React from 'react'
import minus from '../../Assets/Icon/minus-svgrepo-com.svg';
import star from '../../Assets/Icon/icons8-star-15.png';
import starWhite from '../../Assets/Icon/mdi-light--star.svg';
export default function Filter() {
    return (
        <div>
            <div className='mb-10 mob:mb-7'>
                <div className='flex justify-between items-center pb-6 cursor-pointer mob:pb-4'>
                    <div className='text-lg font-bold tracking-wider'>
                        <h3>Shop By Categories</h3>
                    </div>
                    <div className='w-5 h-5'>
                        <img src={minus} alt='minus' />
                    </div>
                </div>
                <div>
                    <div className='mb-2 flex items-center cursor-pointer'>
                        <input className='w-4 h-4' type='checkbox' />
                        <span className='ml-2 text-textGray hover:text-black ease-in-out duration-75 text-base tab:text-sm mob:ml-4 mob:text-xs'>Our Store</span>
                    </div>
                    <div className='mb-2 flex items-center cursor-pointer'>
                        <input className='w-4 h-4' type='checkbox' />
                        <span className='ml-2 text-textGray hover:text-black ease-in-out duration-75 text-base tab:text-sm mob:ml-4 mob:text-xs'>Gold Analog Watch</span>
                    </div>
                    <div className='mb-2 flex items-center cursor-pointer'>
                        <input className='w-4 h-4' type='checkbox' />
                        <span className='ml-2 text-textGray hover:text-black ease-in-out duration-75 text-base tab:text-sm mob:ml-4 mob:text-xs'>Philippe Patek Watches</span>
                    </div>
                    <div className='mb-2 flex items-center cursor-pointer'>
                        <input className='w-4 h-4' type='checkbox' />
                        <span className='ml-2 text-textGray hover:text-black ease-in-out duration-75 text-base tab:text-sm mob:ml-4 mob:text-xs'>Silver Iik Watches
                        </span>
                    </div>
                    <div className='mb-2 flex items-center cursor-pointer'>
                        <input className='w-4 h-4' type='checkbox' />
                        <span className='ml-2 text-textGray hover:text-black ease-in-out duration-75 text-base tab:text-sm mob:ml-4 mob:text-xs'>Swatch Watch</span>
                    </div>
                    <div className='mb-2 flex items-center cursor-pointer'>
                        <input className='w-4 h-4' type='checkbox' />
                        <span className='ml-2 text-textGray hover:text-black ease-in-out duration-75 text-base tab:text-sm mob:ml-4 mob:text-xs'>Timex Watch</span>
                    </div>
                    <div className='mb-2 flex items-center cursor-pointer'>
                        <input className='w-4 h-4' type='checkbox' />
                        <span className='ml-2 text-textGray hover:text-black ease-in-out duration-75 text-base tab:text-sm mob:ml-4 mob:text-xs'>Transparant Watch</span>
                    </div>
                </div>
            </div>
            <div className='mb-10 mob:mb-7'>
                <div className='flex justify-between items-center pb-6 cursor-pointer mob:pb-4'>
                    <div className='text-lg font-bold tracking-wider'>
                        <h3>Highlight</h3>
                    </div>
                    <div className='w-5 h-5'>
                        <img src={minus} alt='minus' />
                    </div>
                </div>
                <div>
                    <div className='mb-2 cursor-pointer'>
                        <span className='text-textGray hover:text-black ease-in-out duration-75 text-base block mb-2 tab:text-sm mob:text-'>All Products</span>
                        <span className='text-textGray hover:text-black ease-in-out duration-75 text-base block mb-2 tab:text-sm mob:text-'>Best Seller</span>
                        <span className='text-textGray hover:text-black ease-in-out duration-75 text-base block mb-2 tab:text-sm mob:text-'>New Arrivals</span>
                        <span className='text-textGray hover:text-black ease-in-out duration-75 text-base block mb-2 tab:text-sm mob:text-'>Sale
                        </span>
                        <span className='text-textGray hover:text-black ease-in-out duration-75 text-base block mb-2 tab:text-sm mob:text-'>Hot Items</span>
                    </div>
                </div>
            </div>
            <div className='mb-10 mob:mb-7'>
                <div className='flex justify-between items-center pb-6 cursor-pointer mob:pb-4'>
                    <div className='text-lg font-bold tracking-wider'>
                        <h3>Filter by Color</h3>
                    </div>
                    <div className='w-5 h-5'>
                        <img src={minus} alt='minus' />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='w-8 h-8 cursor-pointer bg-black'>
                    </div>
                    <div className='w-8 h-8 cursor-pointer bg-blue'>
                    </div>
                    <div className='w-8 h-8 cursor-pointer bg-brown'>
                    </div>
                    <div className='w-8 h-8 cursor-pointer bg-golden'>
                    </div>
                    <div className='w-8 h-8 cursor-pointer bg-silver'>
                    </div>
                </div>
            </div>
            <div className='mb-10 mob:mb-7'>
                <div className='flex justify-between items-center pb-6 cursor-pointer mob:pb-4'>
                    <div className='text-lg font-bold tracking-wider'>
                        <h3>Price Filter</h3>
                    </div>
                    <div className='w-5 h-5'>
                        <img src={minus} alt='minus' />
                    </div>
                </div>
                <div>
                    <div className='mb-2 cursor-pointer'>
                        <span className='text-textGray hover:text-black ease-in-out duration-75 text-base block mb-2 mob:text-xs'>All</span>
                        <span className='text-textGray hover:text-black ease-in-out duration-75 text-base block mb-2 mob:text-xs'>$0-$500</span>
                        <span className='text-textGray hover:text-black ease-in-out duration-75 text-base block mb-2 mob:text-xs'>$500-$1,000</span>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-between items-center pb-6 cursor-pointer mob:pb-4'>
                    <div className='text-lg font-bold tracking-wider'>
                        <h3>Average rating</h3>
                    </div>
                    <div className='w-5 h-5'>
                        <img src={minus} alt='minus' />
                    </div>
                </div>
                <div className='pb-3'>
                    <div className='flex gap-1'>
                        <div className='flex'>
                            <img className='w-5 h-5' src={star} alt='star' />
                            <img className='w-5 h-5' src={star} alt='star' />
                            <img className='w-5 h-5' src={star} alt='star' />
                            <img className='w-5 h-5' src={star} alt='star' />
                            <img className='w-5 h-5' src={star} alt='star' />
                        </div>
                        <div className='tab:text-sm mob:text-xs'>
                            <p>(3)</p>
                        </div>
                    </div>
                </div>
                <div className='pb-3'>
                    <div className='flex gap-1'>
                        <div className='flex'>
                            <img className='w-5 h-5' src={star} alt='star' />
                            <img className='w-5 h-5' src={star} alt='star' />
                            <img className='w-5 h-5' src={star} alt='star' />
                            <img className='w-5 h-5' src={star} alt='star' />
                            <img className='w-5 h-5' src={starWhite} alt='star' />
                        </div>
                        <div className='tab:text-sm mob:text-xs'>
                            <p>(1)</p>
                        </div>
                    </div>
                </div>
                <div className='pb-3'>
                    <div className='flex gap-1'>
                        <div className='flex'>
                            <img className='w-5 h-5' src={star} alt='star' />
                            <img className='w-5 h-5' src={star} alt='star' />
                            <img className='w-5 h-5' src={star} alt='star' />
                            <img className='w-5 h-5' src={starWhite} alt='star' />
                            <img className='w-5 h-5' src={starWhite} alt='star' />
                        </div>
                        <div className='tab:text-sm mob:text-xs'>
                            <p>(0)</p>
                        </div>
                    </div>
                </div>
                <div className='pb-3'>
                    <div className='flex gap-1'>
                        <div className='flex'>
                            <img className='w-5 h-5' src={star} alt='star' />
                            <img className='w-5 h-5' src={star} alt='star' />
                            <img className='w-5 h-5' src={starWhite} alt='star' />
                            <img className='w-5 h-5' src={starWhite} alt='star' />
                            <img className='w-5 h-5' src={starWhite} alt='star' />
                        </div>
                        <div className='tab:text-sm mob:text-xs'>
                            <p>(0)</p>
                        </div>
                    </div>
                </div>
                <div className='pb-3'>
                    <div className='flex gap-1'>
                        <div className='flex'>
                            <img className='w-5 h-5' src={star} alt='star' />
                            <img className='w-5 h-5' src={starWhite} alt='star' />
                            <img className='w-5 h-5' src={starWhite} alt='star' />
                            <img className='w-5 h-5' src={starWhite} alt='star' />
                            <img className='w-5 h-5' src={starWhite} alt='star' />
                        </div>
                        <div className='tab:text-sm mob:text-xs'>
                            <p>(0)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import star from '../../../Assets/Icon/icons8-star-15.png';
import eye from '../../../Assets/Icon/eye-svgrepo-com.svg';
import fire from '../../../Assets/Icon/fire-svgrepo-com.svg';
import minus from '../../../Assets/Icon/minus-svgrepo-com.svg';
import plus from '../../../Assets/Icon/plus-large-svgrepo-com.svg';
import chart from '../../../Assets/Icon/eva--bar-chart-outline.svg';
import shield from '../../../Assets/Icon/protection-shield-with-a-check-mark-svgrepo-com.svg';
import paymentFirst from '../../../Assets/Icon/visa.png';
import paymentSecond from '../../../Assets/Icon/mastercard-svgrepo-com.svg';
import paymentThird from '../../../Assets/Icon/american-express-svgrepo-com.svg';
import paymentForth from '../../../Assets/Icon/discover-svgrepo-com.svg';
import paymentFifth from '../../../Assets/Icon/paypal-svgrepo-com.svg';
import paymentSixth from '../../../Assets/Icon/apple-pay-svgrepo-com.svg';
import heart from '../../../Assets/Icon/heart.svg';
export default function WatchDisc() {
    return (
        <div className='mob:w-full'>
            <div className='border-b border-borderGray pb-5'>
                <div>
                    <p className='text-sm text-textGray tab:mb-1'>Product Brand: <a className='underline text-black font-medium ml-1 hover:text-spanGray duration-200' href='#'>Creative</a></p>
                </div>
                <div className='mb-3'>
                    <h3 className='text-2xl font-semibold tracking-wide tab:text-lg'>Tissot T-Classic Rhodium Dial Automatic Men's Watch</h3>
                </div>
                <div className='flex justify-between items-center mb-3 tab:flex-col tab:items-start tab:gap-2'>
                    <div className='text-xl font-medium'>
                        <h3>$200</h3>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex'>
                            <img className='w-4 h-4' src={star} alt='star' />
                            <img className='w-4 h-4' src={star} alt='star' />
                            <img className='w-4 h-4' src={star} alt='star' />
                            <img className='w-4 h-4' src={star} alt='star' />
                            <img className='w-4 h-4' src={star} alt='star' />
                        </div>
                        <div>
                            <a className='underline' href='#'>(1 customer review )</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='h-12  flex gap-2 items-center mb-3'>
                        <img className='h-12 w-7' src={eye} alt='eye' />
                        <span className='text-base'><b className='mr-1'>25</b>people are viewing this right now</span>
                    </div>
                </div>
                <div className='bg-redBg text-redText py-2 px-3 rounded flex items-center gap-2 mb-4 tab:gap-1'>
                    <img className='w-6 h-6' src={fire} alt='fire' />
                    <p className='tab:text-base'>5 products sold in last 13 hours</p>
                </div>
                <div className='text-base text-textGray mt-3 mb-5 tab:text-sm tab:mb-4'>
                    <li className='pb-0.5'>Case Material: Resin , Water Resistant.</li>
                    <li className='pb-0.5'>Enjoy Both Fearless Adventure And A Comfortable.</li>
                    <li className='pb-0.5'>This Analog-digital Combination Watch Delivers More Comfortable.</li>
                </div>
                <div className='max-w-[435px] mb-4'>
                    <div className='flex gap-5 mb-4'>
                        <div className='flex gap-5 items-center border border-borderGray py-2 px-3'>
                            <div className='w-5 h-5 cursor-pointer'>
                                <img src={minus} alt='minus' />
                            </div>
                            <div>
                                <p>1</p>
                            </div>
                            <div className='w-5 h-5 cursor-pointer'>
                                <img src={plus} alt='plus' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <button className='bg-black text-white py-2 px-3 w-full hover:bg-grayHover duration-300'>Add to cart</button>
                        </div>
                    </div>
                    <div>
                        <button className='bg-black text-white py-2 px-3 w-full hover:bg-grayHover duration-300'>buy now</button>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center gap-2 capitalize font-medium text-base px-4 border-r border-r-borderGray cursor-pointer tab:text-sm'>
                        <div>
                            <img className='w-4 h-4' src={chart} alt='chart' />
                        </div>
                        <div>
                            <span>compare</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 capitalize font-medium text-base px-4 cursor-pointer tab:text-sm'>
                        <div className='w-3 h-3'>
                            <img src={heart} alt='heart' />
                        </div>
                        <div>
                            <span>Add to wishlist</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-4'>
                <div className='mb-4'>
                    <div className='flex items-center gap-2 text-base mb-2 tab:text-sm'>
                        <div>
                            <img className='h-4 w-4' src={shield} alt='shield' />
                        </div>
                        <div>
                            <b>Estimated Delivery :</b>
                        </div>
                        <div>
                            <p>Up to 4 business days</p>
                        </div>
                    </div>
                    <div className=' text-base tab:text-sm'>
                        <img className='h-4 w-4 inline mr-2' src={shield} alt='shield' />
                        <b className='mr-2'>Free Shipping & Returns :</b>
                        <p className='inline tracking-wide tab:leading-loose'>On all orders over $200</p>
                    </div>
                </div>
                <div className='bg-backgroundGray p-4 mb-8'>
                    <fieldset className='flex flex-col items-center'>
                        <div className='flex items-center'>
                            <img className='ml-2 w-10 h-10 tab:w-8 tab:h-8' src={paymentFirst} alt='paymentFirst' />
                            <img className='ml-2 w-10 h-10 tab:w-8 tab:h-8' src={paymentSecond} alt='paymentFirst' />
                            <img className='ml-2 w-10 h-10 tab:w-8 tab:h-8' src={paymentThird} alt='paymentFirst' />
                            <img className='ml-2 w-10 h-10 tab:w-8 tab:h-8' src={paymentForth} alt='paymentFirst' />
                            <img className='ml-2 w-10 h-10 tab:w-8 tab:h-8' src={paymentFifth} alt='paymentFirst' />
                            <img className='ml-2 w-10 h-10 tab:w-8 tab:h-8' src={paymentSixth} alt='paymentFirst' />
                        </div>
                        <div className='text-sm font-medium mt-1'>
                            <p>Guaranteed Safe And Secure Checkout</p>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}
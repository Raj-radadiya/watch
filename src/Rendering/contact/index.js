import React from 'react'
import location from '../../Assets/Icon/location-pin-svgrepo-com.svg';
import call from '../../Assets/Icon/call-receive-svgrepo-com.svg';
import email from '../../Assets/Icon/clarity--email-solid.svg';
import clock from '../../Assets/Icon/mdi--clock-outline.svg';
export default function Contact() {
    return (
        <div>
            <div className='text-center py-10 bg-gray tab:py-7 mob:py-4'>
                <div className='pb-3'>
                    <a href='#' className='hover:text-grayHover ease-in-out duration-300 cursor-pointer text-sm tracking-wider font-normal'>Home /</a>
                    <a href='#' className='hover:text-grayHover ease-in-out duration-300 cursor-pointer text-sm tracking-wider font-normal'> Contact Us</a>
                </div>
                <div className='text-3xl font-bold tracking-wide mob:text-2xl'>
                    <h3>Contact Us</h3>
                </div>
            </div>
            <div className='max-w-[1400px] mx-auto my-14 tab:my-8'>
                <div className='grid grid-cols-[870px_1fr] gap-8 tab:grid-cols-2 tab:px-4 mob:grid-cols-1 mob:gap-6'>
                    <div>
                        <iframe className='w-full h-[750px] tab:h-[700px] mob:h-[350px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17553027.55706213!2d66.30469679863133!3d21.967949333881528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1733714917598!5m2!1sen!2sin"></iframe>
                    </div>
                    <div className='bg-gbGray p-8 mob:p-3'>
                        <div>
                            <div className='mb-10 mob:mb-7'>
                                <h3 className='text-3xl font-semibold pb-3 tab:pb-2 mob:text-2xl'>Get In Touch With Us</h3>
                                <p className='text-textGray text-sm tracking-wide'>If you wish to directly reach us, Please fill out the form below -</p>
                            </div>
                            <div>
                                <label className='text-sm text-spanGray block pb-0.5'>Your name</label>
                                <input className='w-full p-2 border border-borderGray focus:outline-none tab:p-2' type='text' />
                            </div>
                            <div className='mt-10 tab:mt-7'>
                                <label className='text-sm text-spanGray block pb-0.5'>Your email</label>
                                <input className='w-full p-2 border border-borderGray focus:outline-none' type='email' />
                            </div>
                            <div className='mt-10 tab:mt-7'>
                                <label className='text-sm text-spanGray block pb-0.5'>Your message (optional)</label>
                                <textarea className='w-full p-2 border border-borderGray focus:outline-none' rows='8' type='text' />
                            </div>
                            <div>
                                <button className='bg-black text-white py-2 px-5 mt-10 hover:bg-grayHover ease-in-out capitalize duration-300'>submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-[1400px] mx-auto my-16'>
                <div className='bg-gbGray p-8 grid grid-cols-4 gap-2 justify-between tab:grid-cols-2 tab:gap-y-8 mob:grid-cols-1'>
                    <div className='flex gap-3 items-center'>
                        <div className='p-3 border border-black rounded-full'>
                            <img className='w-10 h-10 mob:w-6 mob:h-6' src={location} alt='location' />
                        </div>
                        <div>
                            <p>50-UTC, Beside Orange <br /> Hospital</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='p-3 border border-black rounded-full'>
                            <img className='w-10 h-10 mob:w-6 mob:h-6' src={call} alt='location' />
                        </div>
                        <div>
                            <p>Call us : <br />
                                +00 123-456-789 40</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='p-3 border border-black rounded-full'>
                            <img className='w-10 h-10 mob:w-6 mob:h-6' src={email} alt='location' />
                        </div>
                        <div>
                            <p>Mail us : <br />
                                demo@example.com</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='p-3 border border-black rounded-full'>
                            <img className='w-10 h-10 mob:w-6 mob:h-6' src={clock} alt='location' />
                        </div>
                        <div>
                            <p>
                                Open time : <br />
                                10:00AM – 6:00PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

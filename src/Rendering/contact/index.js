import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className='text-center py-10 bg-gray tab:py-7 mob:py-4'>
                <div className='pb-3'>
                    <a href='#' className='hover:text-grayHover ease-in-out duration-300 cursor-pointer text-sm tracking-wider font-normal'>Home /</a>
                    <a href='#' className='hover:text-grayHover ease-in-out duration-300 cursor-pointer text-sm tracking-wider font-normal'> Contact Us</a>
                </div>
                <div className='text-3xl font-bold tracking-wide'>
                    <h3>Contact Us</h3>
                </div>
            </div>
            <div className='max-w-[1400px] mx-auto my-14'>
                <div className='grid grid-cols-[870px_1fr] gap-8'>
                    <div>
                        <iframe className='w-full h-[750px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30765978.00238801!2d61.00083698256399!3d19.729113061269327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1733673400099!5m2!1sen!2sin"></iframe>
                    </div>
                    <div className='bg-gbGray p-8'>
                        <div>
                            <div className='mb-10'>
                                <h3 className='text-3xl font-semibold pb-3'>Get In Touch With Us</h3>
                                <p className='text-textGray text-sm tracking-wide'>If you wish to directly reach us, Please fill out the form below -</p>
                            </div>
                            <div>
                                <label className='text-sm text-spanGray block pb-0.5'>Your name</label>
                                <input className='w-full p-2 border border-borderGray focus:outline-none' type='text' />
                            </div>
                            <div className='mt-10'>
                                <label className='text-sm text-spanGray block pb-0.5'>Your email</label>
                                <input className='w-full p-2 border border-borderGray focus:outline-none' type='email' />
                            </div>
                            <div className='mt-10'>
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

            <div className='max-w-[1400px] mx-auto'>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

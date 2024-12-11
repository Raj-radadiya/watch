import React from 'react'
import logo from '../../Assets/Logos/logo.png';
import facebook from '../../Assets/Icon/facebook-176-svgrepo-com.svg';
import twitter from '../../Assets/Icon/twitter-logo-thin-svgrepo-com.svg';
import linkdin from '../../Assets/Icon/linkedin-161-svgrepo-com.svg';
import wifi from '../../Assets/Icon/wifi-medium-svgrepo-com.svg';
import google from '../../Assets/Icon/pajamas--google.svg';
import location from '../../Assets/Icon/carbon--location.svg';
import telephone from '../../Assets/Icon/hugeicons--telephone.svg';
import email from '../../Assets/Icon/fontisto--email.svg';
import payment from '../../Assets/Icon/paymentCard.png';
export default function Footer() {
  return (
    <div>
      <div className='border-b border-b-borderGray'>
        <div className='max-w-[1430px] mx-auto px-4 py-6 grid grid-cols-4 pt-0 pb-[60px] tab:grid-cols-2 tab:gap-y-4 mob:grid-cols-1 mob:gap-y-5 tab:py-10'>
          <div className='max-w-80'>
            <div className='w-44 h-6 flex gap-4 mb-6 mob:mb-4'>
              <img src={logo} alt='logo' />
            </div>
            <div className='text-sm text-textGray mb-6 mob:mb-4'>
              <p>Super class, cute comfortable.you can wear them with just about anytime</p>
            </div>
            <div className='flex gap-6 items-center'>
              <img className='h-4 w-4' src={facebook} alt='facebook' />
              <img className='h-5 w-5' src={twitter} alt='twitter' />
              <img className='h-4 w-4' src={linkdin} alt='linkdin' />
              <img className='h-6 w-6' src={wifi} alt='wifi' />
              <img className='h-4 w-4' src={google} alt='google' />
            </div>
          </div>
          <div className='max-w-80 mob:max-w-full'>
            <div className='text-xl mb-6 font-extrabold tracking-wide mob:mb-4'>
              <h3>Our Company</h3>
            </div>
            <div>
              <div className='mb-3 text-textGray text-sm mob:mb-2'>
                <img className='w-5 h-5 inline mr-2' src={location} alt='location' />
                <span>99 New Theme St. XY, USA 12345, Beside the Sun point land.</span>
              </div>
              <div className='mb-4 text-textGray text-sm'>
                <img className='w-5 h-5 inline mr-2' src={telephone} alt='telephone' />
                <span className='hover:text-black ease-in-out duration-300'>+00 123-456-789.</span>
              </div>
              <div className='mb-4 text-textGray text-sm '>
                <img className='w-5 h-5 inline mr-2' src={email} alt='email' />
                <span className='hover:text-black ease-in-out duration-300'>demo@example.com</span>
              </div>
            </div>
          </div>
          <div className='max-w-80'>
            <div className='text-xl mb-6 font-extrabold tracking-wide mob:mb-4'>
              <h3>Information</h3>
            </div>
            <div>
              <a href='#' className='mb-3 text-textGray text-sm hover:text-black ease-in-out duration-300 block mob:mb-2'>Return Policy</a>
              <a href='#' className='mb-3 text-textGray text-sm hover:text-black ease-in-out duration-300 block mob:mb-2'>Security</a>
              <a href='#' className='mb-3 text-textGray text-sm hover:text-black ease-in-out duration-300 block mob:mb-2'>Careers</a>
              <a href='#' className='mb-3 text-textGray text-sm hover:text-black ease-in-out duration-300 block mob:mb-2'>Sitemap</a>
            </div>
          </div>
          <div className='max-w-80'>
            <div className='text-xl mb-6 font-extrabold tracking-wide mob:mb-4'>
              <h3>Information</h3>
            </div>
            <div>
              <a href='#' className='mb-3 text-textGray text-sm hover:text-black ease-in-out duration-300 block mob:mb-2'>Press</a>
              <a href='#' className='mb-3 text-textGray text-sm hover:text-black ease-in-out duration-300 block mob:mb-2'>Careers</a>
              <a href='#' className='mb-3 text-textGray text-sm hover:text-black ease-in-out duration-300 block mob:mb-2'>Delivery</a>
              <a href='#' className='mb-3 text-textGray text-sm hover:text-black ease-in-out duration-300 block mob:mb-2'>Service</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='max-w-[1430px] mx-auto items-center pt-6 pb-24 px-4 py-6 tab:pb-12 mob:px-2 mob:pt-4 mob:pb-18'>
          <div className='flex justify-between items-center mob:flex-col mob:gap-y-4'>
            <div className='text-sm text-textGray'>
              <p>Copyright © 2022. All Rights Reserved</p>
            </div>
            <div className='flex gap-4 items-center'>
              <img src={payment} alt='payment' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import logo from '../../Assets/Logos/logo.png';
import facebook from '../../Assets/Icon/facebook-176-svgrepo-com.svg';
import twitter from '../../Assets/Icon/twitter-logo-thin-svgrepo-com.svg';
import linkdin from '../../Assets/Icon/linkedin-161-svgrepo-com.svg';
import wifi from '../../Assets/Icon/wifi-medium-svgrepo-com.svg';
import google from '../../Assets/Icon/pajamas--google.svg';
export default function Footer() {
  return (
    <div>
      <div>
        <div className='max-w-[1430px] mx-auto px-4 py-6 grid grid-cols-4 pt-[74px] pb-[60px]'>
          <div className='w-80'>
            <div className='w-44 h-6 flex gap-4 mb-6'>
              <img src={logo} alt='logo' />
            </div>
            <div className='text-sm text-textGray mb-6'>
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
          <div className='w-80'>
            <div className='text-xl mb-6 font-extrabold tracking-wide'>
              <h3>Our Company</h3>
            </div>
            <div>
              <div>
                
              </div>
            </div>
          </div>
          <div className='w-80'>

          </div>
          <div className='w-80'>

          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import logo from '../../Assets/Logos/logo.png';
import down from '../../Assets/Icon/dashicons--arrow-down-alt2.svg';
export default function Header() {
  return (
    <div>
      <section>
        <div className='border-b'>
          <div className='max-w-[1430px] mx-auto flex justify-between items-center px-4 py-2 text-center'>
            <div>
              <span>Call us : +01 123 456 789</span>
            </div>
            <div>
              <span className='text-sm pl-10'>Open Doors To A World Of Watch Fashion | Discover More</span>
            </div>
            <div className='flex gap-6'>
              <span>About Us</span>
              <span>Blog</span>
              <span>contact us</span>
              <span>FAQs</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='max-w-[1430px] mx-auto flex justify-between items-center px-4 py-4 text-center'>
          <div className='w-44 h-6'>
            <img src={logo} alt='logo' />
          </div>
          <div className='flex gap-10'>
            <div>home</div>
            <div className='flex gap-1 items-center'>shop <img src={down} alt='img' /></div>
            <div className='flex gap-1 items-center'>categories <div className='p-2 bg-green-200'>sale</div> <img src={down} alt='img' /></div>
          </div>

        </div>
      </section>
    </div>
  )
}

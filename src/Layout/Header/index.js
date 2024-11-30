import React from 'react'
import logo from '../../Assets/Logos/logo.png';
export default function Header() {
  return (
    <div>
      <section>
        <div className='max-w-[1430px] mx-auto flex justify-between items-center px-4 py-2 text-center border-b '>
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
      </section>
      <section>
        <div>
          <img src={logo} alt='logo' />
        </div>
      </section>
    </div>
  )
}

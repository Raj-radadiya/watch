import React from 'react'
import logo from '../../Assets/Logos/logo.png';
import down from '../../Assets/Icon/dashicons--arrow-down-alt2.svg';
import search from '../../Assets/Icon/search.svg';
import man from '../../Assets/Icon/person.svg';
import cart from '../../Assets/Icon/bag.svg';
import menu from '../../Assets/Icon/list.svg';
export default function Header() {
  return (
    <div>
      <section>
        <div className='border-b'>
          <div className='max-w-[1430px] mx-auto flex justify-between items-center px-4 py-2 text-center tab:justify-center'>
            <div className='tab:hidden'>
              <span>Call us : +01 123 456 789</span>
            </div>
            <div>
              <span className='text-sm mob:text-xs'>Open Doors To A World Of Watch Fashion | Discover More</span>
            </div>
            <div className='flex gap-6 tab:hidden'>
              <span>About Us</span>
              <span>Blog</span>
              <span>contact us</span>
              <span>FAQs</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='max-w-[1430px] mx-auto flex justify-between items-center px-4 py-4 text-centerc tab:px-6 mob:px-5'>
          <div className='w-44 h-6 tab:h-5 tab:flex tab:gap-4 tab:align-center'>
            <img className=' hidden tab:block h-full' src={menu} alt='menu' />
            <img src={logo} alt='logo' />
          </div>
          <div className='flex gap-10 items-center tab:hidden'>
            <div className='capitalize text-sm font-semibold relative hover:opacity-60 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out after:duration-300 hover:after:w-full'>home</div>

            <div className='flex gap-1 items-center capitalize text-sm font-semibold relative hover:opacity-60 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out after:duration-300 hover:after:w-full'>shop <img src={down} alt='img' /></div>

            <div className='flex gap-1 items-center capitalize text-sm font-semibold relative hover:opacity-60 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out after:duration-300 hover:after:w-1/2'>categories <div className='px-2 py-1 bg-blue-100 text-xs text-blue-600 uppercase'>sale</div> <img src={down} alt='img' /></div>

            <div className='flex gap-1 items-center capitalize text-sm font-semibold relative hover:opacity-60 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out after:duration-300 hover:after:w-1/2'>products <div className='px-2 py-1 bg-red-100 text-xs text-red-600 uppercase'>hot</div> <img src={down} alt='img' /></div>
            {/* 
            <div className='flex gap-1 items-center capitalize text-sm font-semibold relative hover:opacity-60 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out after:duration-300 hover:after:w-full'>top deals <img src={down} alt='img' /></div> */}

            <div className='flex gap-1 items-center capitalize text-sm font-semibold relative hover:opacity-60 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out after:duration-300 hover:after:w-full'>top deals <img src={down} alt='img' /></div>

            <div className='flex gap-1 items-center capitalize text-sm font-semibold relative hover:opacity-60 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out after:duration-300 hover:after:w-full'>elements <img src={down} alt='img' /></div>
          </div>

          <div>
            <div className='h-6 flex gap-7 items-center tab:gap-6 mob:gap-2'>
              <img className='h-4/5 hover:opacity-50' src={search} alt='search' />
              <img className='h-full hover:opacity-50' src={man} alt='man' />
              <img className='h-full hover:opacity-50' src={cart} alt='cart' />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

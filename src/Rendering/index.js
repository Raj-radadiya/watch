import React from 'react'
import Home from './Home'
import Watch from './product'
import Details from './details'
import Blog from './blog'
import Contact from './contact'
import Portfolio from './portfolio'

export default function Rendering() {
  return (
    <div>
      <Home />
      <Watch />
      <Details />
      <Blog />
      <Contact/>
      <Portfolio/>
    </div>
  )
}

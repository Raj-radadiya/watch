import React from 'react'
import WatchSlider from './slider'
import Feature from './feature'
import Category from './category'
import Offers from './offers'
import Deal from './deal'
import DiscountBanner from './discountBanner'
import Product from './product'
import Review from './review'
import Blog from './blog'
import Discount from './discount'
export default function Home() {

    return (
        <div>
            <WatchSlider />
            <Feature />
            <Category />
            <Offers />
            <Deal />
            <DiscountBanner />
            <Product />
            <Review />
            <Blog />
            <Discount />
        </div>
    )
}

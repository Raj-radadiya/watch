import React from 'react'
import DetailsHead from './detailHead'
import WatchSlider from './watchSlider'
import Productpart from './watchSlider'
import Discription from './watchDisc'

export default function Details() {
  return (
    <div>
        <DetailsHead/>
        <Productpart/>
        <Discription/>
    </div>
  )
}
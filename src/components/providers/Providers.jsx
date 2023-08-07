import React, { useState } from 'react';
import "./providers.css"
import Slider2 from '../Slider/Slider';


function Providers() {

  return (
    <div className='providerContainer'>
      <div className='textContainer'>
        <h1 className='aiText'>AI{" "}</h1>
        <h1 className=''> Service Providers</h1>
      </div>

      <div className='sliderContainer'>
        <Slider2/>
      </div>
    </div>
  )
}

export default Providers
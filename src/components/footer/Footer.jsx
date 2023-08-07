import React from 'react'
import "./footer.css"
import {BiSearchAlt} from "react-icons/bi"
import {AiOutlineMail} from "react-icons/ai"
import SemiCircle from '../semiCircle/SemiCircle'
import img  from '../../assets/green.png';


function Footer() {
  return (
    <div className='footerWrapper'>
      <div className='dotsContainer'>
        {
          [1,2,3,4,5].map(row => (
            <div className='dotsRow'>
              . . . . . . .
            </div>
          ))
        }
      </div>
      <div className='subscribeContainer'>
        <h3>Subscribe for a byte-sized monthly briefing on all things AI...</h3>
        <div className='SubscribeInput'>
          <div className='subscribeSearchBar'>
            <AiOutlineMail
            size="20px"/>
            <input 
            type="text" 
            placeholder='Input your email' 
            />
            <div className='subscribe'>
              Subscribe
            </div>
          </div>
        </div>
      </div>
      <div className='greenSemiCircle'>
        {/* <SemiCircle circleType="footerCircle"/> */}
        <image src={img} alt="green"/>
      </div>
      {/*<div className='circleCover'></div>*/}
    </div>
  )
}

export default Footer
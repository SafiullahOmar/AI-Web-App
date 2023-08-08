import React from 'react'
import "./hero.css"
import {AiOutlineArrowUp} from "react-icons/ai"
import ProgressMeter from '../progressMeter/ProgressMeter'
import BarChart from '../barChart/BarChart'
import img1 from "../../assets/SemiCircle.png";
import img2 from "../../assets/Circle 2.png";

function Hero() {
  const data = [100, 200, 150, 300, 250];
  return (
    <div className='heroContainer'>
      <div className='heroLeftContainer'>
        <div className='heroLeftTop'>
          <p className='topTitle'>The AI Consumer</p>
          <h1>Beyond the Horizon</h1>
          <p className='bottomTitle'>AI Insights for limitless Innovation</p>
        </div>

        <div className='heroLeftBottom'>
          <p>Get the seamless AI marketing automation bundle here.</p>
          <button className=''>
            Call to Action
          </button>
        </div>
      </div>

      
            <div className='heroRightContainer'>
      <img src={img1} className="semiCiclr1" alt="circle"></img>
        <div className='rightContainerPic'>
          <img src="https://blog.net10.com/site/assets/files/1952/app-connection-data-892757.822x0-is.jpg" alt="" />
        </div>

        <div className='dataLabel'>
          <div className='leftSide'>
            <span>Data labe</span>
            <span className='Rev'>$230</span>
            <div className='percentage'>
              <AiOutlineArrowUp 
              size="20px" color='red'/>
              <span className='RevPer'>5%</span>
            </div>
          </div>

          <div className='barChart'>
            <BarChart />
          </div>
        </div>

        <div className='progressMeter'>
          <ProgressMeter/>
        </div>

        <div className='rightContainerPic2'>
          <img src="https://designmodo.com/wp-content/uploads/2013/06/Charging-Animation-by-Corey-Lui.jpg" alt="" />
        </div>
        <img src={img2} className="img2" alt="circle"></img>
      </div>
    
    


    </div>
  )
}

export default Hero
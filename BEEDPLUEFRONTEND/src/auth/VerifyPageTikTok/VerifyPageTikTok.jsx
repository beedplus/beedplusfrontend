import React from 'react'
import './VerifyPageTikTok.css'
import BlackIconImage from "../../assets/beed.svg"
import WhiteIconImage from '../../assets/image 1.png'
function VerifyPageTikTok() {
  return (
    <div className='verify-page'>
      <img src={WhiteIconImage} className='white-icon-image' alt="beed logo white"/>
      <form className='form-holder'>
        <div className='black-icon-image'><img src={BlackIconImage} alt="beed logo black"/></div>
        <br/>
        <div className='verify-paragraph'>Verify your BEED+ account with Tiktok authourization</div>
          <input className="tiktiok-userame" type="text" placeholder="Enter Tiktok Username" />
        
        <div className="authorize">
            <button>Next</button>
        </div>
        <div></div>
      </form>
    </div>
  )
}

export default VerifyPageTikTok
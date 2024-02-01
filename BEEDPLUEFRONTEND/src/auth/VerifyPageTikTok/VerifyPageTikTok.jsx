import React from 'react'
import './VerifyPageTikTok.scss'
import BlackIconImage from "../../assets/beed.svg"
import WhiteIconImage from '../../assets/image 1.png'
import TiktokButtonIcon from '../../assets/Tiktok-logo-button.png'
function VerifyPageTikTok() {
  return (
    <div className='verify-page'>
      <img src={WhiteIconImage} className='white-icon-image' alt="beed logo white"/>
      <form className='form-holder'>
        <div className='black-icon-image'><img src={BlackIconImage} alt="beed logo black"/></div>
        <br/>
        <div className='verify-paragraph'>Verify your BEED+ account with Tiktok authourization</div>
        <div className="verify">
          <button> <img src={TiktokButtonIcon} className='tiktok-button-icon' alt="Tiktok Button Icon"/><p>Continue with TikTok</p></button> 
        </div>
      </form>
    </div>
  )
}

export default VerifyPageTikTok
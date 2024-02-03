import React from 'react'
import PropTypes from 'prop-types'
import VerifyPageTikTok from '../../auth/VerifyPageTikTok/VerifyPageTikTok'
import TopPage from '../../components/TopPage/TopPage'
import Advert from '../../assets/Group 90.png'
import './Home.scss'
import BottomPage from "../../components/BottomPage/Bottompage"


function LandingPage(props) {
  
   return (
    <div className='landing-Page'>
      
      <TopPage/>
       <BottomPage/>
      <img src={Advert} alt="Advert" className='advert' /> 

    </div>

  )
}

LandingPage.propTypes = {}

export default LandingPage

import React from 'react'
import VerifyPageTikTok from '../../auth/VerifyPageTikTok/VerifyPageTikTok'
import TopPage from '../../components/TopPage/TopPage'
import Advert from '../../assets/Group 90.svg'
import './Home.scss'
import BottomPage from "../../components/BottomPage/Bottompage"



// import newEnterWin from '../../assets/enter-win2.png'
// import enterwin from '../../assets/Group 263.png'
function LandingPage(props) {
  
   return (
    <div className='landing-Page'>
       
      <TopPage/>
      <BottomPage/>
      <img src={Advert} alt="Advert" className='advert' />
      {/*<img src={enterwin} alt="enterwin" className='enter-win' />*/}
      <div className='enter-win2-container'>
      <img src={newEnterWin} alt="newEnterWin" className='enter-win2' />  
      </div>
    </div>

  )
}

LandingPage.propTypes = {}

export default LandingPage

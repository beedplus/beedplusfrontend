import React from 'react'
import "./bottompage.scss"
import EnterWin from'../../../../assets/EnterWin.png'
import Beedlogo from '../../../../assets/Beed.png'
function Bottompage() {
  return (
    <div className='bottom-page'>
      <img src={Beedlogo} alt="Beedlogo" className='beed-logo' />  
      <img src={EnterWin} alt="EnterWin" className='enter-win' />  

    </div>
  )
}

export default Bottompage
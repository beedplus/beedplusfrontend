import React from 'react'
import "./bottompage.scss"
import EnterWin from'../../assets/Group 263.png'
import Beedlogo from '../../assets/Beed.png'
import ChallangeCardlist from '../ChallangeCardList/ChallangeCardlist'
import enterWinTwo from '.././../assets/Group 175.svg'
import {Link} from "react-router-dom";
import {FaQuestionCircle} from "react-icons/fa";
function Bottompage() {
  return (
    <div className='bottom-page'>
      <ChallangeCardlist/>
        <div className="question-circle">
            <Link to="/faq" > <FaQuestionCircle /></Link>
        </div>
      <img src={Beedlogo} alt="Beedlogo" className='beed-logo' />
      {/*<img src={EnterWin} alt="EnterWin" className='enter-win' />*/}


    </div>
  )
}

export default Bottompage
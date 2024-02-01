import React from 'react'
import './ChallangeCardlist.scss'
import ChallangeCard from '../ChallangeCard/challangeCard'
function ChallangeCardlist() {
  return (
    <div className='challange-card-list'>
        <p className='latest'>LATEST CAMPAIGNS</p>
        <ChallangeCard/>
    </div>
  )
}

export default ChallangeCardlist
import React from 'react'
import './TopPage.scss'
import PlayIconOne from '../../../../assets/image 378.png'
import spreadPics from '../../../../assets/The Pics.png'
import PlayIconTwo from '../../../../assets/playicon2.png'
function TopPage() {
  return (
    <div className='top-page'>
        <div className='heading'>
          <span>
            Upload 5 Vide
          </span>
          <img src={PlayIconTwo} alt="PlayIconTwo" className='play-icon-two' />
          <span>s</span>
          <br/>
          <span className='header-secondline-styling'>and Get $10  </span>
          <br/>
          <span className='header-thirdline-styling'>Instantly</span>
        </div>
        <img src={PlayIconOne} alt="PlayIconOne" className='play-icon-one' />
        <p>Participate in Challenges to win quick cash</p>
        <img src={spreadPics} alt="spreadPics" className='spread-pics' />
    </div>
  )
}

export default TopPage
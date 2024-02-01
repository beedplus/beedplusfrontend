import './TopPage.scss'
import PlayIconOne from '../../../../assets/image 378.png'
import spreadPics from '../../../../assets/The Pics.png'
import PlayIconTwo from '../../../../assets/playicon2.png'
import Faces from '../../../../assets/Group 164.png'
import PlayIconThree from '../../../../assets/image 377.png'
function TopPage() {
  return (
    <div className='top-page'>
      
        <img src={PlayIconOne} alt="PlayIconOne" className='play-icon-one' /> 
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
        <div className='butt-para-spreadpics'>
        <div className='para-butt'>
          <p className='para'>Participate in Challenges to win quick cash</p>
          <button> SIGN UP NOW </button>
          <img src={Faces} alt="Faces" className='faces' /> 
          <img src={PlayIconThree} alt="play-icon-three" className='play-icon-three' /> 
        </div>
        <img src={spreadPics} alt="spreadPics" className='spread-pics' />
        </div>

       
    </div>
  )
}

export default TopPage
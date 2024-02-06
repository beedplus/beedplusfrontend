import './TopPage.scss'
import PlayIconOne from '../../assets/image 378.svg'
import spreadPics from '../../assets/Group 165.svg'
import PlayIconTwo from '../../assets/playicon2.svg'
import Faces from '../../assets/Group 164.svg'
import PlayIconThree from '../../assets/Group 286.png'
import Money from '../../assets/MONEY.svg'
import money2 from '../../assets/MONEY2.svg'
function TopPage() {
  return (
    <div className='top-page'>
        <img src={Money} alt="PlayIconOne" className='money' />
        <img src={money2} alt="PlayIconOne" className='money2' /> 
        <img src={PlayIconOne} alt="PlayIconOne" className='play-icon-one' /> 
        <div className='heading'>
          <span>
            UPLOAD 5 VIDE
          </span>
          <img src={PlayIconTwo} alt="PlayIconTwo" className='play-icon-two' />
          <span>O</span>
          <br/>
          <span className='header-secondline-styling'>AND GET $10  </span>
          <br/>
          <span className='header-thirdline-styling'>INSTANTLY</span>
        </div>
        <div className='butt-para-spreadpics'>
        <div className='para-butt'>
          <p className='para'>Participate in Challenges to win quick cash</p>
          <button className='sign-up-now'> SIGN UP NOW </button>
          <img src={Faces} alt="Faces" className='faces' /> 
          <img src={PlayIconThree} alt="play-icon-three" className='play-icon-three' /> 
        </div>
        <img src={spreadPics} alt="spreadPics" className='spread-pics' />
        </div>

       
    </div>
  )
}

export default TopPage
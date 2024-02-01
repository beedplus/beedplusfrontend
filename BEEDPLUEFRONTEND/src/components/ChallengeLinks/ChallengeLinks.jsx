import React, { useState, useEffect} from 'react';
import '../ChallengeLinks/ChallengeLinks.css';
import challengeImage from '../../assets/Rectangle 52.png';
import tiktokImage from '../../assets/Ellipse 7.png';
//import videoContent from '../../assets/Rectangle 63.png'
import { BsCaretDownFill } from 'react-icons/bs';
import { FaCircleCheck } from "react-icons/fa6";
import { useGetSingleCampaign } from '../../hooks/useGetSingleCampaign';

//import caretDown from '../../assets/Polygon 1.png';

const ChallengeLinks = () => {
  const [activeTab, setActiveTab] = useState(true);
  const [height, setHeight] = useState(false)
  const [divCount, setDivCount] = useState(0);

  function toggleTab() {
    setActiveTab(!activeTab);
  }

  function adjustHeight(){
    setHeight(!height)
  }

  const addDiv = () => {
    setDivCount(divCount + 1);
  };

  let {error, isPending, documents} = useGetSingleCampaign()

  useEffect(()=>{
    
    console.log(documents)
  },[documents])



  return (
    
    <section className='challenge-section'>
      <div className="challenge-info">
        <img src={challengeImage} className='bcg-image' alt='#' />
        <div className='challenge-info-overlay'>
          <div className="challenge-overlay">
            <div>
              <img className='tiktok-icon' src={tiktokImage} alt='tiktok-icon' />
            </div>
            <div className="challenge-info-detail">
              <p className="challenge-info-hashtag">#Pourme Challenge</p>
              <span className='challenge-artiste'>Davido</span>
            </div>
          </div>
        
            <button className='track-button'>
                <a>USE TRACK</a>
            </button>
         
        </div>
      </div>

      <div className="price-container">
        <div className="fund-tracker">
          <div className="fund-measure"></div>
        </div>
        <div className="fund-generated">
          <span>$1000</span> remaining
        </div>
      </div>

      <div className="button-section">
        <div className="button-container">
          <button onClick={() => setActiveTab(true)} className={`black ${activeTab ? 'active' : ''}`}>INSTRUCTIONS</button>
          <button onClick={() => setActiveTab(false)} className={`grey ${!activeTab ? 'active' : ''}`}>SUBMISSION</button>
        </div>
      </div>

      <div className='challenge-requirements'>
        {activeTab ? (
          <div className="instruction active">
            <header>Requirements</header>
            <ul>
              <li>Pick a challenge task you are interested in</li>
              <li>Create 5 videos with the song and post it</li>
              <li>The more you create, the more you win!</li>
            </ul>
            <header>Descriptions</header>
            <ul>
              <li>Pick a challenge task you are interested in</li>
              <li>Create 5 videos with the song and post it</li>
              <li>The more you create, the more you win!</li>
            </ul>
            <header>Video post</header>
            <img className='challenge-video' src='' alt='#'/>
            <button className='claim-button'>CLAIM</button>
            <footer className='section-footer'>Copyright BEED+ 2024 Company. All rights reserved</footer>
          </div>
        ) : (
          <>
          <button onClick={addDiv}>Add Div</button>
          {[...Array(divCount)].map((_, index) => (
                <div key={index} className={`submission active ${height ? 'height' : ''}`}  onClick={() => adjustHeight()}>
            <div className="submission-header">
              <header>SUBMISSION {index+1}</header>
              <span>
                <BsCaretDownFill className='caret-down'/>
              </span>
            </div>

            <div className='video-link-container'>
              <a className='video-link' href='https://tiktok.com/johndoe2385331'>  https://tiktok.com/johndoe2385331</a>
              <FaCircleCheck className='check'/>
            </div>

            <div className='video-link-container'>
              <a className='video-link' href='https://tiktok.com/johndoe2385331'>  https://tiktok.com/johndoe2385331</a>
              <FaCircleCheck className='check'/>
            </div>

            <div className='video-link-container'>
              <a className='video-link' href='https://tiktok.com/johndoe2385331'>  https://tiktok.com/johndoe2385331</a>
              <FaCircleCheck className='check'/>
            </div>

            <div className='video-link-container'>
              <a className='video-link' href='https://tiktok.com/johndoe2385331'>  https://tiktok.com/johndoe2385331</a>
              <FaCircleCheck className='check'/>
            </div>

            <div className='video-link-container'>
              <a className='video-link' href='https://tiktok.com/johndoe2385331'>  https://tiktok.com/johndoe2385331</a>
              <FaCircleCheck className='check'/>
            </div>

            <div className='video-link-container'>
              <a className='video-link' href='https://tiktok.com/johndoe2385331'>  https://tiktok.com/johndoe2385331</a>
              <FaCircleCheck className='check'/>
            </div>
          </div>
          ))}
         
          </>
         
        )}
      </div>
    </section>
  );
}

export default ChallengeLinks
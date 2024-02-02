import React, { useState, useEffect, useRef } from "react";
import "../ChallengeLinks/ChallengeLinks.css";
import challengeImage from "../../assets/Rectangle 52.png";
import tiktokImage from "../../assets/Ellipse 7.png";
//import videoContent from '../../assets/Rectangle 63.png'
import { BsCaretDownFill } from "react-icons/bs";
import { FaClock, FaPause, FaPlay } from "react-icons/fa6";
import { useGetSingleCampaign } from "../../hooks/useGetSingleCampaign";
import { useGetAllCampaign } from "../../hooks/useGetAllCampaign";
import { useSubmit } from "../../hooks/useSubmit";
import { useGetSubmission } from "../../hooks/useGetSubmission";
//import caretDown from '../../assets/Polygon 1.png';
const id = "65ba75b9bc4134b7fb72419f";
const ChallengeLinks = () => {
  const [activeTab, setActiveTab] = useState(true);
  const [height, setHeight] = useState(false);
  const { submit } = useSubmit();
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");
  const [link3, setLink3] = useState("");
  const [link4, setLink4] = useState("");
  const [Link5, setLink5] = useState("");

  // const [loading, setLoading] = useState(false)
  //const [divCount, setDivCount] = useState(0);

  function toggleTab() {
    setActiveTab(!activeTab);
  }

  function adjustHeight() {
    setHeight(!height);
  }

  /*const addDiv = () => {
    setDivCount(divCount + 1);
  };*/

  let { error, isPending, documents } = useGetSingleCampaign(id);

  let {
    error: err,
    isPending: ispend,
    fetchSubmission,
    documents: doc,
  } = useGetSubmission();

  // let {error, isPending, documents} = useGetAllCampaign()

  useEffect(() => {
    console.log(documents.data);
  }, [documents]);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [link, setlink] = useState("");

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    submit(id, link1, link2, link3, link4, Link5);
  };
  useEffect(() => {
    if (!activeTab) {
      console.log("active");
      fetchSubmission(id);
    }
  }, [activeTab]);
  return (
    documents &&
    documents.data && (
      <section className="challenge-section">
        <div className="challenge-info">
          <img src={challengeImage} className="bcg-image" alt="#" />
          <div className="challenge-info-overlay">
            <div className="challenge-overlay">
              <div>
                <img
                  className="tiktok-icon"
                  src={tiktokImage}
                  alt="tiktok-icon"
                />
              </div>
              <div className="challenge-info-detail">
                <p className="challenge-info-hashtag">#Pourme Challenge</p>
                <span className="challenge-artiste">Davido</span>
              </div>
            </div>

            <button className="track-button">
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
            <button
              onClick={() => setActiveTab(true)}
              className={`black ${activeTab ? "active" : "unactive"}`}
            >
              INSTRUCTIONS
            </button>
            <button
              onClick={() => setActiveTab(false)}
              className={`grey ${!activeTab ? "active" : "unactive"}`}
            >
              SUBMISSION
            </button>
          </div>
        </div>

        <div className="challenge-requirements">
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

              <div
                className="challenge-video-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setShowButton(!showButton)}
              >
                <video
                  ref={videoRef}
                  className="challenge-video"
                  onClick={togglePlayPause}
                >
                  <source
                    src={documents.data.demo_video}
                    type="video/mp4"
                  ></source>
                </video>

                <div className="challenge-video-overlay">
                  <div className="control-button" onClick={togglePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </div>
                </div>
              </div>
              <button className="claim-button">CLAIM</button>
              <footer className="section-footer">
                Copyright BEED+ 2024 Company. All rights reserved
              </footer>
            </div>
          ) : (
            <>
              <div className={`submission active ${height ? "height" : ""}`}>
                <div
                  className="submission-header"
                  onClick={() => adjustHeight()}
                >
                  <p>SUBMISSION 1</p>
                  <span>
                    <BsCaretDownFill className="caret-down" />
                  </span>
                </div>
                <form onSubmit={handleSubmit} id="submit">
                  <div className="video-link-container">
                    <input
                      className="video-link"
                      type="text"
                      value={link1}
                      onChange={(e) => setLink1(e.target.value)}
                    />
                    <FaClock className="check" />
                  </div>

                  <div className="video-link-container">
                    <input
                      className="video-link"
                      type="text"
                      value={link2}
                      onChange={(e) => setLink2(e.target.value)}
                    />
                    <FaClock className="check" />
                  </div>

                  <div className="video-link-container">
                    <input
                      className="video-link"
                      type="text"
                      value={link3}
                      onChange={(e) => setLink3(e.target.value)}
                    />
                    <FaClock className="check" />
                  </div>

                  <div className="video-link-container">
                    <input
                      className="video-link"
                      type="text"
                      value={link4}
                      onChange={(e) => setLink4(e.target.value)}
                    />
                    <FaClock className="check" />
                  </div>

                  <div className="video-link-container">
                    <input
                      className="video-link"
                      type="text"
                      value={Link5}
                      onChange={(e) => setLink5(e.target.value)}
                    />
                    <FaClock className="check" />
                  </div>

                  <button className="submit-button" type="submit" id="submit">
                    SUBMIT LINKS
                  </button>
                </form>
              </div>

              <button className="claim-button">CLAIM</button>
              <footer className="section-footer">
                Copyright BEED+ 2024 Company. All rights reserved
              </footer>
            </>
          )}
        </div>
      </section>
    )
  );
};

export default ChallengeLinks;

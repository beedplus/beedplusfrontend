import { useState, useEffect, useRef } from "react";
import "../ChallengeLinks/ChallengeLinks.css";
import challengeImage from "../../assets/Rectangle 52.png";
import tiktokImage from "../../assets/Ellipse 7.png";
//import videoContent from '../../assets/Rectangle 63.png'
import { BsCaretDownFill } from "react-icons/bs";
import { FaClock, FaPause, FaPlay } from "react-icons/fa6";
import { useGetSingleCampaign } from "../../hooks/useGetSingleCampaign";
import loading from "../../assets/loading.gif";
// import { useGetAllCampaign } from "../../hooks/useGetAllCampaign";

import { useUpdateClaimStatus } from "../../hooks/useUpdateClaimStatus";
import { useGetSubmission } from "../../hooks/useGetSubmission";
import Submission from "../Submission";
import { nanoid } from "nanoid";
import { usebackendStore } from "../../store/store";
//import caretDown from '../../assets/Polygon 1.png';
// const id = "65bd61e95032a9f093b2d775";
const ChallengeLinks = () => {
  const [activeTab, setActiveTab] = useState(true);
  const id = usebackendStore((state) => state.ChallengeId);
  const { updateClaim, isPend, success } = useUpdateClaimStatus();
  // const [ID, setID] = useState(null);
  // const [loading, setLoading] = useState(false)
  //const [divCount, setDivCount] = useState(0);

  /*const addDiv = () => {
    setDivCount(divCount + 1);
  };*/

  let { error, isPending, documents } = useGetSingleCampaign(id);

  let { document, refetch } = useGetSubmission(id);

  //   const checkFullyVerified = [];
  //   if (document.data) {
  //     document.data.attempts.map(
  // (attempt, i) => (checkFullyVerified[i] = attempt.["link"+(1+i)].status)
  //     );
  //   }

  // let {error, isPending, documents} = useGetAllCampaign()

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [link, setlink] = useState("");
  const [isAllLinksVerified, setIsAllLinksVerified] = useState(false);
  const [IsClaimed, setIsClaimed] = useState(false);
  // useEffect(() => {
  //   // Check if every link in every submission is 'verified'
  //   if (document.data && document.data?.attempts?.length !== 0) {
  //     const allLinksVerified = document.data.attempts.every((attempt) =>
  //       handleCheckPend(
  //         attempt.link1.status,
  //         attempt.link2.status,
  //         attempt.link3.status,
  //         attempt.link4.status,
  //         attempt.link5.status
  //       )
  //     );
  //     setIsAllLinksVerified(allLinksVerified);
  //     console.log("isallverified", isAllLinksVerified);
  //   }
  // }, [document, isAllLinksVerified]);
  const accessToken = usebackendStore((state) => state.accessToken);

  // useEffect(() => {
  //   console.log(document);
  // }, [document]);
  useEffect(() => {
    // Check if every link in every submission is 'verified'

    if (
      document.message !== "No existing submission" &&
      document?.data?.attempts?.length !== 0
    ) {
      const allLinksVerified = document.data?.attempts.every((attempt) =>
        handleCheckPend(
          attempt.link1.status,
          attempt.link2.status,
          attempt.link3.status,
          attempt.link4.status,
          attempt.link5.status
        )
      );

      // Use a functional update to ensure the state is updated correctly
      setIsAllLinksVerified((prevIsAllLinksVerified) =>
        prevIsAllLinksVerified !== allLinksVerified
          ? allLinksVerified
          : prevIsAllLinksVerified
      );

      // console.log("isallverified", allLinksVerified);x
    }
  }, [document]);

  useEffect(() => {
    if (!activeTab) {
      // console.log("is empty", document?.data?.attempts?.length === 0);
      // console.log("all verified", isAllLinksVerified);
      // console.log(document);
    }
  }, [document, activeTab, isAllLinksVerified]);

  useEffect(() => {
    if (documents && document.data) {
      console.log(document, 'documents');
      // videoRef.current.src = documents.data.demo_video;
    }
  }, [document]);

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

  const handleCheckPend = (l1, l2, l3, l4, l5) => {
    const test = [
      l1 === "verified",
      l2 === "verified",
      l3 === "verified",
      l4 === "verified",
      l5 === "verified",
    ];

    const allVerified = test.every((value) => value);
    return allVerified;
  };

  const handleClaim = async () => {
    setIsClaimed(true);
    const lastItem = document.data.attempts[document.data.attempts.length - 1];
    // console.log(documents.);
    await updateClaim(id, "submitted", lastItem._id, documents.data._id);
  };

  return (
    <div>
      {isPending && (
        <img
          src={loading}
          alt="Loading Animation"
          style={{
            width: "80px",
            height: "70px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        />
      )}
      {error && <p>{error}</p>}
      {documents && documents.data && (

          <div className="challenge-page-desktop">
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
                      className={   `black ${activeTab ? "active" : "unactive"} clb` }
                  >
                    INSTRUCTIONS
                  </button>
                  <button
                      onClick={() => setActiveTab(false)}
                      className={`grey ${!activeTab ? "active" : "unactive"} cld`}
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
                      <header>Video post </header>

                      <div
                          className="challenge-video-container"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          onClick={() => {
                            setShowButton(!showButton);
                          }}
                      >
                        <video ref={videoRef}>
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
                      {/* <button className="claim-button">CLAIM</button>
              <footer className="section-footer">
                Copyright BEED+ 2024 Company. All rights reserved
              </footer> */}
                    </div>
                ) : document.message !== "No existing submission" &&
                document?.data?.attempts?.length > 0 ? (
                    document.data.attempts.map((attempt, i) => (
                        <Submission
                            id={id}
                            key={attempt._id}
                            index={i}
                            key2={attempt._id}
                            link1={attempt.link1}
                            link2={attempt.link2}
                            link3={attempt.link3}
                            link4={attempt.link4}
                            link5={attempt.link5}
                            claimStatus={attempt.claimStatus}
                            isPending={handleCheckPend(
                                attempt.link1.status,
                                attempt.link2.status,
                                attempt.link3.status,
                                attempt.link4.status,
                                attempt.link5.status
                            )}
                            SubmissionId={document.data._id}
                        />
                    ))
                ) : (
                    <div>
                      {/* Render your template for when document.data.length is 0 */}
                      {/* <p>No attempts available.</p> */}
                      {/* <Submission id={id} key={nanoid()} index={0} /> */}
                    </div>
                )}
                <button
                    className="claim-button"
                    disabled={isAllLinksVerified ? false : true}
                    style={{
                      backgroundColor: isAllLinksVerified ? "green" : "gray", // Example background color
                      color: isAllLinksVerified ? "white" : "black", // Example text color
                      // Add any other styles you want to conditionally apply
                    }}
                    onClick={() => handleClaim()}
                >
                  CLAIM
                </button>

                <footer className="section-footer">
                  Copyright BEED+ 2024 Company. All rights reserved
                </footer>
              </div>
            </section>
          </div>

      )}
    </div>
  );
};

export default ChallengeLinks;

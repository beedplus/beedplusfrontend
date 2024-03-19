import { useState, useEffect, useRef } from "react";
import "../ChallengeLinks/ChallengeLinks.css";
import challengeImage from "../../assets/Rectangle 52.png";
import tiktokImage from "../../assets/Ellipse 7.png";
//import videoContent from '../../assets/Rectangle 63.png'
import { BsCaretDownFill } from "react-icons/bs";
import { FaClock, FaPause, FaPlay } from "react-icons/fa6";
import "react-toastify/dist/ReactToastify.css";
import { useGetSingleCampaign } from "../../hooks/useGetSingleCampaign";
import loading from "../../assets/loading.gif";
// import { useGetAllCampaign } from "../../hooks/useGetAllCampaign";
// import { useGetSinCampaign } from "../../hooks/useGetsinCampaign";
import { useGetSinCampaign } from "../../hooks/useGetSinCampaign"
import { useUpdateClaimStatus } from "../../hooks/useUpdateClaimStatus";
import { useGetSubmission } from "../../hooks/useGetSubmission";
import Submission from "../Submission";
import { nanoid } from "nanoid";
import { usebackendStore } from "../../store/store";
import { toast } from "react-toastify";
import { FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import howitworks from "../../assets/howitworks.png";

//import caretDown from '../../assets/Polygon 1.png';
// const id = "65bd61e95032a9f093b2d775";
const ChallengeLinks = () => {
  const setActivetab = usebackendStore((state) => state.setActiveTab);
  const activetab = usebackendStore((state) => state.activeTab);
  const [activeTab, setActiveTab] = useState(activetab);
  useEffect(() => {
    // localStorage.setItem("activeTab", activeTab);
    setActivetab(activeTab);
  }, [activeTab, setActivetab]);

  const id = usebackendStore((state) => state.ChallengeId);
  const {
    updateClaim,
    isPending: isPend,
    success,
    error: err,
  } = useUpdateClaimStatus();
  const { documents: doc } = useGetSinCampaign(id);
  // const [ID, setID] = useState(null);
  // const [loading, setLoading] = useState(false)
  //const [divCount, setDivCount] = useState(0);

  /*const addDiv = () => {
    setDivCount(divCount + 1);
  };*/

  let { error, isPending, documents } = useGetSingleCampaign(id);

  let { document, isPending: isp } = useGetSubmission(id);

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
  useEffect(() => {
    if (success) {
      toast.success("request submitted");
      window.location.reload();
    }
    if (err) {
      toast.error(err);
    }
  }, [success, err]);
  useEffect(() => {
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
  // useEffect(() => {
  //   if (!activeTab) {
  //     // console.log("is empty", document?.data?.attempts?.length === 0);
  //     // console.log("all verified", isAllLinksVerified);
  //     // console.log(document);
  //   }
  // }, [document, activeTab, isAllLinksVerified]);

  // useEffect(() => {
  //   // <<<<<<< gori
  //   //     if (!activeTab) {
  //   //       // console.log("is empty", document?.data?.attempts?.length === 0);
  //   //       // console.log("all verified", isAllLinksVerified);
  //   //       // console.log(document);
  //   //     }
  //   //   }, [document, activeTab, isAllLinksVerified]);

  //   //   useEffect(() => {
  //   //     if (documents && document.data) {
  //   //       console.log(document, 'documents');
  //   //       // videoRef.current.src = documents.data.demo_video;
  //   //     }
  //   //   }, [document]);
  //   // =======
  //   console.log(doc, "hell");
  // }, [doc]);

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
  const handleCheckActive = (l1, l2, l3, l4, l5) => {
    const test = [
      l1 !== "verified",
      l2 !== "verified",
      l3 !== "verified",
      l4 !== "verified",
      l5 !== "verified",
    ];
    const anyNotVerified = test.some((value) => value);
    return anyNotVerified;
  };

  const handleClaim = async () => {
    setIsClaimed(true);

    const lastItem = document.data.attempts[document.data.attempts.length - 1];
    // console.log(documents.);
    await updateClaim(id, "submitted", lastItem._id, documents.data._id);
    // if (success) {
    //   toast.success("request submitted");
    //   window.location.reload();
    // }
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
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: "250px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        />
      )}
      {error && <p>{error}</p>}
      {doc && doc.data && (
        <div className="challenge-page-desktop">
          <section className="challenge-section">
            <div className="challenge-info">
              <img src={doc.data.image} className="bcg-image" alt="#" />
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
                    <p className="challenge-info-hashtag">{doc.data.name}</p>
                    <span className="challenge-artiste">
                      {doc.data.artiste}
                    </span>
                  </div>
                </div>

                <button className="track-button">
                  <a href={doc.data.sound}>USE TRACK</a>
                </button>
              </div>
            </div>

            <div className="price-container">
              <div className="fund-tracker">
                <div className="fund-measure"></div>
              </div>
              <div className="fund-generated">
                <span>
                  $
                  {doc.data.funds.startingAmount - doc.data.funds.currentAmount}
                </span>{" "}
                remaining
              </div>
            </div>
            <div className="button-section">
              <div className="button-container">
                <button
                  onClick={() => setActiveTab(true)}
                  className={"black  clb"}
                >
                  <p className="showered">INSTRUCTIONS</p>
                </button>
                <button
                  onClick={() => setActiveTab(false)}
                  className="grey cld"
                >
                  <p className="showered">SUBMISSION</p>
                </button>
                <div
                  className={` ${!activeTab ? "hover-button-active" : "hover-button"
                    }`}
                ></div>
              </div>
            </div>

            <div className="challenge-requirements">
              {activeTab ? (
                <div className="instruction active">
                  <header>Requirements</header>
                  <ul>
                    {doc.data.requirements.length !==
                      doc.data.requirements.map((data) => (
                        <li key={nanoid()}>{data}</li>
                      ))}
                    {doc.data.requirements.length === 0 && (
                      <>
                        <li>Pick a challenge task you are interested in</li>
                        <li>Create 5 videos with the song and post it</li>
                      </>
                    )}
                  </ul>
                  <header>Descriptions</header>
                  <ul>
                    {/* <li>Pick a challenge task you are interested in</li> */}
                    {/* <li>Create 5 videos with the song and post it</li> */}
                    <li>{doc.data.description}</li>
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
                    <video
                      ref={videoRef}
                      className="challenge-video-container-video"
                      controls
                      autoPlay
                      playsInline
                    >
                      <source
                        src={doc.data.demo_video}
                        type="video/mp4"
                      ></source>
                    </video>

                    <div className="challenge-video-overlay">
                      <div className="control-button" onClick={togglePlayPause}>
                        {isPlaying ? <FaPause /> : <FaPlay />}
                      </div>
                    </div>
                  </div>
                  <button
                    className="enter-challenge"
                    onClick={() => setActiveTab(false)}
                  >
                    Enter challenge
                  </button>
                  {/* <footer className="section-footer">
                Copyright BEED+ 2024 Company. All rights reserved
              </footer>  */}
                  <div className="question-circle">
                    <Link to="/faq">
                      {" "}
                      <img src={howitworks} alt="how it works image" />{" "}
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  {" "}
                  {isp && (
                    <img
                      src={loading}
                      alt="Loading Animation"
                      style={{
                        width: "80px",
                        height: "70px",
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        marginTop: "20px",
                        marginRight: "auto",
                        marginLeft: "auto",
                      }}
                    />
                  )}
                  {document.data &&
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
                        isActive={handleCheckActive(
                          attempt.link1.status,
                          attempt.link2.status,
                          attempt.link3.status,
                          attempt.link4.status,
                          attempt.link5.status
                        )}
                      />
                    ))}
                  <button
                    className="claim-button"
                    disabled={
                      document.data?.attempts[document.data.attempts.length - 1]
                        .claimStatus === "submitted" || !isAllLinksVerified
                    }
                    style={{
                      backgroundColor:
                        document.data?.attempts[
                          document.data.attempts.length - 1
                        ].claimStatus === "submitted"
                          ? "gray"
                          : isAllLinksVerified
                            ? "green"
                            : "gray",
                      color:
                        document.data?.attempts[
                          document.data.attempts.length - 1
                        ].claimStatus === "submitted"
                          ? "black"
                          : isAllLinksVerified
                            ? "white"
                            : "black",
                      // Add any other styles you want to conditionally apply
                    }}
                    onClick={() => handleClaim()}
                  >
                    {isPend
                      ? "Loading"
                      : document.data?.attempts[
                        document.data.attempts.length - 1
                      ].claimStatus === "submitted"
                        ? "Claim has been requested"
                        : "CLAIM"}
                  </button>
                </>
              )}

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

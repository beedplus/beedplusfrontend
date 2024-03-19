import { useState, useEffect } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
import { useSubmit } from "../hooks/useSubmit";
import { FaCheckCircle } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";
import howitworks from "../assets/howitworks.png";
import "../../src/components/ChallengeLinks/ChallengeLinks.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loading from "../assets/loading.gif";



export default function Submission({
  id,
  index,
  key2,
  link1: li1,
  link2: li2,
  link3: li3,
  link4: li4,
  link5: li5,
  claimStatus,
  isPending,
  SubmissionId,
  isActive,
}) {
  const [link1, setLink1] = useState(li1?.url);
  const [link2, setLink2] = useState(li2?.url);
  const [link3, setLink3] = useState(li3?.url);
  const [link4, setLink4] = useState(li4?.url);
  const [link5, setLink5] = useState(li5?.url);
  const [height, setHeight] = useState(false);
  const [message, setMessage] = useState("");
  const checkEligibility = (links) => {
    const regex = /^https:\/\/www\.tiktok\.com\/@(?:\w+\/)?video\/\d+/;

    const invalidLinks = [];

    links.forEach((link, index) => {
      if (!regex.test(link)) {
        invalidLinks.push({ position: index + 1, link });
      }
    });

    return invalidLinks;
  };
  const { updateAttempts, isPending: isPend, error, success } = useSubmit();

  useEffect(() => {}, [isPend, success]);
  function adjustHeight() {
    setHeight(!height);
    2;
  }
  useEffect(() => {
    if (isActive) {
      adjustHeight();
    }
  }, [isActive]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const invalidLinks = checkEligibility([link1, link2, link3, link4, link5]);

    if (claimStatus === "pending") {
      if (invalidLinks.length === 0) {
        await updateAttempts(
          id,
          link1,
          link2,
          link3,
          link4,
          link5,
          key2,
          SubmissionId
        );
        // Success state is now handled inside the useSubmit hook
      } else {
        invalidLinks.forEach(({ position }) => {
          toast.error(`Link ${position} is invalid`);
        });
      }
    }
  };

  useEffect(() => {
    if (success) {
      window.location.reload();
    }
  }, [success]);
  return (
    <div key={key2}>
      <div className={`submission active ${height ? "height" : ""}`}>
        <div
          className="submission-header"
          onClick={() => {
            adjustHeight();
          }}
        >
          <p>SUBMISSION {index + 1}</p>
          <span>
            <BsCaretDownFill className="caret-down" />
          </span>
        </div>
        <form onSubmit={handleSubmit} id="submit">
          <div className="video-link-container">
            <div className="video-link-container-div">
              <input
                  className="video-link"
                  type="text"
                  value={link1}
                  onChange={(e) => setLink1(e.target.value)}
                  onFocus={(e) => {
                    if (e.target.value === "Your video url") {
                      setLink1("");
                    }
                  }}
                  disabled={
                      li1?.status === "verified" || li1?.status === "submitted"
                  }
                  required={true}
              />

              {li1?.status === "rejected" && <p>{li1?.reason}</p>}
            </div>


            {li1?.status === "verified" ? (
              <FaCheckCircle
                className="submission-icons"
                style={{ color: "green" }}
              />
            ) : li1?.status === "rejected" ? (
              <GiCancel className="submission-icons" style={{ color: "red" }} />
            ) : (
              <FaClock className="submission-icons" style={{ color: "gray" }} />
            )}
          </div>

          <div className="video-link-container">
            <div className="video-link-container-div">
              <input
                  className="video-link"
                  type="text"
                  value={link2}
                  onChange={(e) => setLink2(e.target.value)}
                  disabled={
                      li2?.status === "verified" || li2?.status === "submitted"
                  }
                  required={true}
                  onFocus={(e) => {
                    if (e.target.value === "Your video url") {
                      setLink2("");
                    }
                  }}
              />
              {li2?.status === "rejected" && <p className="rejection-reason">{li2?.reason}</p>}
            </div>

            {li2?.status === "verified" ? (
              <FaCheckCircle
                className="submission-icons"
                style={{ color: "green" }}
              />
            ) : li2?.status === "rejected" ? (
              <GiCancel className="submission-icons" style={{ color: "red" }} />
            ) : (
              <FaClock className="submission-icons" style={{ color: "gray" }} />
            )}
          </div>

          <div className="video-link-container">
            <div className="video-link-container-div">
              <input
                  className="video-link"
                  type="text"
                  value={link3}
                  onChange={(e) => setLink3(e.target.value)}
                  disabled={
                      li3?.status === "verified" || li3?.status === "submitted"
                  }
                  required={true}
                  onFocus={(e) => {
                    if (e.target.value === "Your video url") {
                      setLink3("");
                    }
                  }}
              />
              {li3?.status === "rejected" && <p className="rejection-reason">{li3?.reason}</p>}
            </div>

            {li3?.status === "verified" ? (
              <FaCheckCircle
                className="submission-icons"
                style={{ color: "green" }}
              />
            ) : li3?.status === "rejected" ? (
              <GiCancel className="submission-icons" style={{ color: "red" }} />
            ) : (
              <FaClock className="submission-icons" style={{ color: "gray" }} />
            )}
          </div>

          <div className="video-link-container">
            <div className="video-link-container-div">
              <input
                  className="video-link"
                  type="text"
                  value={link4}
                  onChange={(e) => setLink4(e.target.value)}
                  disabled={
                      li4?.status === "verified" || li4?.status === "submitted"
                  }
                  required={true}
                  onFocus={(e) => {
                    if (e.target.value === "Your video url") {
                      setLink4("");
                    }
                  }}
              />
              {li4?.status === "rejected" && <p className="rejection-reason">{li4?.reason}</p>}
            </div>

            {li4?.status === "verified" ? (
              <FaCheckCircle
                className="submission-icons"
                style={{ color: "green" }}
              />
            ) : li4?.status === "rejected" ? (
              <GiCancel className="submission-icons" style={{ color: "red" }} />
            ) : (
              <FaClock className="submission-icons" style={{ color: "gray" }} />
            )}
          </div>

          <div className="video-link-container">
            <div className="video-link-container-div">
              <input
                  className="video-link"
                  type="text"
                  value={link5}
                  onChange={(e) => setLink5(e.target.value)}
                  disabled={
                      li5?.status === "verified" || li5?.status === "submitted"
                  }
                  required={true}
                  onFocus={(e) => {
                    if (e.target.value === "Your video url") {
                      setLink5("");
                    }
                  }}
              />
              {li5?.status === "rejected" && <p className="rejection-reason">{li5?.reason}</p>}
            </div>

            {li5?.status === "verified" ? (
              <FaCheckCircle
                className="submission-icons"
                style={{ color: "green" }}
              />
            ) : li5?.status === "rejected" ? (
              <GiCancel className="submission-icons" style={{ color: "red" }} />
            ) : (
              <FaClock className="submission-icons" style={{ color: "gray" }} />
            )}
          </div>

          <button
            className="submit-button"
            type="submit"
            id="submit"
            disabled={isPending}
            style={{
              backgroundColor: isPending ? "gray" : "green", // Example background color
              color: isPending !== "pending" ? "white" : "black", // Example text color
              // Add any other styles you want to conditionally apply
            }}
          >
            {!isPend && !success && <p>SUBMIT LINKS</p>}
            {isPend && !success && <img style={{height: "60px",}} src={loading} alt='loading' />}
            {success && !isPend && <p>success</p>}
          </button>
          <div className="submission-error-message">
            {error && <p>Error: {error}</p>}
          </div>

        </form>
      </div>
      <div className="question-circle">
        <Link to="/faq">
          {" "}
          <img src={howitworks} alt="how it works image" />{" "}
        </Link>
      </div>
    </div>
  );
}

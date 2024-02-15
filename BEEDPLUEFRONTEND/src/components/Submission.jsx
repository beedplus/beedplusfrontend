import { useState, useEffect } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
import { useSubmit } from "../hooks/useSubmit";

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
}) {
  const [link1, setLink1] = useState(li1?.url || "");
  const [link2, setLink2] = useState(li2?.url || "");
  const [link3, setLink3] = useState(li3?.url || "");
  const [link4, setLink4] = useState(li4?.url || "");
  const [link5, setLink5] = useState(li5?.url || "");
  const [height, setHeight] = useState(false);

  const { updateAttempts, isPend, error, success } = useSubmit();
  function adjustHeight() {
    setHeight(!height);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (claimStatus === "pending") {
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
            <input
              className="video-link"
              type="text"
              value={link1}
              onChange={(e) => setLink1(e.target.value)}
              disabled={
                li1?.status === "verified" || li1?.status === "submitted"
              }
              required={true}
            />

            {li1?.status === "rejected" && <p>{li1?.reason}</p>}

            {li1?.status === "verified" ? (
              <FaClock style={{ color: "green" }} />
            ) : li1?.status === "rejected" ? (
              <FaClock style={{ color: "red" }} />
            ) : (
              <FaClock style={{ color: "gray" }} />
            )}
          </div>

          <div className="video-link-container">
            <input
              className="video-link"
              type="text"
              value={link2}
              onChange={(e) => setLink2(e.target.value)}
              disabled={
                li2?.status === "verified" || li2?.status === "submitted"
              }
              required={true}
            />
            {li2?.status === "rejected" && <p>{li2?.reason}</p>}
            {li2?.status === "verified" ? (
              <FaClock style={{ color: "green" }} />
            ) : li2?.status === "rejected" ? (
              <FaClock style={{ color: "red" }} />
            ) : (
              <FaClock style={{ color: "gray" }} />
            )}
          </div>

          <div className="video-link-container">
            <input
              className="video-link"
              type="text"
              value={link3}
              onChange={(e) => setLink3(e.target.value)}
              disabled={
                li3?.status === "verified" || li3?.status === "submitted"
              }
              required={true}
            />
            {li3?.status === "rejected" && <p>{li3?.reason}</p>}
            {li3?.status === "verified" ? (
              <FaClock style={{ color: "green" }} />
            ) : li3?.status === "rejected" ? (
              <FaClock style={{ color: "red" }} />
            ) : (
              <FaClock style={{ color: "gray" }} />
            )}
          </div>

          <div className="video-link-container">
            <input
              className="video-link"
              type="text"
              value={link4}
              onChange={(e) => setLink4(e.target.value)}
              disabled={
                li4?.status === "verified" || li4?.status === "submitted"
              }
              required={true}
            />
            {li4?.status === "rejected" && <p>{li4?.reason}</p>}
            {li4?.status === "verified" ? (
              <FaClock style={{ color: "green" }} />
            ) : li4?.status === "rejected" ? (
              <FaClock style={{ color: "red" }} />
            ) : (
              <FaClock style={{ color: "gray" }} />
            )}
          </div>

          <div className="video-link-container">
            <input
              className="video-link"
              type="text"
              value={link5}
              onChange={(e) => setLink5(e.target.value)}
              disabled={
                li5?.status === "verified" || li5?.status === "submitted"
              }
              required={true}
            />
            {li5?.status === "rejected" && <p>{li5?.reason}</p>}
            {li5?.status === "verified" ? (
              <FaClock style={{ color: "green" }} />
            ) : li5?.status === "rejected" ? (
              <FaClock style={{ color: "red" }} />
            ) : (
              <FaClock style={{ color: "gray" }} />
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
            {!success && !isPend && <p>SUBMIT LINKS</p>}
            {isPend && <p>loading</p>}
            {success && !isPend && <p>success</p>}
          </button>
          {/*{error && <p>{error}</p>}*/}
        </form>
      </div>
    </div>
  );
}

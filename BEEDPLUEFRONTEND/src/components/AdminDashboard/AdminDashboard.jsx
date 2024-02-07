import React, { useState, useEffect } from "react";
import axios from "axios";
import "../AdminDashboard/AdminDashboard.scss";

/*import { IoSearchOutline } from "react-icons/io5";
import notificationIcon from "../../assets/iconoir_bell-notification.png";*/

import caretDown from "../../assets/Vector 1.png";
import { FaWindowClose } from "react-icons/fa";
import { IoCheckboxSharp } from "react-icons/io5";
// import FixedNavbar from "../FixedNavbar/FixedNavbar";
// import SearchNavigationbar from "../SearchNavigationbar/SearchNavigationbar";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJlZWRwbHVzLmNvbSIsImlkIjoiNjViYzU3MzA3ZmNiNTZhNWExMjVhNjc1IiwiaWF0IjoxNzA2ODk1ODQ1LCJleHAiOjE3MDc1MDA2NDV9.akWtLU25UBITW9Uuuxg65dHWLtHaOMlk0UooS1_o_CM";



const AdminDashboard = () => {
  const [reason, setReason] = useState("");
  const [attemptId, setAttemptId] = useState("");
  const [currentSubmissionId, setCurrentSubmissionId] = useState("");
  const [submitSubmissionId, setSubmitSubmissionId] = useState("")
  const [submissions, setSubmissions] = useState([]);
  const [clickedSubmissionLinks, setClickedSubmissionLinks] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [linkStatuses, setLinkStatuses] = useState({});
  let [submissionHeight, setSubmissionHeight] = useState(false);
  let configa = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://beedplus.onrender.com/admin/submissions",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .request(configa)
    .then((response) => {
      if (response.data.status === "success" && response.data.data.length > 0) {
        const submissionId = response.data.data[0]._id;
      } else {
        //console.log("Failed to fetch submissions.");
      }
    })
    .catch((error) => {
      //console.error("Error fetching submissions:", error);
    });

  const fetchSingleSubmission = async (id) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://beedplus.onrender.com/admin/submissions/${id}`,
      // the :id here is the submission id
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    axios
      .request(config)
      .then((response) => {
        const submisionId = response.data.data._id
        console.log("submisionId", submisionId)
        setSubmitSubmissionId(submisionId);
        const attempts = response.data.data.attempts;
        // console.log(attempts)
        console.log(JSON.stringify(attempts));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const acceptLink = (link) => {
  //   const updatedStatuses = {};
  //   console.log("linkIndex", link);
  //   const linkIndex = clickedSubmissionLinks.indexOf(link) + 1;
  //   console.log("linkIndexs", linkIndex);
  //   console.log("linkIndexs", clickedSubmissionLinks);
    
  //   // Update only the clicked link
  //   updatedStatuses[`link${linkIndex}`] = { "status": "verified" };
  
  //   setLinkStatuses((prevStatuses) => ({
  //     ...prevStatuses,
  //     ...updatedStatuses,
  //   }));
  //   // setRejection(true); // Assuming you set rejection to true after accepting the links
  // };
  const acceptLink = (linkIndex) => { // Accept the index directly
    const updatedStatuses = {};
    console.log("linkIndex", linkIndex);
  
    // Update only the clicked link
    updatedStatuses[`link${linkIndex}`] = { status: "verified" };
  
    setLinkStatuses((prevStatuses) => ({
      ...prevStatuses,
      ...updatedStatuses,
    }));
    // setRejection(true); // Assuming you set rejection to true after accepting the links
  };
  

  // const rejectLink = (link) => {
  //   const linkIndex = clickedSubmissionLinks.indexOf(link) + 1;
  //   console.log("linkIndexs", linkIndex);
  //   setLinkStatuses((prevStatuses) => ({
  //     ...prevStatuses,
  //     [`link${linkIndex}`]: { status: "rejected", reason: reason },
  //   }));
  //   setRejection(true);
  // };

  const rejectLink = (linkIndex) => { // Accept the index directly
    const updatedStatuses = {};
    console.log("linkIndex", linkIndex);
  
    // Update only the clicked link
    updatedStatuses[`link${linkIndex}`] = { status: "rejected", reason: reason };
  
    setLinkStatuses((prevStatuses) => ({
      ...prevStatuses,
      ...updatedStatuses,
    }));
    // setRejection(true); // Assuming you set rejection to true after accepting the links
  };

  const finishReview = (submissionId) => {
    const requestBody = {
      attemptId: attemptId,
      updates: linkStatuses,
    };
    console.log("linkStatuses", linkStatuses)
    // Send POST request with requestBody to the endpoint
    fetch(
      `https://beedplus.onrender.com/admin/submissions/${submissionId}/review`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      }
    )
      .then((response) => {
        // Handle response
        console.log(response);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(configa);
        if (response.data.status === "success") {
          response.data.data.map((res) => {
            console.log({ res: res._id });
            setCurrentSubmissionId(res._id);
          });
          setSubmissions(response.data.data);
          setIsDataFetched(true);
        } else {
          // console.log("Failed to fetch submissions.");
        }
      } catch (error) {
        // console.error("Error fetching submissions:", error);
      }
    };
    if (!isDataFetched) {
      fetchData();
    }
  }, [isDataFetched]);

  function appendLinks(attempts, submissionIndex) {
    let links = [];
    const startIndex = submissionIndex * 5;
    const endIndex = Math.min(startIndex + 5, attempts.length);
    for (let i = startIndex; i < endIndex; i++) {
      const attempt = attempts[i];
      links.push(
        <div key={`link-${i}`} className="submission-data">
          {attempt.link1 && <a href={attempt.link1.url}>{attempt.link1.url}</a>}
          {attempt.link2 && <a href={attempt.link2.url}>{attempt.link2.url}</a>}
          {attempt.link3 && <a href={attempt.link3.url}>{attempt.link3.url}</a>}
          {attempt.link4 && <a href={attempt.link4.url}>{attempt.link4.url}</a>}
          {attempt.link5 && <a href={attempt.link5.url}>{attempt.link5.url}</a>}
        </div>
      );
    }
    return links;
  }
  function handleButtonClick(index, attempt) {
    const links = [];
    // Assuming link1 is always present in the attempt
    for (let i = 1; i <= 5; i++) {
      const linkKey = `link${i}`;
      if (attempt[linkKey]) {
        links.push(attempt[linkKey].url);
      }
    }
    setClickedSubmissionLinks(links);
    console.log({"setClickedSubmissionLinks" : setClickedSubmissionLinks})
    console.log("links", links);
    setAttemptId(attempt._id);
    console.log("attemptId:", attemptId);
  }

  const [headerStates, setHeaderStates] = useState({
    userInfo: false,
    campaignName: false,
    phoneNumber: false,
    dateTime: false,
  });

  function toggleHeader(header) {
    setHeaderStates((prevState) => ({
      ...prevState,
      [header]: !prevState[header],
    }));
  }

  const [submissionHeights, setSubmissionHeights] = useState({});

  const toggleHeight = (submissionIndex) => {
    setSubmissionHeights((prevHeights) => ({
      ...prevHeights,
      [submissionIndex]: !prevHeights[submissionIndex],
    }));
  };

  function displayDropdown(submission) {
    const idx = submission._id;
    fetchSingleSubmission(idx);
  }

  // const handleCheck = async (submissionId) => {
  //   const data = {
  //     attemptId: attemptId,
  //     updates: {
  //       link1: { status: "verified" },
  //       link2: { status: "verified" },
  //       link3: { status: "verified" },
  //       link4: { status: "verified" },
  //       link5: { status: "verified" },
  //     },
  //   };

  //   let configs = {
  //     method: "post",
  //     url: `https://beedplus.onrender.com/admin/submissions/${submissionId}/review`,

  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     data: JSON.stringify(data),
  //   };
  //   axios
  //     .request(configs)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const handleReject = async (submissionId) => {
  //   const data = {
  //     attemptId: attemptId,
  //     updates: {
  //       link1: { status: "rejected", reason: reason },
  //       link2: { status: "rejected", reason: reason },
  //       link3: { status: "rejected", reason: reason },
  //       link4: { status: "rejected", reason: reason },
  //       link5: { status: "rejected", reason: reason },
  //     },
  //   };

  //   try {
  //     const response = await axios.post(
  //       `https://beedplus.onrender.com/admin/submissions/${submissionId}/review`,
  //       data,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayOfWeek = days[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayOfWeek} ${month} ${year}`;
  }

  let [rejection, setRejection] = useState(true);

  function displayRejectMessage() {
    setRejection(false);
  }

  return (
    <section className="admin-dashboard-section">
      {/* <FixedNavbar/> */}

      <div className="content-section">
        {/* <SearchNavigationbar/> */}

        <div className="information-section">
          <div className="campaign-section">
            <header className="campaign-header">Campaigns</header>

            <div className="ar-button-container">
              <button className="accept-button">Accepted</button>
              <button className="reject-button">Rejected</button>
            </div>
            {/* start */}
            <div className="dashboard-table">
              <div className="table-info">
                <div className="table-headers">
                  <header
                    className={headerStates.userInfo ? "carat-rotate" : ""}
                    onClick={() => toggleHeader("userInfo")}
                  >
                    User Info <img src={caretDown} alt="caret-down" />
                  </header>

                  <header
                    className={headerStates.campaignName ? "carat-rotate" : ""}
                    onClick={() => toggleHeader("campaignName")}
                  >
                    Campaign name <img src={caretDown} alt="caret-down" />
                  </header>

                  <header
                    className={headerStates.phoneNumber ? "carat-rotate" : ""}
                    onClick={() => toggleHeader("phoneNumber")}
                  >
                    Phone number <img src={caretDown} alt="caret-down" />
                  </header>

                  <header
                    className={headerStates.dateTime ? "carat-rotate" : ""}
                    onClick={() => toggleHeader("dateTime")}
                  >
                    Date & Time <img src={caretDown} alt="caret-down" />
                  </header>
                </div>
                <div className="table-item">
                  {submissions.map((submission, submissionIndex) => (
                    <div
                      key={submissionIndex}
                      className={`the-item ${
                        submissionHeights[submissionIndex] ? "offset" : ""
                      }`}
                      onClick={() => toggleHeight(submissionIndex)}
                    >
                      <div
                        className="item"
                        onClick={() => displayDropdown(submission)}
                      >
                        <div className="user-info em">
                          <b>
                            {submission.userId.firstname}&nbsp;
                            {submission.userId.lastname}
                          </b>{" "}
                          <br />
                          <p>{submission.userId.email}</p>
                        </div>

                        <p className="hashtag em">
                          #{submission.campaignId.name}
                        </p>

                        <p className="user-phone-number em">
                          {submission.userId.phone}
                        </p>

                        <div className="date-and-time em">
                          <p className="date">
                            {formatDate(submission.updatedAt)}
                          </p>
                          <p className="time">
                            {new Date(
                              submission.updatedAt
                            ).toLocaleTimeString()}
                          </p>

                          {/*<p>10.30 AM</p>*/}
                        </div>
                      </div>

                      <div className="submission-list">
                        {submission.attempts.map((attempt, index) => (
                          <div key={`submission-${index}`}>
                            <div
                              onClick={() => handleButtonClick(index, attempt)}
                              className="submission-data"
                            >
                              {`Submission ${index + 1}`}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="submission-section">
            <div className="submission-header">Submission info</div>

            <div className="links-container">
              <header className="link-header">LINKS</header>
              {clickedSubmissionLinks.map((link, index) => (
                <div className="links" key={index}>
                  <p className="link">{link}</p>
                  <div className="btn-container">
                    <IoCheckboxSharp
                      className="check"
                      onClick={() => acceptLink(index + 1)}
                    />
                    <FaWindowClose
                      className="cancel"
                      onClick={() => rejectLink(index + 1)}
                    />
                  </div>
                </div>
              ))}

              {rejection ? (
                <></>
              ) : (
                <div className="reject-message">
                  <header>Rejection Reasons</header>
                  <textarea
                    placeholder="Write reasons here"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  ></textarea>
                </div>
              )}
            </div>
            <div>
              <button
                className="finish-button"
                onClick={() => finishReview(submitSubmissionId)}
              >
                FINISH
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;

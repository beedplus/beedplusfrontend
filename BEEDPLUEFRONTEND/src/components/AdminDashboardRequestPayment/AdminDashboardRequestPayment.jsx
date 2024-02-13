import React, { useState, useEffect } from "react";
import axios from "axios";
import ".//AdminDashboard.scss";
import { baseURL } from "../../config.js";
// all/submission/attempts
import caretDown from "../../assets/Vector 1.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWindowClose } from "react-icons/fa";
import { IoCheckboxSharp } from "react-icons/io5";
import { usebackendStore } from "../../store/store.js";
import { useNavigate } from "react-router";
// import FixedNavbar from "../FixedNavbar/FixedNavbar";
// import SearchNavigationbar from "../SearchNavigationbar/SearchNavigationbar";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJlZWRwbHVzLmNvbSIsImlkIjoiNjViYzU3MzA3ZmNiNTZhNWExMjVhNjc1IiwiaWF0IjoxNzA3ODI3MzI2LCJleHAiOjE3MDg0MzIxMjZ9.WfSjk_b2ZXONJDSR7txaZWd8RzRfMuJGDCC3JUnkwG0";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [campaignInfo, setCampaignInfo] = useState([]);
  const [linkss, setLinks] = useState([]);
  const [reason, setReason] = useState("");
  const [attemptIdx, setAttemptIdx] = useState("");
  const [campaignIdx, setCampaignIdx] = useState("");
  const [submissionIdx, setSubmissionIdx] = useState("");
  const [clickedSubmissionLinks, setClickedSubmissionLinks] = useState([]);
  const tempAccessToken = usebackendStore((state) => state.tempAccessToken);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: `${baseURL}all/submission/attempts`,
          params: { claimStatus: "submitted" },
          headers: { "content-type": "application/json" },
          data: { status: "verified" },
        };
        try {
          const response = await axios.request(options);
          setCampaignInfo(response.data.data.data);
          setLinks(response.data.data.data);
          console.log(response.data.data.data);
        } catch (error) {
          console.error(error);
        }
      } catch (error) {
        // console.error("Error fetching submissions:", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmissionLinks = (
    campaignIdx,
    submissionIdx,
    attemptIdx,
    campaignLinks
  ) => {
    setCampaignIdx(campaignIdx);
    setSubmissionIdx(submissionIdx);
    setAttemptIdx(attemptIdx);
    setLinks(campaignLinks);
  };

  const paymentAccepted = async (campaignId, submissionId, attemptId) => {
    const options = {
      method: "PATCH",
      url: `${baseURL}${campaignId}/submission/${attemptId}`,
      params: { submissionId: `${submissionId}` },
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        claimStatus: "claimed",
      },
    };
    try {
      // const response = await axios.request(options)
      const { data } = await axios.request(options);
      if (data.status === "success") {
        setTimeout(() => {
          toast.success("Paid Successfully!");
          navigate("/admin/paid");
        }, 4000);
      }
    } catch (error) {
      console.error(error);
    }
  };

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

  return (
    <section className="admin-dashboard-section">
      {/* <FixedNavbar/> */}

      <div className="content-section">
        {/* <SearchNavigationbar/> */}

        <div className="information-section">
          <div className="campaign-section">
            <header className="campaign-header">Campaigns</header>
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
                    Level Request <img src={caretDown} alt="caret-down" />
                  </header>

                  <header
                    className={headerStates.dateTime ? "carat-rotate" : ""}
                    onClick={() => toggleHeader("dateTime")}
                  >
                    Account Details <img src={caretDown} alt="caret-down" />
                  </header>
                </div>
                <div className="table-item">
                  {campaignInfo.length === 0 ? (
                    <b>No submitted request available</b>
                  ) : (
                    campaignInfo.map((campaign, submissionIndex) => (
                      <div
                        key={submissionIndex}
                        className={`the-item`}
                        onClick={() => toggleHeight(submissionIndex)}
                      >
                        <div className="item">
                          <div className="user-info em">
                            <b>
                              {campaign.user.firstname} {campaign.user.lastname}
                            </b>
                            <br />
                            {campaign.user.email}
                          </div>

                          <p className="hashtag em">{campaign.campaign.name}</p>

                          <p className="user-phone-number em">
                            <button
                              onClick={() =>
                                handleSubmissionLinks(
                                  campaign._id,
                                  campaign.submissionId,
                                  campaign.attemptId,
                                  campaign.links
                                )
                              }
                            >
                              Submission {campaign.submissionNumber}
                            </button>
                          </p>

                          <div className="date-and-time em">
                            {campaign.user.account ? (
                              <p className="time">
                                <br />
                                {campaign.user.account.bankName} <br /> {""}
                                {
                                  campaign.user.account.accountNumber
                                } <br /> {campaign.user.account.accountName}
                              </p>
                            ) : (
                              <p className="error-message">
                                Not account details set
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="submission-section">
            <div className="submission-header">Submission info</div>
            <div className="links-container">
              <header className="link-header">LINKS</header>
              <div>
                {linkss.map((link, linkIndex) => (
                  <p key={linkIndex} className="link">
                    {link.url && link.url.length > 40
                      ? link.url.substring(0, 28) + "..."
                      : link.url}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <button
                className="finish-button"
                onClick={() =>
                  paymentAccepted(campaignIdx, submissionIdx, attemptIdx)
                }
              >
                PAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;

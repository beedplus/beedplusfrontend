import React, { useState, useEffect } from "react";
import axios from "axios";
import "../AdminDashboard/AdminDashboard.scss";
import { IoSearchOutline } from "react-icons/io5";
import notificationIcon from "../../assets/iconoir_bell-notification.png";
import beepLogo from "../../assets/image 2.png";
import caretDown from "../../assets/Vector 1.png";

const AdminDashboard = () => {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJlZWRwbHVzLmNvbSIsImlkIjoiNjViYzU3MzA3ZmNiNTZhNWExMjVhNjc1IiwiaWF0IjoxNzA2ODk1ODQ1LCJleHAiOjE3MDc1MDA2NDV9.akWtLU25UBITW9Uuuxg65dHWLtHaOMlk0UooS1_o_CM";
  let data = "";
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://beedplus.onrender.com/admin/submissions",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      if (response.data.status === "success") {
        response.data.data.forEach((submission) => {
          console.log(submission.campaignId.name);
        });
      } else {
        console.log("Failed to fetch submissions.");
      }
    })
    .catch((error) => {
      console.error("Error fetching submissions:", error);
    });
  const [submissions, setSubmissions] = useState([]);

  const [headerStates, setHeaderStates] = useState({
    userInfo: false,
    campaignName: false,
    phoneNumber: false,
    dateTime: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(config);
        if (response.data.status === "success") {
          setSubmissions(response.data.data);
        } else {
          console.log("Failed to fetch submissions.");
        }
      } catch (error) {
        console.error("Error fetching submissions:", error);
      }
    };

    fetchData();
  }, []); // Em

  function toggleHeader(header) {
    setHeaderStates((prevState) => ({
      ...prevState,
      [header]: !prevState[header],
    }));
  }

  return (
    <section className="admin-dashboard-section">
      <div className="fixed-navigation-bar">
        <img src={beepLogo} className="beep-logo" />
      </div>

      <div className="content-section">
        <div className="navigation-bar">
          <div className="input-field-container">
            <input className="search-bar" placeholder="Search" />
            <IoSearchOutline className="search-button" />
          </div>
          <img src={notificationIcon} className="notification-icon" />
          <div className="user-initials"></div>
        </div>

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
                    className={headerStates.campaignName ? "carat-rotate" : ""}
                    onClick={() => toggleHeader("campaignName")}
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
                    className={headerStates.campaignName ? "carat-rotate" : ""}
                    onClick={() => toggleHeader("campaignName")}
                  >
                    Phone number <img src={caretDown} alt="caret-down" />
                    
                  </header>

                  <header
                    className={headerStates.campaignName ? "carat-rotate" : ""}
                    onClick={() => toggleHeader("campaignName")}
                  >
                    Date & Time <img src={caretDown} alt="caret-down" />
                  </header>
                </div>
                <div className="table-item">
               
                  {submissions.map((submission, index) => (
                     <div className="item">
                        <div key={index} className="user-info em">
                        <b>
                            {submission.userId.firstname}&nbsp;
                            {submission.userId.lastname}
                        </b> <br />
                        <p>{submission.userId.email}</p>
                    </div>

                    <p key={index} className="hashtag em">
                    #{submission.campaignId.name} 
                    </p>

                    <p className="user-phone-number em">081202853523</p>

                    <div key={index} className="date-and-time em">
                   <p>{submission.updatedAt}</p>
                    {/*<p>10.30 AM</p>*/}
                   </div>
                    </div>
                
                    


                  ))}
                </div>

           
              </div>
            </div>
          </div>

          {/* 
            <div className="dashboard-table">
              <div className="table-info">
                <div className="table-item">
                  <header
                    className={headerStates.userInfo ? "carat-rotate" : ""}
                    onClick={() => toggleHeader("userInfo")}
                  >
                    User info <img src={caretDown} alt="caret-down" />
                  </header>
                  <div className="user-info">
                    <b>John Doe</b>
                    <p>johndoe@gmail.com</p>
                  </div>
                </div>

                <div className="table-item">
                  <header
                    className={headerStates.campaignName ? "carat-rotate" : ""}
                    onClick={() => toggleHeader("campaignName")}
                  >
                    Campaign name <img src={caretDown} alt="caret-down" />
                  </header>
                  <p className="hashtag">#Ofcourseitsme</p>
                </div>

                <div className="table-item">
                  <header
                    className={headerStates.phoneNumber ? "carat-rotate" : ""}
                    onClick={() => toggleHeader("phoneNumber")}
                  >
                    Phone number <img src={caretDown} alt="caret-down" />
                  </header>
                  <p className="user-phone-number">081202853523</p>
                </div>

                <div className="table-item">
                  <header
                    className={headerStates.dateTime ? "carat-rotate" : ""}
                    onClick={() => toggleHeader("dateTime")}
                  >
                    Date & time <img src={caretDown} alt="caret-down" />
                  </header>
                  <div className="date-and-time">
                    <p>10 Feb 2023</p>
                    <p>10.30 AM</p>
                  </div>
                </div>
              </div>
            </div> */}
        </div>

        {/* <div className="submission-section">
          <div className="submission-header">Submission info</div>
        </div> */}
      </div>
    </section>
  );
};

export default AdminDashboard;

import axios from "axios";
import { baseURL } from "../../config.js";
import "../AdminDashboardPaidRequest/AdminDashboardPaidRequest.scss";

/*import { IoSearchOutline } from "react-icons/io5";
import notificationIcon from "../../assets/iconoir_bell-notification.png";*/

import caretDown from "../../assets/Vector 1.png";
import { FaWindowClose } from "react-icons/fa";
import { IoCheckboxSharp } from "react-icons/io5";
import { usebackendStore } from "../../store/store.js";
import { useEffect, useState } from "react";
// import FixedNavbar from "../FixedNavbar/FixedNavbar";
// import SearchNavigationbar from "../SearchNavigationbar/SearchNavigationbar";

const AdminDashboardPaidRequest = () => {
  const [campaignInfo, setCampaignInfo] = useState([]);
  const tempAccessToken = usebackendStore((state) => state.tempAccessToken);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: `${baseURL}all/submission/attempts`,
          params: { claimStatus: "claimed" },
          headers: { "content-type": "application/json", Authorization : `Bearer ${tempAccessToken}` },
          data: {},
        };
        try {
          const response = await axios.request(options);
          console.log({ response: response.data.data.data });
          setCampaignInfo(response.data.data.data);
          console.log({ campaignInfo: campaignInfo });
        } catch (error) {
          console.error(error);
        }
      } catch (error) {
        console.error("Error fetching submissions:", error);
      }
    };
    fetchData();
  }, []);

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

  return (
    <section className="admin-dashboard-section">
      {/* <FixedNavbar/> */}

      <div className="content-section">
        {/* <SearchNavigationbar/> */}

        <div className="information-section">
          <div className="campaign-section">
            <header className="campaign-header">Paid Requests</header>
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
                    <b>No Paid Submission yets</b>
                  ) : (
                    campaignInfo.map((submission, submissionIndex) => (
                      <div
                        key={submissionIndex}
                        className="the-item"
                      >
                        <div className="item">
                          <div className="user-info em">
                            <b>
                              {submission.user.firstname}{" "}
                              {submission.user.lastname}
                            </b>{" "}
                            <br />
                            <p>{submission.user.email}</p>
                          </div>

                          <p className="hashtag em">
                            {submission.campaign.name}
                          </p>

                          <p className="user-phone-number em">
                            {/*{submission.userId.phone}*/}
                            <button>
                              submission {submission.submissionNumber}
                            </button>
                          </p>

                          <div className="date-and-time em">
                            {submission.user.account ? (
                              <div>
                                <p className="time">
                                  {submission.user.account.bankName}
                                </p>
                                <p>{submission.user.account.accountNumber}</p>
                                <p>{submission.user.account.accountName}</p>
                              </div>
                            ) : (
                              <p>No account details set</p>
                            )}
                            {/*<p>10.30 AM</p>*/}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboardPaidRequest;

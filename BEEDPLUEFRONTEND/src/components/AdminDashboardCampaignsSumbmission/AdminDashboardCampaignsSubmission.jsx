import { FaChevronDown } from "react-icons/fa";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import "../AdminDashboardCampaignsSumbmission/AdminDashboardCampaignsSubmission.scss";
const baseURL = "https://beedplus.onrender.com/campaigns/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN1cnRseS51cmxAZ21haWwuY29tIiwiaWQiOiI2NWMyMGE4Yzg0YjAxYzU2Nzg1MGVmMmYiLCJpYXQiOjE3MDc1MjM1OTEsImV4cCI6MTcwODEyODM5MX0.ZwmjEsfcoI9gj12CQ6o1T5kIVwYmh8aVX94tu00IDhw";
const AdminDashboardCampaignsSubmission = () => {
  const [campaignDetails, setCampaignDetails] = useState([]);
  const [campaignName, setCampaignName ]= useState("")
  const { id } = useParams();
  const url = `${baseURL}${id}/submission`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setCampaignDetails(response.data.data.attempts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, [url]);

  const requirement = [
    {
      rule: "Pick a challenge task you are interested in ",
    },
    {
      rule: "Pick a challenge task you are interested in ",
    },
    {
      rule: "Pick a challenge task you are interested in ",
    },
  ];

  return (
    <div className="admin-dashboard-campaign-submission-div">
      <section className="admin-dashboard-campaign-link-listed-div">
        <div className="admin-dashboard-campaign-link-listed-head-text">
          <p>#GorimapaChallenge</p>
        </div>
        <div className="admin-dashboard-campaigns-individual-submission-div">
          {campaignDetails.map((campaign, index) => {
            return (
                <div key={index}
                    className="admin-dashboard-campaign-submission-campaign-section">
                  {Object.values(campaign)
                    .filter((link) => link && typeof link === "object")
                    .map((link, idx) => (
                          <div key={idx} className="admin-dashboard-campaigns-individual-submission-div-bar">
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                              {link.url}
                            </a>
                            <div className="admin-dashboard-submission-accept-reject-bar">
                              <button className="admin-dashboard-preview-button">
                                Preview
                              </button>
                              <button className="admin-dashboard-accept-button">
                                Accept
                              </button>
                              <button className="admin-dashboard-reject-button">
                                Reject
                              </button>
                            </div>
                          </div>

                    ))}
                </div>
            );
          })}
        </div>
      </section>
      <section className="admin-dashboard-campaign-info">
        <div className="admin-dashboard-campaign-info-div">
          <p className="admin-dashboard-campaign-info">Campaign Info</p>
          <div>
            <p>Requirements</p>
            {requirement.map((rule, index) => (
              <div key={index}>
                <ul>
                  <li>{rule.rule}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default AdminDashboardCampaignsSubmission;

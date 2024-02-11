import "../AdminDashboardRejectedCampaign/AdminDashboardRejectedCampaign.scss";
import { FaChevronDown } from "react-icons/fa";
import axios from "axios";
import "../AdminDashboardCampaignsSumbmission/AdminDashboardCampaignsSubmission.scss";
import { useState, useEffect } from "react";
const baseURL = "https://beedplus.onrender.com/campaigns/all/submission/links";
const AdminDashboardRejectedCampaign = () => {
  const [campaignDetails, setCampaignDetails] = useState([]);
  const [campaignName, setCampaignName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: baseURL,
          params: { linkStatus: "rejected" },
          headers: { "content-type": "application/json" },
        };
        const response = await axios.request(options);
        setCampaignDetails(response.data.data.links);
        setCampaignName(response.data.data.campaignName);
        console.log({ response: response.data.data.links });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
          <p>#{campaignName}</p>
        </div>
        <div className="admin-dashboard-campaigns-individual-submission-div">
          {campaignDetails.map((campaign, index) => {
            return (
              <div
                key={index}
                className="admin-dashboard-campaigns-individual-submission-div-bar"
              >
                <div className="admin-dashboard-campaign-submission-campaign-title">
                  <p className="admin-dashboard-campaign-name">
                    {campaign.url}
                  </p>
                </div>
                <div className="admin-dashboard-submission-accept-reject-bar">
                  <button className="admin-dashboard-reject-button">
                    Rejected
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="admin-dashboard-campaign-info">
        <div className="admin-dashboard-campaign-info-div">
          <p className="admin-dashboard-campaign-info-header">Campaign Info</p>
          <div className="admin-dashboard-campaign-info-body">
            <p className="admin-dashboard-campaign-info-body-requirement">
              Requirements
            </p>
            {requirement.map((rule, index) => {
              return (
                <div
                  className="admin-dashboard-campaign-info-body-requirement-list"
                  key={index}
                >
                  <ul>
                    <li>{rule.rule}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default AdminDashboardRejectedCampaign;

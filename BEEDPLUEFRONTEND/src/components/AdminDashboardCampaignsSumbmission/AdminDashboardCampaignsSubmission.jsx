// import { FaChevronDown } from "react-icons/fa";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import "../AdminDashboardCampaignsSumbmission/AdminDashboardCampaignsSubmission.scss";
import { baseURL, patchURL } from "../../config.js";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN1cnRseS51cmxAZ21haWwuY29tIiwiaWQiOiI2NWMyMGE4Yzg0YjAxYzU2Nzg1MGVmMmYiLCJpYXQiOjE3MDc1MjM1OTEsImV4cCI6MTcwODEyODM5MX0.ZwmjEsfcoI9gj12CQ6o1T5kIVwYmh8aVX94tu00IDhw";
const AdminDashboardCampaignsSubmission = () => {
  const [campaignDetails, setCampaignDetails] = useState([]);
  const [campaignName, setCampaignName] = useState("");
  const { id } = useParams();
  const url = `${baseURL}${id}/submission/links`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: url,
          params: { linkStatus: "submitted" },
          headers: { "content-type": "application/json" },
        };
        const response = await axios.request(options);
        setCampaignName(response.data.data.campaign.name);
        setCampaignDetails(response.data.data.links.data);
        console.log({ campaign: response.data.data.campaign.name });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  const acceptLink = async (submissionId, attemptId, linkId) => {
    try {
      const options = {
        method: "PATCH",
        url: patchURL,
        params: {
          submissionId: submissionId,
          attemptId: attemptId,
          linkId: linkId,
        },
        headers: { "content-type": "application/json" },
        data: { status: "verified" },
      };

      try {
        const { data } = await axios.request(options);
        console.log(data);
        updateLinkStatus(linkId);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const rejectLink = async (submissionId, attemptId, linkId) => {
    try {
      const options = {
        method: "PATCH",
        url: patchURL,
        params: {
          submissionId: submissionId,
          attemptId: attemptId,
          linkId: linkId,
        },
        headers: { "content-type": "application/json" },
        data: { status: "rejected" },
      };

      try {
        const { data } = await axios.request(options);
        console.log(data);
        updateLinkStatus(linkId);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateLinkStatus = (linkId) => {
    setCampaignDetails((prevDetails) =>
      prevDetails.filter((link) => link.linkId !== linkId)
    );
  };

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
      <section className="admin-dashboard-campaign-link-listed-div-one">
        <div className="admin-dashboard-campaign-link-listed-head-text">
          <p>#{campaignName}</p>
        </div>
        <div className="admin-dashboard-campaigns-individual-submission-div">
          {campaignDetails.map((link, idx) => (
            <div
              key={idx}
              className="admin-dashboard-campaigns-individual-submission-div-bar"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.url.length > 40 ? link.url : null}
              >
                {link.url.length > 40
                  ? link.url.substring(0, 40) + "..."
                  : link.url}
              </a>
              <div className="admin-dashboard-submission-accept-reject-bar">
                <button className="admin-dashboard-preview-button">
                  Preview
                </button>
                <button
                  className="admin-dashboard-accept-button"
                  onClick={() =>
                    acceptLink(link.submissionId, link.attemptId, link.linkId)
                  }
                >
                  Accept
                </button>
                <button
                  className="admin-dashboard-reject-button"
                  onClick={() =>
                    rejectLink(link.submissionId, link.attemptId, link.linkId)
                  }
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
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

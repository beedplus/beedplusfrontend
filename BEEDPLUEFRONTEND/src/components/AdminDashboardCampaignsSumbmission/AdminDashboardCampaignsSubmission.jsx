// import { FaChevronDown } from "react-icons/fa";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import "../AdminDashboardCampaignsSumbmission/AdminDashboardCampaignsSubmission.scss";
import { baseURL, patchURL } from "../../config.js";

import { FaRegUser } from "react-icons/fa";
import {usebackendStore} from "../../store/store.js";
import PaginationComponent from "../PaginationCOmponent/PaginationComponent.jsx";
import "../AdminDashboardCampaigns/AdminDashboardCampaigns.scss"

const AdminDashboardCampaignsSubmission = () => {
  const [campaignDetails, setCampaignDetails] = useState([]);
  const [campaignName, setCampaignName] = useState("");
  const [campaignId, setCampaignId] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [submissionCount, setSubmissionCount] = useState("")
  const { id } = useParams();
  const url = `${baseURL}${id}/submission/links`;
  const tempAccessToken = usebackendStore(state => state.tempAccessToken)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: url,
          params: { linkStatus: "submitted" },
          headers: { "content-type": "application/json", Authorization : `Bearer ${tempAccessToken}` },
        };
        const response = await axios.request(options);
        setCampaignId(response.data.data.campaign._id)
        setCampaignName(response.data.data.campaign.name);
        setCampaignDetails(response.data.data.links.data);
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
        headers: { "content-type": "application/json", Authorization : `Bearer ${tempAccessToken}`},
        data: { status: "verified" },
      };

      try {
        const { data } = await axios.request(options);
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
        headers: { "content-type": "application/json" , Authorization : `Bearer ${tempAccessToken}`},
        data: { status: "rejected" },
      };

      try {
        const { data } = await axios.request(options);
        updateLinkStatus(linkId);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const previewDetails = async (userId, campaignId) => {
    const options = {
      method: "GET",
      url: `${baseURL}all/submission/link-details`,
      params: { userId: userId, campaignId: campaignId },
      headers: { "content-type": "application/json", Authorization : `Bearer ${tempAccessToken}` },
    };
    try {
      const response = await axios.request(options)
      console.log({"response" : response.data.data})
      setFirstname(response.data.data.user.firstname)
      setLastname(response.data.data.user.lastname)
      setEmail(response.data.data.user.email)
      setSubmissionCount(response.data.data.submissionCount)
    } catch (error) {
      console.error(error);
    }
  };

  const updateLinkStatus = (linkId) => {
    setCampaignDetails((prevDetails) =>
      prevDetails.filter((link) => link.linkId !== linkId)
    );
  };

  return (
    <div className="admin-dashboard-campaign-submission-div">
      <section className="admin-dashboard-campaign-link-listed-div-one">
        <div>
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
                        ? link.url.substring(0, 25) + "..."
                        : link.url}
                  </a>
                  <div className="admin-dashboard-submission-accept-reject-bar">
                    <button className="admin-dashboard-preview-button" onClick={() => previewDetails(link.userId, campaignId)}>
                      Details
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
        </div>
        <div className="pagination-button-div">
          <p>
            <PaginationComponent/>
          </p>

        </div>
      </section>
      <section className="admin-dashboard-campaign-info">
        <div>
          <div className="admin-dashboard-campaign-info-div">
            <p className="admin-dashboard-campaign-info-header">User Profile</p>
            <div className="admin-dashboard-campaign-info-header-user-details">
              <div></div>
              <div className="admin-dashboard-campaign-info-header-user-icon-div">
                <p className="admin-dashboard-campaign-info-header-user-icon">
                  <FaRegUser />
                </p>
              </div>
              <div className="admin-dashboard-campaign-info-header-user-name-div">
                <p className="admin-dashboard-campaign-info-header-user-name">
                  {firstname} {lastname}
                </p>
                <p>{email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="admin-dashboard-campaign-info-each-submission-preview">
          <div className="admin-dashboard-campaign-info-each-submission-preview-header">
            <p className="admin-dashboard-campaign-info-each-submission-preview-text">
              Submission Count: {submissionCount}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AdminDashboardCampaignsSubmission;

import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import "../AdminDashboardCampaigns/AdminDashboardCampaigns.scss";

import SideBarAdmin from "../SideBarAdmin/SideBarAdmin.jsx";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar.jsx";
const url = "https://beedplus.onrender.com/campaigns";
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

const AdminDashboardCampaigns = () => {
  const [submissions, setSubmissions] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getAppData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setSubmissions(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAppData();

    // eslint-disable-next-line
  }, []);

  const campaignDetailsHeader = [
    {
      head: "Challenge Name",
      icon: "<FaChevronDown />",
    },
    {
      head: "Owner",
      icon: "<FaChevronDown />",
    },
    {
      head: "Date",
      icon: "<FaChevronDown />",
    },
  ];

  return (
      <section className="admin-dashboard-campaign-container">
        <div className="admin-dashboard-campaign-sidebar">
        </div>
        <div className="admin-dashboard-campaign-whole-div">
          <div>
            <DashboardNavbar/>
          </div>
          <div className="admin-dashboard-campaign-div">
            <section className="admin-dashboard-campaign-link-listed-div">
              <div className="admin-dashboard-campaign-link-listed-head-text">
                <p>Campaigns</p>
              </div>
              <div className="admin-dashboard-campaign-link-listed-header">
                {campaignDetailsHeader.map((head, headIndex) => {
                  return (
                      <div
                          key={headIndex}
                          className="admin-dashboard-campaign-link-listed-header-div"
                      >
                        <h2>{head.head}</h2>
                        <p>
                          <FaChevronDown className="admin-dasboard-arrow-down" />
                        </p>
                      </div>
                  );
                })}
              </div>
              <div className="admin-dashboard-campaigns-individual-campaign-div">
                {submissions.map((submission, index) => {
                  return (

                      <Link
                          className="admin-dashboard-campaign-name-bar"
                          to={`/admin/test-campaign/${submission._id}`}
                      >
                        <div
                            key={index}
                            className="admin-dashboard-campaigns-individual-campaign-div-bar"
                        >
                          <div>
                            <p className="admin-dashboard-campaign-name-p">

                              {`#${submission.name}`}

                            </p>
                          </div>
                          <div>
                            <p className="admin-dashboard-campaign-owner">
                              {submission.artiste}
                            </p>
                          </div>
                          <div>
                            <p className="admin-dashboard-campaign-date">
                              {formatDate(submission.createdAt)}
                            </p>
                          </div>
                        </div>

                      </Link>
                  );
                })}
              </div>
            </section>
            <section className="admin-dashboard-campaign-info"></section>
          </div>
        </div>

      </section>

  );
};
export default AdminDashboardCampaigns;

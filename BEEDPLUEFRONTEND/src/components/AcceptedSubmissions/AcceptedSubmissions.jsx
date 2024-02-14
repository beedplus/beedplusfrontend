
import "./AcceptedSubmissions.scss"

import { FaChevronDown } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";
import {usebackendStore} from "../../store/store.js";
const baseURL = "https://beedplus.onrender.com/campaigns/all/submission/links";


export default function AcceptedSubmissions() {
  const [campaignDetails, setCampaignDetails] = useState([]);
  const [campaignName, setCampaignName] = useState("");
  const tempAccessToken = usebackendStore(state => state.tempAccessToken)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: baseURL,
          params: { linkStatus: "verified" },
          headers: { "content-type": "application/json", Authorization : `Bearer ${tempAccessToken}` },
        };
        const response = await axios.request(options);
        setCampaignDetails(response.data.data.links.data);
        setCampaignName(response.data.data.campaignName);
        console.log({ response: response.data.data.links });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="admin-dashboard-campaign-submission-div">
      <section className="admin-dashboard-campaign-link-listed-div">
        <div className="admin-dashboard-campaign-link-listed-head-text">
          <p>
             Accepted Submissions
          </p>
        </div>
        <div className="admin-dashboard-campaigns-individual-submission-div">
          {
            campaignDetails.map((campaign, index) => {
              return (
                <div key={index} className="admin-dashboard-campaigns-individual-submission-div-bar">
                  <div className="admin-dashboard-campaign-submission-campaign-title">
                    <p className="admin-dashboard-campaign-name">

                      {campaign.url}
                    </p>
                  </div>
                  <div className="admin-dashboard-submission-accept-reject-bar">
                    <button className="admin-dashboard-accept-button">
                      Accepted
                    </button>
                  </div>
                </div>
              )


            })
          }
        </div>

      </section>
      {/*<section className="admin-dashboard-campaign-info">*/}
      {/*  <div className="admin-dashboard-campaign-info-div">*/}
      {/*    <h3 className="admin-dashboard-campaign-info">*/}
      {/*      Accepted Info*/}
      {/*    </h3>*/}
      {/*    <div>*/}
      {/*      <p>*/}
      {/*      Number of submitted submissions*/}
      {/*      </p>*/}
      {/*    </div>  */}
      {/*  </div>*/}
      {/*  <div className="admin-dashboard-campaign-info-div">*/}
      {/*    <h3 className="admin-dashboard-campaign-info">*/}
      {/*    {campaignDetails.length}*/}
      {/*    </h3>*/}
      {/*    <div>*/}
      {/*      <p>*/}
      {/*      submitted links*/}
      {/*      </p>*/}
      {/*    </div>  */}
      {/*  </div>*/}
      {/*</section>*/}

    </div>
  )
}

import "../MyCampaigns/MyCampaigns.scss";
import { useGetUserCampaigns } from "../../hooks/useGetUserCampaigns";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const MyCampaigns = () => {
  const requirement = [
    {
      campaignName: "Pick a challenge  ",
      campaignOwner: "Davido",
      campaignPaidStatus: "paid",
    },
    {
      campaignName: "Pick a challenge  ",
      campaignOwner: "Davido",
      campaignPaidStatus: "paid",
    },
    {
      campaignName: "Pick a challenge  ",
      campaignOwner: "Davido",
      campaignPaidStatus: "paid",
    },
  ];
  const { error, isPending, documents } = useGetUserCampaigns();
  useEffect(() => console.log(documents), [documents]);
  return (
    <div className="mycampaigns-page">
      <div className="mycampaigns-page-div">
        <div className="mycampaigns-page-header">
          <p>My Campaigns</p>
        </div>
        <div className="mycampaigns-page-body">
          <div className="completed-compaigns-div">
            {documents.data &&
              documents.data.map((task, index) => {
                return (
                  <Link
                    to={`/challenge/${task.campaignId}`}
                    className="completed-camapigns-div"
                    key={index}
                  >
                    <div className="completed-campaigns-bar">
                      <p>{task.campaignId.name}</p>
                      <p>{task.campaignId.artiste}</p>
                      <p>{}</p>
                    </div>
                  </Link>
                );
              })}
          </div>
          <div className="pending-compaigns-div"></div>
        </div>
      </div>
    </div>
  );
};

export default MyCampaigns;

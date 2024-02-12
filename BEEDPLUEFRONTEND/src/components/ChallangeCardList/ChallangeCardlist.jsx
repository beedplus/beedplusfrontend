import React from "react";
import "./ChallangeCardlist.scss";
import { useEffect, useState } from "react";
import { useGetAllCampaign } from "../../hooks/useGetAllCampaign";
import ChallangeCard from "../ChallangeCard/challangeCard";
import loading from "../../assets/loading.gif";
function ChallangeCardlist(props) {
  const { error, isPending, documents } = useGetAllCampaign();
  const campaignData = documents.data;
  console.log(isPending);

  return (
    <div className="challange-card-list">
      {isPending && (
        <img
          src={loading}
          alt="Loading Animation"
          style={{
            width: "80px",
            height: "70px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        />
      )}
      {error && <p>{error}</p>}
      <p className="latest">{props.name} CAMPAIGNS</p>
      <div className="class-container">
        {campaignData &&
          campaignData.map((singleData, index) => (
            <ChallangeCard
              key={index}
              image={singleData.image}
              name={singleData.name}
              artiste={singleData.artiste}
              id={singleData._id}
              currentAmount={
                singleData.funds.startingAmount - singleData.funds.currentAmount
              }
            />
          ))}
      </div>{" "}
    </div>
  );
}

export default ChallangeCardlist;

import "../MyCampaigns/MyCampaigns.scss"


const MyCampaigns = ()=>{

    const requirement = [
        {
            campaignName: "Pick a challenge  ",
            campaignOwner: "Davido",
            campaignPaidStatus: "paid"
        },
        {
            campaignName: "Pick a challenge  ",
            campaignOwner: "Davido",
            campaignPaidStatus: "paid"        },
        {
            campaignName: "Pick a challenge  ",
            campaignOwner: "Davido",
            campaignPaidStatus: "paid"        },
    ];
    return(
        <div className="mycampaigns-page">
            <div className="mycampaigns-page-div">
                <div className="mycampaigns-page-header">
                    <p>
                        My Campaigns
                    </p>
                </div>
                <div className="mycampaigns-page-body">
                    <div className="completed-compaigns-div">
                        {
                            requirement.map((task, index) => {
                                return(
                                    <div className="completed-camapigns-div"
                                        key={index}>
                                        <div className="completed-campaigns-bar">
                                            <p>
                                                {task.campaignName}
                                            </p>
                                            <p>
                                                {task.campaignOwner}
                                            </p>
                                            <p>
                                                {task.campaignPaidStatus}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="pending-compaigns-div">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCampaigns
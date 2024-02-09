import { FaChevronDown } from "react-icons/fa";
import "../AdminDashboardCampaigns/AdminDashboardCampaigns.scss"
const AdminDashboardCampaigns = () => {
    const campaignDetails   = [
        {
            campaignName: '#Gorimapachallenge',
            campaignOwner: "Davido",
            campaignDate : "12 November"
          },
        {
            campaignName: 'Gorimapachallenge',
            campaignOwner: "Davido",
            campaignDate : "12 November"
        },
        {
            campaignName: 'Gorimapachallenge',
            campaignOwner: "Davido",
            campaignDate : "12 November"
        },
        {
            campaignName: 'Gorimapachallenge',
            campaignOwner: "Davido",
            campaignDate : "12 November"
        },
        {
            campaignName: 'Gorimapachallenge',
            campaignOwner: "Davido",
            campaignDate : "12 November"
        },
        {
            campaignName: 'Gorimapachallenge',
            campaignOwner: "Davido",
            campaignDate : "12 November"
        },



    ]
    const campaignDetailsHeader = [
        {
            head:"Challenge Name",
            icon: "<FaChevronDown />"
        },
        {
            head:"Owner",
            icon: "<FaChevronDown />"
        },
        {
            head:"Date",
            icon: "<FaChevronDown />"

        },
    ]



    return(
        <div className="admin-dashboard-campaign-div">
            <section className="admin-dashboard-campaign-link-listed-div">
                <div className="admin-dashboard-campaign-link-listed-head-text">
                    <p>
                        Campaigns
                    </p>
                </div>
                <div className="admin-dashboard-campaign-link-listed-header">
                    {
                        campaignDetailsHeader.map((head, headIndex) => {
                            return(
                                <div key={headIndex}
                                     className="admin-dashboard-campaign-link-listed-header-div">
                                    <h2 >
                                        {head.head}
                                    </h2>
                                    <p >
                                        <FaChevronDown  className="admin-dasboard-arrow-down"/>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="admin-dashboard-campaigns-individual-campaign-div">
                    {
                        campaignDetails.map((campaign, index) => {
                            return(
                                <div key={index} className="admin-dashboard-campaigns-individual-campaign-div-bar">
                                            <div>
                                                <p className="admin-dashboard-campaign-name">
                                                    {campaign.campaignName}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="admin-dashboard-campaign-owner">
                                                    {campaign.campaignOwner}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="admin-dashboard-campaign-date">
                                                    {campaign.campaignDate}
                                                </p>
                                            </div>


                                </div>
                            )


                        })
                    }
                </div>

            </section>
            <section className="admin-dashboard-campaign-info">

            </section>
        </div>
    )
}
export default AdminDashboardCampaigns
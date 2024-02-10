import "../AdminDashboardRejectedCampaign/AdminDashboardRejectedCampaign.scss"

import { FaChevronDown } from "react-icons/fa";
import "../AdminDashboardCampaignsSumbmission/AdminDashboardCampaignsSubmission.scss"
const AdminDashboardRejectedCampaign = () => {
    const campaignDetails   = [
        {
            campaignName: 'https://www.google.com',

        },
        {
            campaignName: 'https://www.google.com',

        },
        {
            campaignName: 'https://www.google.com',

        },
        {
            campaignName: 'https://www.google.com',

        },
        {
            campaignName: 'https://www.google.com',

        },
        {
            campaignName: 'https://www.google.com',

        },
        {
            campaignName: 'https://www.google.com',

        },



    ]
    const requirement = [
        {
            rule:"Pick a challenge task you are interested in ",
        },
        {
            rule:"Pick a challenge task you are interested in ",
        },
        {
            rule:"Pick a challenge task you are interested in ",
        },

    ]


    return(
        <div className="admin-dashboard-campaign-submission-div">
            <section className="admin-dashboard-campaign-link-listed-div">
                <div className="admin-dashboard-campaign-link-listed-head-text">
                    <p>
                        #GorimapaChallenge
                    </p>
                </div>
                <div className="admin-dashboard-campaigns-individual-submission-div">
                    {
                        campaignDetails.map((campaign, index) => {
                            return(
                                <div key={index} className="admin-dashboard-campaigns-individual-submission-div-bar">
                                    <div className="admin-dashboard-campaign-submission-campaign-title">
                                        <p className="admin-dashboard-campaign-name">
                                            {campaign.campaignName}
                                        </p>
                                    </div>
                                    <div className="admin-dashboard-submission-accept-reject-bar">

                                        <button className="admin-dashboard-reject-button">
                                            Rejected
                                        </button>
                                    </div>


                                </div>
                            )


                        })
                    }
                </div>

            </section>
            <section className="admin-dashboard-campaign-info">
                <div className="admin-dashboard-campaign-info-div">
                    <p className="admin-dashboard-campaign-info-header">
                        Campaign Info
                    </p>
                    <div className="admin-dashboard-campaign-info-body">
                        <p className="admin-dashboard-campaign-info-body-requirement">
                            Requirements
                        </p>
                        {
                            requirement.map((rule, index) => {
                                return(
                                    <div
                                        className="admin-dashboard-campaign-info-body-requirement-list"
                                        key={index}>
                                        <ul>
                                            <li>
                                                {rule.rule}
                                            </li>
                                        </ul>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}
export default AdminDashboardRejectedCampaign

import "./AcceptedSubmissions.scss"





export default function AcceptedSubmissions() {

  const campaignDetails = [
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
                      {campaign.campaignName}
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
      <section className="admin-dashboard-campaign-info">
        <div className="admin-dashboard-campaign-info-div">
          <h3 className="admin-dashboard-campaign-info">
            Accepted Info
          </h3>
          <div>
            <p>
            Number of submitted submissions
            </p>
          </div>  
        </div>
        <div className="admin-dashboard-campaign-info-div">
          <h3 className="admin-dashboard-campaign-info">
            320
          </h3>
          <div>
            <p>
            submitted links
            </p>
          </div>  
        </div>
      </section>
    </div>
  )
}

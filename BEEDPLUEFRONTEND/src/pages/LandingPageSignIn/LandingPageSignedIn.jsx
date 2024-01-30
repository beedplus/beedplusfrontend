import './LandingPageSignedIn.css'
import EnterChallence from "../../components/EnterChallence/EnterChallence"


export default function LandingPageSignedIn() {
  return (
    <div className="LandingPageSignedIn">
      <div className='EnterChallence'>
         <EnterChallence/>
      </div>
      <div className='LatestCampaigns'>
        <h3> LATEST CAMPAIGNS </h3>
      </div>
      <div className='Waterpourme'>

      </div>
    </div>
  )
}

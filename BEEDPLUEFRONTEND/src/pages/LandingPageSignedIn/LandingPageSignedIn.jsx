import "./LandingPageSignedIn.scss";
import EnterWin from "../../assets/Group 263.png";
import iconBall from "../../assets/iconoir_bell-notification.svg";
import { useLogout } from "../../hooks/useLogout";
import Advert from "../../assets/Group 90.png";
import ChallangeCardlist from "../../components/ChallangeCardList/ChallangeCardlist";

export default function LandingPageSignedIn() {
  return (
    <div className="landing-page-signed-in">
      <div className="signed-in-landing-page-advert-banner-div">
        <img src={Advert} alt="Advert" className="advert" />
      </div>
      <ChallangeCardlist id="latest" />
      <div className="signed-in-landing-page-call-to-action">

          {/*<img src={EnterWin} alt="EnterWin" className='enter-win2' />*/}
      </div>
      {/*<ChallangeCardlist className="new" campaign="new"/>*/}
       

    </div>
  );
}

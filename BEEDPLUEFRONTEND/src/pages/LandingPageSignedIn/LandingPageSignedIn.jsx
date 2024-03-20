import "./LandingpageSignedIn.scss";
import EnterWin from "../../assets/Group 263.png";
import iconBall from "../../assets/iconoir_bell-notification.svg";
import { useLogout } from "../../hooks/useLogout";
import { usebackendStore } from "../../store/store";
import { useEffect } from "react";
import Advert from "../../assets/Group 90.png";
import ChallangeCardlist from "../../components/ChallangeCardList/ChallangeCardlist";

// import Navbar from "../../components/Navbar/Navbar.jsx";
export default function LandingPageSignedIn() {
  const setActivetab = usebackendStore((state) => state.setActiveTab);
  useEffect(() => {
    setActivetab(true);
  }, [setActivetab]);
  return (
    <div className="landing-page-signed-in">
      {/*<Navbar/>*/}
      <div className="signed-in-landing-page-advert-banner-div">
        {/*<img src={Advert} alt="Advert" className="advert" />*/}
      </div>
      <ChallangeCardlist name="LATEST" />
      <div className="signed-in-landing-page-call-to-action"></div>
      <ChallangeCardlist className="new" name="NEW" />

      {/*//       <ChallangeCardlist id="latest" />*/}
      {/*//       <div className="signed-in-landing-page-call-to-action">*/}

      {/*          /!*<img src={EnterWin} alt="EnterWin" className='enter-win2' />*!/*/}
      {/*      </div>*/}
      {/*<ChallangeCardlist className="new" campaign="new"/>*/}
    </div>
  );
}

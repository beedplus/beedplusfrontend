import "./LandingPageSignedIn.scss";
import EnterWin from'../../assets/Group 263.png'
import iconBall from "../../assets/iconoir_bell-notification.svg";
import { useLogout } from "../../hooks/useLogout";
import Advert from '../../assets/Group 90.png';
import ChallangeCardlist from "../../components/ChallangeCardList/ChallangeCardlist";
export default function LandingPageSignedIn() {
  const { logout } = useLogout();
  return (
    <div className="landing-page-signed-in">
      <img src={Advert} alt="Advert" className='advert' />
      <ChallangeCardlist id="latest"/>
      <img src={EnterWin} alt="EnterWin" className='enter-win2' />
      <ChallangeCardlist className="new" campaign="new"/>
    </div>
  );
}


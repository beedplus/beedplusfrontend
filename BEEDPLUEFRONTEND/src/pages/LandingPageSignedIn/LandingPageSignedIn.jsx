import "./LandingPageSignedIn.scss";
import EnterWin from'../../assets/Group 263.png'
import iconBall from "../../assets/iconoir_bell-notification.svg";
import { useLogout } from "../../hooks/useLogout";
import Advert from '../../assets/Group 90.png';
import newEnterWin from '../../assets/enter-win2.svg'
import ChallangeCardlist from "../../components/ChallangeCardList/ChallangeCardlist";
export default function LandingPageSignedIn() {
  const { logout } = useLogout();
    console.log('ksalmdc')
  return (
    <div className="landing-page-signed-in">
      <div className="signed-in-landing-page-advert-banner-div">
          <img src={Advert} alt="Advert" className='advert' />
      </div>
      <ChallangeCardlist name="LATEST"/>
      <div className="signed-in-landing-page-call-to-action">
          <img src={EnterWin} alt="EnterWin" className='enter-win' />
          <img src={newEnterWin} alt="newEnterWin" className='enter-win2' />  
      </div>
      <ChallangeCardlist className="new" name="NEW"/>
       
    </div>
  );
}


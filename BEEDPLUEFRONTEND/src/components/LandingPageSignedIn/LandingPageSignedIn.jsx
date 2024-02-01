import "./LandingPageSignedIn.scss";
import iconBall from "../../assets/iconoir_bell-notification.svg";
import { useLogout } from "../../hooks/useLogout";
export default function LandingPageSignedIn() {
  const { logout } = useLogout();
  return (
    <div className="div">
      <div className="SeeChallenges">
        <h2>See Challenges</h2>
      </div>
      <div>
        <img src={iconBall} alt="iconBall" onClick={logout} />
      </div>
      <div>
        <div className="JD">
          <h3>JD</h3>
        </div>
      </div>
    </div>
  );
}

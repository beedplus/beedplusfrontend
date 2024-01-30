import "./LandingPageSignedIn.css"
import iconBall from "../../assets/iconoir_bell-notification.svg"

export default function LandingPageSignedIn() {
  return (
    <div className="div">
      <div className="SeeChallenges">
        <h2>See Challenges</h2>
      </div>
      <div>
        <img src={iconBall} alt="iconBall" />
      </div>
      <div>
          <div className="JD">
            <h3>JD</h3>
          </div>
      </div>
    </div>
  )
}

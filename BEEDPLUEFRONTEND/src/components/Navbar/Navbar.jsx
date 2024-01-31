import "./Navbar.scss"
import Beed from "../../assets/image1.svg"
import { useState } from "react";
import LandingPage from '../LandingPage/LandingPage';
import LandingPageSignedIn from '../LandingPageSignedIn/LandingPageSignedIn'; 

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <nav className="nav">
      <img src={Beed} alt="website logo" />
      {isLoggedIn ? (
        <LandingPage />
      ) : (
        <LandingPageSignedIn/>
      )}
    </nav>
  )
}

import React from 'react'
import "../AdminDashboard/AdminDashboard.scss";
import beepLogo from "../../assets/image 2.png";

const FixedNavbar = () => {
  return (
        <div className="fixed-navigation-bar">
        <img src={beepLogo} className="beep-logo" />
        <header className="campaign-header">Campaigns</header>
        <button className="log-out-button">LOG OUT</button>
      </div>
  )
}

export default FixedNavbar

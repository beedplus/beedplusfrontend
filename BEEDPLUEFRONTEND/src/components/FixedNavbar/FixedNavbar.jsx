import React from 'react'
import "../AdminDashboardRequestPayment/AdminDashboard.scss";
import beepLogo from "../../assets/image 2.png";
import { useLogout } from "../../hooks/useLogout.jsx";


const FixedNavbar = () => {
    const { logout } = useLogout();

    return (
        <div className="fixed-navigation-bar">
        <img src={beepLogo} className="beep-logo" />
        <header className="campaign-header">Campaigns</header>
        <button className="log-out-button"
                onClick={logout}>LOG OUT</button>
      </div>
  )
}

export default FixedNavbar

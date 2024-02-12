import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import notificationIcon from "../../assets/iconoir_bell-notification.png";
import "../AdminDashboardRequestPayment/AdminDashboard.scss";

const SearchNavigationbar = () => {
  return (
    <div className="navigation-bar">
    <div className="input-field-container">
        <input className="search-bar" placeholder="Search" />
        <IoSearchOutline className="search-button" />
    </div>
    <img src={notificationIcon} className="notification-icon" />
    <div className="user-initials"></div>
</div>
  )
}

export default SearchNavigationbar

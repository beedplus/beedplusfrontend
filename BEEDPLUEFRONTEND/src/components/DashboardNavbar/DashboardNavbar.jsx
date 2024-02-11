import React from 'react'
import profilePic from "../../assets/Link → Button.svg"
import SearchIcon from "../../assets/searchicon.png";
import "./DashboardNavbar.scss"
function DashboardNavbar() {
  return (
    <div className='dashboard'><div className='search-bar-profilePic'><div className='search-bar'><img src={SearchIcon} className='searchicon'/><input placeholder={"Search"}  /></div><img src={profilePic} className='profile-pic'/></div></div>
  )
}

export default DashboardNavbar
import React from "react";
import "./SideBarAdmin.scss";
import image1 from "../../assets/image 2.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAdminLogout } from "../../hooks/useAdminLogout.jsx";

export default function SideBarAdmin() {
  const [clickedDiv, setClickedDiv] = useState(null);
  const { logout } = useAdminLogout();
  const handleClicked = (index) => {
    setClickedDiv(index);
  };

  return (
    <div className="Sidebaradmin">
      <div className="Sidebaradmin-div">
        <div className="Sidebaradmin-div-logo">
          <img src={image1} alt="div-logo" />
        </div>
        <div className="Sidebaradmin-list">
          <div>
            <NavLink
              to="/admin"
              isActive={(match, location) => location.pathname === "/admin"}
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
              end
              // className="side-links"
            >
              Campaigns
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/admin/claim"
              // isActive={(match, location) => location.pathname === "/claim"}
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
              className="side-links"
            >
              Claim Requests
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/admin/acceptedsubmissions"
              isActive={(match, location) =>
                location.pathname === "/admin/acceptedsubmissions"
              }
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
              className="side-links"
            >
              Accepted
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/admin/rejected-campaign"
              isActive={(match, location) =>
                location.pathname === "/admin/rejected-campaign"
              }
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
              className="side-links"
            >
              Rejected
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/admin/paid"
              isActive={(match, location) =>
                location.pathname === "/admin/paid"
              }
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
              className="side-links"
            >
              Paid
            </NavLink>
          </div>
        </div>
        <div className="Logout-Sidebaradmin-div">
          <div className="Logout-Sidebaradmin" onClick={() => logout()}>
            LOG OUT
          </div>
        </div>
      </div>
    </div>
  );
}

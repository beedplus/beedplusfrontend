import "./Navbar.scss"
import Beed from "../../assets/image1.svg"
import { useState } from "react";
import { usebackendStore } from "../../store/store";
import { FaRegBellSlash } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Navbar() {
  const accessToken = usebackendStore((state) => state.accessToken);
 
 if (accessToken) { return (<nav className="nav">
                    <div>
                        <img src={Beed} alt="website logo" />
                    </div>
                    <div className="signed-in-navbar-div">
                      <button>
                          {/* <a href= "/auth/Signup">CAMPAIGNS</a> */}
                      </button>
                      <p className="singned-nav-user-icon">
                          <a href = "/notification"><FaRegBellSlash className="navbar-notification"/></a>
                      </p>
                      <p className="navbar-profile-icon-div">
                          <a href="/profile" > <FaRegUser className="navbar-profile-icon" /> </a>

                      </p>
                    </div>
                  
                  </nav>)}
  else {return (
   
                     <nav className="nav">
                  <img src={Beed} alt="website logo" />
                  <div className="link-holder">
                    <a href="/auth/Signup" ><button className="nav-button"style={{width: 90.3, height: 28.21}} >Earn Now </button></a>
                    <a href = "/auth/Signin">Login</a>
                  </div>
                </nav>)}
  
}

import "./Navbar.scss"
import Beed from "../../assets/image1.svg"
import { useState } from "react";
import { usebackendStore } from "../../store/store";
import { Link } from "react-router-dom"

export default function Navbar() {
  const accessToken = usebackendStore((state) => state.accessToken);
 
 if (accessToken) { return (<nav className="nav">
                       <a href  = '/'><img src={Beed} alt="website logo" /></a>
                    <div>  
                      <button onclick="location.href='/signup'"><a href = "/auth/Signup">CAMPAIGNS</a></button>
                      <a href = "/auth/Signup">Login</a>
                    </div>
                  
                  </nav>)}
  else {return (
                     <nav className="nav">
                       <img src={Beed} alt="website logo" />
                  <div className="link-holder">
                    <button onclick="location.href='/signup'"className="nav-button"style={{width: 90.3, height: 28.21}} >Earn Now </button>
                    <a href = "/auth/Signup">Login</a>
                  </div>
                </nav>)}
  
}

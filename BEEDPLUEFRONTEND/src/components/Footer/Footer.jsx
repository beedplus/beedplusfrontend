import Beedfooter from "../../assets/beedplusfooter.jpg"


import "./Footer.scss"
import SocialComponents from "../SocialComponents/SocialComponents"
import {Link} from "react-router-dom";

export default function Footer() {
  return (
   <footer className="footer">
        <div className="section-one">
           <div className="section-two">
               <Link to="/"><img className="beedplusfooterlogo" src={Beedfooter} alt="beed logo" /></Link>
           </div>
           <SocialComponents/>
        </div>
        <div className="line"></div>
        <div className="copyright">
          <h3>@ Copyright BEED+ 2024 Company. All rights reserved</h3>
        </div>     
   </footer>
  )
}

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
          <h3>@ Copyright BEED+ 2024 Company. All rights reserved   <span><a href="https://docs.google.com/document/d/1V3_-SoFNeLzz6XtE_cNDcvLuGvC8s7V3Axy4Y9A75rM/edit?usp=sharing" >  "Terms of Service" </a>< /span>  and<span> <a href="https://docs.google.com/document/d/1B86o236rNcMtmkixEW7YtwJHxakLZbJ1Zq9PSAMZdXo/edit?usp=sharing">"Privacy Policy"</a>  </span></h3>
        </div>     
   </footer>
  )
}

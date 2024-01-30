import image from "../../assets/image 1.png" 
import "./Footer.css"
import SocialComponents from "../SocialComponents/SocialComponents"

export default function Footer() {
  return (
   <footer className="footer">
        <div className="section-one">
           <div className="section-two">
              <img src={image} alt="beed logo" />
              {/* <input type="text" className="text"/> */}
           </div>
           <SocialComponents/>
        </div>
        <div className="line"></div>
        <div className="Copyright">
          <h3>@ Copyright BEED+ 2024 Company. All rights reserved</h3>
        </div>     
   </footer>
  )
}

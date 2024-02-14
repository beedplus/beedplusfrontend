import "./SocialComponents.scss"
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function SocialComponents() {
    return (
        <div>
            <div className="SocialComponents">
                <h3>SOCIAL MEDIA</h3>
               <div className="image-list">
                   <FaFacebookSquare className="social-component-icons" />
                   <FaXTwitter className="social-component-icons" />
                   <FaInstagram className="social-component-icons" />
                   <FaTiktok className="social-component-icons" />
               </div>
            </div>
        </div>
    )
}

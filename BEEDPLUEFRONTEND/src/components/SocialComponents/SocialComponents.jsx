import "./SocialComponents.css"
import facebook from "../../assets/Group 29.svg"
import x from "../../assets/Group 30.svg"
import instram from "../../assets/Group 31.png"
import linkedin from "../../assets/Group 32.png"

export default function SocialComponents() {
    return (
        <div>
            <div className="SocialComponents">
                <h3>SOCIAL MEDIA</h3>
               <div className="image-list">
                  <img src={facebook} alt="facebook" />
                  <img src={x} alt="x" />
                  <img src={instram} alt="instram" />
                  <img src={linkedin} alt="linkedin" />
               </div>
            </div>
        </div>
    )
}

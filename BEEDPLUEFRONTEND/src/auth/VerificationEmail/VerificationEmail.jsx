import "./VerificationEmail.scss"
import image from "../../assets/beed.svg";

export default function VerificationEmail() {
    return (
        <div>
            <div className="container">
                <div className="model">
                    <div className="image">
                        <img src={image} alt="beed logo" />
                    </div>
                    <div  className="model-div">
                        <p>
                            A verification link has been sent to
                            your email, kindly check your email to verify
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

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
                            We've sent a verification link to your email.
                            Please check your inbox to complete the verification process.
                        </p>
                        <p>
                           you can now close this page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

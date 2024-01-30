import "./Signup.css";
import image from "../../assets/beed.svg"


export default function Signup() {
    return (
        <div className='Signup'>
            <div className='form-div'>
                <form>
                    <div className="image">
                        <img src={image} alt="beed logo" />
                    </div>
                    <div className="SignUp">
                        <h3>Sign Up With Email</h3>
                    </div>
                    <div className="input-list">
                        <div className="FirstName">
                            <input type="text" placeholder="Enter First Name" />
                        </div>
                        <div className="LastName">
                            <input type="text" placeholder="Enter Last Name" />
                        </div>
                        <div className="email">
                            <input type="email" placeholder="Enter Your Email" />
                        </div>
                        <div className="password">
                             <input type="password" placeholder="Enter Your Password" />
                        </div>
                        <div className="confirmPassword">
                            <input type="password" placeholder="Enter Your Password" />
                        </div>  
                    </div>
                    <div className="next">
                        <button>Next</button>
                    </div>
                    <div className="Already">
                        <h3>Already have an account? </h3>
                        <div className="Sign">
                             Sign In
                        </div>  
                    </div>
                </form>
            </div>
        </div>
    )
}

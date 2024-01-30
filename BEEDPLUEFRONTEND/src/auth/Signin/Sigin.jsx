import "./Sign.css"
import image from "../../assets/beed.svg"
import { RiMailLine } from "react-icons/ri";
import { GoEye } from "react-icons/go";


export default function Sigin() {
  return (
    <div className='sign_Login'>
    <div className='sign-form-div'>
        <form>
            <div className="image">
                <img src={image} alt="beed logo" />
            </div>
            <div className="Login">
                <h3>Login to your BEED+ account with 
                    your email and password</h3>
            </div>
            <div className="input-list">
                <div className="email">
                    <div className="RiMailLine">
                      <RiMailLine />
                    </div>
                    <input type="email" placeholder="Enter Your Email" />
                </div>
                <div className="password">
                    <div className="GoEye">
                     <GoEye />
                    </div>
                     <input type="password" placeholder="Enter Your Password" />
                </div>
            </div>
            <div className="next">
                <button>Next</button>
            </div>
        </form>
    </div>
</div>

  )
}

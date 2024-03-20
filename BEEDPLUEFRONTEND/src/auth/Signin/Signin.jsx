import { useState } from "react";
import { RiMailLine } from "react-icons/ri";
import { GoEye } from "react-icons/go";
import { FaRegEyeSlash } from "react-icons/fa";
import "./Sign.scss";
import image from "../../assets/loginlogo.jpg";
import { useLogin } from "../../hooks/useLogin";
import image2 from "../../assets/image 1.png";
import loading from "../../assets/loading.gif";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom"

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPaasword] = useState(false)


  const { login, error, ispending } = useLogin();


  const handleShowPassword = () => {
    setShowPaasword(!showPassword)
  }


  const validateInputs = () => {
    let isValid = true;


    if (!email.trim() && !password.trim()) {
      toast.error("Email and password are required");
      isValid = false;
    } else if (!email.trim() && password.trim()) {
      toast.error("Email is required");
      isValid = false;
    } else if (email.trim() && !password.trim()) {
      toast.error("Password is required");
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Invalid email format");
      isValid = false;
    }

    return isValid;
  };

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      login(email, password);
    } else {
      return error
    }
  };

  return (
    <div className="sign_Login">
      <div className="sign-form-div">
        <form onSubmit={handleSubmit}>
          <div className="image">
            <img src={image} alt="beed logo" />
          </div>
          <div className="sign_LoginLogin">
            <h3>Login to your BEED+ account with your email and password</h3>
          </div>
          <div className="sign_Logininput-list">
            <div className="sign_Loginemail">
              <div className="sign_LoginRiMailLine">
                <RiMailLine />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={handleInputChanges}
              />
            </div>
            <div className="sign_Loginpassword">
              <div className="sign_LoginGoEye" onClick={handleShowPassword}>{showPassword ? <GoEye /> : <FaRegEyeSlash />} </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={handleInputChanges}
              />
            </div>
          </div>

          <div className="sign_Loginnext">
            <button type="submit">Login</button>
          </div>
          <div className="Already">
            <h3>Do not have an account ?  </h3>
            <div className="Sign">
              <Link to="../../auth/Signup" className="link">
                Sign Up
              </Link>
            </div>
           {/* changing the loading word to the isloading image gif */}
           {ispending && <img className="isloading-signin-page" src={loading} alt='loading' />}
           {error && <p className="login-error-text"> {error}</p>}
          </div>
        </form>
      </div>
      <div className="sign-in-terms-and-condition">
        <div className="agreetoArtic">
          By continuing you agree to the Beedplus  <span><Link to="/TermsofServiceandPrivacyPolicy" target="_blank" >Terms of Service</Link></span> and<span> <Link to="/PrivacyPolicy" target="_blank">Privacy Policy</Link>  </span>
        </div>
      </div>
    </div>
  );
}

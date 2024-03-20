import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { FaRegEyeSlash } from "react-icons/fa";
import { RiMailLine } from "react-icons/ri";
import { GoEye } from "react-icons/go";
import { Link } from "react-router-dom";
import "./Signup.scss";
import image from "../../assets/loginlogo.jpg";
import { useSignUp } from "../../hooks/useSignup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image2 from "../../assets/image 1.png";
import { useNavigate } from "react-router-dom";
import loading from "../../assets/loading.gif";

export default function Signup() {
  const { signup, error, ispending } = useSignUp();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPaasword] = useState(false)
  const [seeConfirPassword, setSeeconfirPassword] = useState(false)

  const navigate = useNavigate();

  const validateInputs = () => {
    let isValid = true;

    if (!firstName.trim()) {
      toast.error("Please fill in the first name!");
      isValid = false;
    } else if (!lastName.trim()) {
      toast.error("Please fill in the last name!");
      isValid = false;
    } else if (!email.trim()) {
      toast.error("Please fill in the email!");
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Invalid email format");
      isValid = false;
    } else if (!password.trim()) {
      toast.error("Please fill in the password!");
      isValid = false;
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      isValid = false;
    }

    return isValid;
  };

  const handleShowPassword = () => {
    setShowPaasword(!showPassword)
  }

  const handleseeConfirPassword = () => {
    setSeeconfirPassword(!seeConfirPassword)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      toast.success("sucess!!!!!!");
      signup(firstName, lastName, email, password);
    } else {
      return error
    }
  };

  return (
    <div className="Signup">
      <div className="sign-up-div">
        <div className="form-div">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="image">
                <img src={image} alt="beed logo" />
              </div>
              <div className="SignUp">
                <h3>Sign Up With Email</h3>
              </div>
              <div className="input-list">
                <div>
                  <div className="input-icons">
                    <BsPerson />
                  </div>
                  <input
                      className="FirstName"
                      type="text"
                      name="firstName"
                      placeholder="Enter First Name"
                      value={firstName}
                      onChange={handleInputChange}
                  />
                </div>
                <div>
                  <div className="input-icons">
                    <BsPerson />
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    className="LastName"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div >
                  <div className="input-icons">
                    <RiMailLine />
                  </div>
                  <input
                    type="email"
                    className="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>
                <div >
                  <div className="GoEye input-icons " onClick={handleShowPassword}>{showPassword ? <GoEye /> : <FaRegEyeSlash />}</div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>
                <div >
                  <div className="GoEye input-icons" onClick={handleseeConfirPassword}>{seeConfirPassword ? <GoEye /> : <FaRegEyeSlash />} </div>
                  <input
                    type={seeConfirPassword ? "text" : "password"}
                    name="confirmPassword"
                    className="confirmPassword"
                    placeholder="Confirm Your Password"
                    value={confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="next">
                <button type="submit">Next</button>
              </div>
              <div className="Already">
                <h3>Already have an account? </h3>
                <div className="Sign">
                  <Link to="../../auth/Signin" className="link">
                    Sign In
                  </Link>
                </div>
                {/* changing the loading word to the isloading image gif */}
                {ispending && <img className="isloading-signup-page" src={loading} alt='loading' />}
                {error && <p className="text">{error}</p>}
              </div>
            </div>

          </form>
        </div>
        <div className="agree">
          {/* <div className="agreetoArtic">
            By continuing you agree to the Beedplus  <span><a href="https://docs.google.com/document/d/1V3_-SoFNeLzz6XtE_cNDcvLuGvC8s7V3Axy4Y9A75rM/edit?usp=sharing" >Terms of Service</a></span> and<span> <a href="https://docs.google.com/document/d/1B86o236rNcMtmkixEW7YtwJHxakLZbJ1Zq9PSAMZdXo/edit?usp=sharing">Privacy Policy</a>  </span>
          </div> */}
          <div className="agreetoArtic">
            By continuing you agree to the Beedplus  <span><Link to="/TermsofServiceandPrivacyPolicy" target="_blank" >Terms of Service</Link></span> and<span> <Link to="/PrivacyPolicy" target="_blank">Privacy Policy</Link>  </span>
          </div>
        </div>
      </div>
    </div>
  );
}

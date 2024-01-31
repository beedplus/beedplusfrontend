import { useState } from "react";
import { RiMailLine } from "react-icons/ri";
import { GoEye } from "react-icons/go";
import "./Sign.scss";
import image from "../../assets/beed.svg";
import { useLogin } from "../../hooks/useLogin";
export default function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, ispending } = useLogin();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateInputs = () => {
    let isValid = true;

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
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
      console.log(email, password);
      login(email, password);
    } else {
      console.log("Invalid inputs. Please fix the errors.");
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
              {emailError && <div className="error-message">{emailError}</div>}
            </div>


            <div className="sign_Loginpassword">
              <div className="sign_LoginGoEye">
                <GoEye />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={handleInputChanges}
              />
              {passwordError && (
                <div className="error-message">{passwordError}</div>
              )}
            </div>
          </div>


          <div className="sign_Loginnext">
            <button type="submit">Next</button>
          </div>


        </form>
      </div>
    </div>
  );
}

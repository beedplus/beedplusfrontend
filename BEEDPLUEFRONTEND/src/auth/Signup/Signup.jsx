import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { RiMailLine } from "react-icons/ri";
import { GoEye } from "react-icons/go";
import { Link } from "react-router-dom";
import "./Signup.scss";
import image from "../../assets/beed.svg";
import { useSignUp } from "../../hooks/useSignup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image2 from "../../assets/image 1.png";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { signup, error, ispending } = useSignUp();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      {/*<div className="beedlogo">*/}
      {/*  <img src={image2} alt="beed logo" />*/}
      {/*</div>*/}
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <div className="image">
            <img src={image} alt="beed logo" />
          </div>
          <div className="SignUp">
            <h3>Sign Up With Email</h3>
          </div>
          <div className="input-list">
            <div className="FirstName">
              <div className="BsPerson">
                <BsPerson />
              </div>
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                value={firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="LastName">
              <div className="BsPerson">
                <BsPerson />
              </div>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="email">
              <div className="RiMailLine">
                <RiMailLine />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="password">
              <div className="GoEye">
                <GoEye />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <div className="confirmPassword">
              <div className="GoEye">
                <GoEye />
              </div>
              <input
                type="password"
                name="confirmPassword"
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
            {ispending && <p className="word">Loading.......</p>}
            {error && <p className="text">{error.message}</p>}
          </div>
        </form>
      </div>
      <div className="agree">
        <div className="agreetoArtic">
          Click “Next” to agree to Artic’s Terms of Service and acknowledge that
          Beed+ Policy applies to you
        </div>
      </div>
    </div>
  );
}

import  { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { RiMailLine } from 'react-icons/ri';
import { GoEye } from 'react-icons/go';
import { Link } from 'react-router-dom';
import "./Signup.scss";
import image from "../../assets/beed.svg";
import last from "../../assets/Group1585.svg";
import { useSignUp } from "../../hooks/useSignup";
export default function Signup() {
  const { signup, error, ispending } = useSignUp();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateInputs = () => {
    let isValid = true;

    if (!firstName.trim()) {
      setFirstNameError("First name is required");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (!lastName.trim()) {
      setLastNameError("Last name is required");
      isValid = false;
    } else {
      setLastNameError("");
    }

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

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError("");
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
    console.log(firstName, lastName, email, password);
    if (validateInputs()) {
      signup(firstName, lastName, email, password);
    } else {
      console.log("Invalid inputs. Please fix the errors.");
    }
  };

  return (
    <div className="Signup">
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
              {firstNameError && (
                <div className="error-message">{firstNameError}</div>
              )}
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
              {lastNameError && (
                <div className="error-message">{lastNameError}</div>
              )}
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
              {emailError && <div className="error-message">{emailError}</div>}
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
              {passwordError && (
                <div className="error-message">{passwordError}</div>
              )}
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
              {confirmPasswordError && (
                <div className="error-message">{confirmPasswordError}</div>
              )}
            </div>
          </div>
          <div className="next">
            <button type="submit">Next</button>
          </div>
          <div className="Already">
            <h3>Already have an account? </h3>
            <div className="Sign">
              <Link to="/LandingPageSignedIn">Sign In</Link>
            </div>
          </div>
          <div className="last">
            <img src={last} alt="last" />
          </div>
        </form>
      </div>
    </div>
  );
}

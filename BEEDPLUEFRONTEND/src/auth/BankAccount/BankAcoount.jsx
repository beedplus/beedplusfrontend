import { useState } from "react";
import { RiMailLine } from "react-icons/ri";
import { GoEye } from "react-icons/go";
import "./BankAcoount.scss";
import image from "../../assets/beed.svg";
import { useLogin } from "../../hooks/useLogin";
import image2 from "../../assets/image 1.png" 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function BankAcoount() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, ispending } = useLogin();
 

  const validateInputs = () => {
    let isValid = true;

    if (!email.trim()) {
      toast.error("Email is required");
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
     toast.error("Invalid email format");
      isValid = false;
    } else {
      toast.error("pleease input your password");
    }

    if (!password.trim()) {
      toast.error("Password is required");
      isValid = false;
    } else {
      toast.error("pleease input your password");
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
      toast.success("sucess!!!!!");
    } else {
      toast.error("Invalid inputs. Please fix the errors.");
    }
  };

  return (
    <div className="sign_Login">
       <div   className='beedlogo'>
          <img src={image2} alt="beedlogo" />
      </div>
      <div className="sign-form-div">
        <form onSubmit={handleSubmit}>
          <div className="image">
            <img src={image} alt="beed logo" />
          </div>
          <div className="sign_LoginLogin">
            <h3>Add your correct bank account 
              details to withdraw your earnings</h3>
          </div>
          <div className="sign_Logininput-list"> 
            <div className="sign_Loginemail">
              <div className="sign_LoginRiMailLine">
                <RiMailLine />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Bank Name"
                value={email}
                onChange={handleInputChanges}
              />
            </div>
            <div className="sign_Loginpassword">
              <div className="sign_LoginGoEye">
                <GoEye />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Account Name"
                value={password}
                onChange={handleInputChanges}
              />
            </div>
            <div className="sign_Loginpassword">
              <div className="sign_LoginGoEye">
                <GoEye />
              </div>
              <input
                type="number"
                name="number"
                placeholder="Enter Your Account Name"
                value={password}
                onChange={handleInputChanges}
              />
            </div>
          </div>


          <div className="sign_Loginnext">
            <button type="submit">Login</button>
          </div>


        </form>
      </div>
    </div>
  );
}



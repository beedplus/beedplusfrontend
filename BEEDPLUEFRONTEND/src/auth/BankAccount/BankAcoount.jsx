import { useEffect, useState } from "react";
import { RiMailLine } from "react-icons/ri";
import { GoEye } from "react-icons/go";
import { BsBank } from "react-icons/bs";
import "./BankAcoount.scss";
import image from "../../assets/beed.svg";
import image2 from "../../assets/image 1.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetBankAccount } from "../../hooks/useGetBankAccount";
import { useVerifyAccountNumber } from "../../hooks/useVerifyAccountNumber"

export default function BankAcoount() {
  const [selectedBank, setSelectedBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const { documents, error, isPending } = useGetBankAccount();
  const {data} = useVerifyAccountNumber();

  useEffect(() => {
    if (selectedBank) {
      const selectedBankObject = documents.find((bank) => bank.code === selectedBank);
      if (selectedBankObject) {
        console.log("Selected Bank Slug:",   selectedBankObject.code );
      }
    }
  }, [selectedBank, documents]);

  
  
  useEffect(() => {
  }, [selectedBank]);

  useEffect(() => {
  }, [documents]);

  const validateInputs = () => {
    let isValid = true;

    if(!selectedBank) {
      toast.error("Please select a bank");
      isValid = false;
    }else if (!accountNumber.trim() || accountNumber.length < 10) {
      toast.error("Account number is required and must be at least 10 digits");
      isValid = false;
    } else  if(accountNumber.length === 10){
      data()
    }

    return isValid;
  };
 
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      toast.success("Please wait for some seconds");
    } else {
      return error;
    }
  };



  return (
    <div className="sign_Login">
      <div className="beedlogo">
        <img src={image2} alt="beedlogo" />
      </div>
      <div className="sign-form-div">
        <form onSubmit={handleSubmit}>
          <div className="image">
            <img src={image} alt="beed logo" />
          </div>
          <div className="sign_LoginLogin">
            <h3>
              Add your correct bank account details to withdraw your earnings
            </h3>
          </div>
          <div className="sign_Logininput-list">
            <div className="sign_Loginemail">
              <div className="sign_LoginRiMailLine">
                 <BsBank />
              </div>
              <select
               name="selectedBank"
               className="select_list"
               value={accountNumber}
               onChange={(e) => setAccountNumber(console.log(e.target.value))}
               
              >
                <option value="" disabled>
                  Select Your Bank
                </option>
                {documents.map((bank) => (
                  <option className="" key={bank.id} value={bank.code}>
                    {bank.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="sign_Loginpassword">
              <div className="sign_LoginGoEye">
                  <BsBank />
              </div>
              <input
                 type="number"
                 name="account_number"
                 placeholder="Enter account number"
                //  value={accountNumber}
                 onChange={(e) => setAccountNumber(e.target.value)}
                
              />
            </div>
            <div className="sign_Loginpassword">
              <div className="sign_LoginGoEye">
                <BsBank />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                disabled                   
               
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


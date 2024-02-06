import { useEffect, useState } from "react";
import { RiMailLine } from "react-icons/ri";
import { GoEye } from "react-icons/go";
import { BsBank } from "react-icons/bs";
import "./BankAcoount.css";
import image from "../../assets/beed.svg";
import image2 from "../../assets/image 1.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetBankAccount } from "../../hooks/useGetBankAccount";
import { useVerifyAccountNumber } from "../../hooks/useVerifyAccountNumber"
import { useSubmitBankAccount } from "../../hooks/useSubmitBankAccount";
import { usebackendStore } from "../../store/store";
export default function BankAcoount() {
  const [sortCode, setSortCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const { documents, error, isPending } = useGetBankAccount(); 
  const {  submitbankAccount, error: err, ispending: ispend} = useSubmitBankAccount();
  const id =  usebackendStore(state => state.user.userId) 
  const {document} = useVerifyAccountNumber(sortCode, accountNumber);

  const validateInputs = () => {
    let isValid = true;

    if (!sortCode) {
      toast.error("Please select a bank");
      isValid = false;
    } else if (!accountNumber.trim() || accountNumber.length < 10) {
      toast.error("Account number is required and must be at least 10 digits");
      isValid = false;
    } else if(accountNumber.length === 10) {
      console.log(document);
    }else if(!document){
      toast.error("Please check your account number");
      isValid = false;
    }

    return isValid;
  };
 
   const handleSubmit = (e) =>  {
    e.preventDefault()
    if (validateInputs() && document.data.Bank_name) {
     return  submitbankAccount(id, document.data.Bank_name  ,  document.data.account_name, accountNumber)
    } else {
      return error;
    }
    
   }


  return (
    document && document.data && (<div className="sign_Login">
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
          <div className="bank-account-selection-div">
            <div className="select-bank">
              <div className="sign_LoginRiMailLine">
                 <BsBank />
              </div>
              <select
               name="selectedBank"
               className="select-list"
               value={sortCode}
               onChange={(e) => setSortCode(e.target.value)}
               
              >
                <option value="" disabled>
                  Select Your Bank
                </option>
                {documents.map((bank) => (
                  <option  className="" key={bank.id} value={bank.code}>
                    {bank.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="bank-account-number-input">
              <div className="sign_LoginGoEye">
                  <BsBank />
              </div>
              <input
                 type="text"
                 name="account_number"
                 placeholder="Enter account number"
                 className="account-number-input-field"
                 maxLength="10"
                 value={accountNumber}
                 onChange={(e)  => setAccountNumber(e.target.value)}
              />
            </div>
            <div className="account-name-field">
              <div className="sign_LoginGoEye">
                <BsBank />
              </div>
              {document.data.account_name}
            </div>
          </div>

          <div className="sign_Loginnext">
            <button type="submit">Login</button>
              {ispend&&<h4>Loading......</h4>}
              {err&&<p>{err.message}</p>}
          </div>
        </form>
      </div>
    </div>)
  );
}




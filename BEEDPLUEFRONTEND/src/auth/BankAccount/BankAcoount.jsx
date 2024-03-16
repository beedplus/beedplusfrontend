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
import { useVerifyAccountNumber } from "../../hooks/useVerifyAccountNumber";
import { useSubmitBankAccount } from "../../hooks/useSubmitBankAccount";
import { usebackendStore } from "../../store/store";
import loading from "../../assets/loading.gif";
import { nanoid } from "nanoid";
export default function BankAcoount() {
  const [sortCode, setSortCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const { documents, error, isPending } = useGetBankAccount();
  const {
    submitbankAccount,
    error: err,
    ispending: ispend,
  } = useSubmitBankAccount();
  const id = usebackendStore((state) => state.user.userId);
  const { document } = useVerifyAccountNumber(sortCode, accountNumber);

  const validateInputs = () => {
    let isValid = true;

    if (!sortCode) {
      toast.error("Please select a bank");
      isValid = false;
    } else if (!accountNumber.trim() || accountNumber.length < 10) {
      toast.error("Account number is required and must be at least 10 digits");
      isValid = false;
    } else if (accountNumber.length === 10) {
      console.log(document);
    } else if (!document) {
      toast.error("Please check your account number");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs() && bankName) {
      return submitbankAccount(
        id,
        bankName,
        document.data.account_name,
        accountNumber
      );
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
            <h3>Add your bank account details.</h3>
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
                onChange={(e) => {
                  const selectedBank = documents.find(
                    (bank) => bank.code === e.target.value
                  );
                  if (selectedBank) {
                    setSortCode(e.target.value);
                    setBankName(selectedBank.bank_name); // assuming setBankName is your state update function for bank name
                  }
                }}
              >
                <option value="" disabled>
                  Select Your Bank
                </option>
                {documents.map((bank) => (
                  <option className="" key={nanoid()} value={bank.code}>
                    {bank.bank_name}
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
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>
            <div className="account-name-field">
              <div className="sign_LoginGoEye">
                <BsBank />
              </div>
              {document && document.data && document.data.account_name}
            </div>
          </div>

          <div className="sign_Loginnext">
            <button type="submit">Add Account Number</button>
            {/* {ispend && <h4>Loading......</h4>} */}
            {/* changing the loading word to the isloading image gif */}
            {ispend && <img className="isloading-bankaccount-page" src={loading} alt='loading' />}
            {err && <p>{err.message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

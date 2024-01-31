import  { useState } from 'react';
import "./BankAcoount.scss";
import image from "../../assets/beed.svg";

export default function BankAcoount() {
  const [bankName, setBankName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const [bankNameError, setBankNameError] = useState('');
  const [accountNameError, setAccountNameError] = useState('');
  const [accountNumberError, setAccountNumberError] = useState('');

  const validateInputs = () => {
    let isValid = true;

    if (!bankName.trim()) {
      setBankNameError('Bank Name is required');
      isValid = false;
    } else {
      setBankNameError('');
    }

    if (!accountName.trim()) {
      setAccountNameError('Account Name is required');
      isValid = false;
    } else {
      setAccountNameError('');
    }

    if (!accountNumber.trim()) {
      setAccountNumberError('Account Number is required');
      isValid = false;
    } else if (!/^\d+$/.test(accountNumber)) {
      setAccountNumberError('Invalid Account Number format');
      isValid = false;
    } else {
      setAccountNumberError('');
    }

    return isValid;
  };

  const handleAddAccount = () => {
    if (validateInputs()) {
      // Perform logic to add the bank account
      console.log('Bank account added successfully');
    } else {
      console.log('Invalid inputs. Please fix the errors.');
    }
  };

  return (
    <div className="BankAct">
      <div className="BankAct_div">
        <div className="image-one">
          <img src={image} alt="beed logo" />
        </div>
        <div className="BankAct-form">
          <h3>
            Add your correct bank account
            details to withdraw your earnings
          </h3>
          <div className="BankAct-input_div">
            <div className="FirstName">
              <input
                type="text"
                placeholder="Enter Your Bank Name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
              {bankNameError && <div className="error-message">{bankNameError}</div>}
            </div>
            <div className="LastName">
              <input
                type="text"
                placeholder="Enter Your Account Name"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />
              {accountNameError && <div className="error-message">{accountNameError}</div>}
            </div>
            <div className="LastName">
              <input
                type="text"
                placeholder="Enter Your Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
              {accountNumberError && <div className="error-message">{accountNumberError}</div>}
            </div>
            <div className="BankAct-button_div">
              <button onClick={handleAddAccount}>
                Add Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


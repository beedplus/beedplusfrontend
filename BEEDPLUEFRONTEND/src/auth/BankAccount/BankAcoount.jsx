import  { useState } from 'react';
import "./BankAcoount.scss";
import image from "../../assets/beed.svg";
import image2 from "../../assets/image 1.png" 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BankAcoount() {
  const [bankName, setBankName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const validateInputs = () => {
    let isValid = true;

    if (!bankName.trim()) {
      toast.error('Bank Name is required');
      isValid = false;
    } else {
      toast.error('');
    }

    if (!accountName.trim()) {
      toast.error('Account Name is required');
      isValid = false;
    } else {
      toast.error('');
    }

    if (!accountNumber.trim()) {
      toast.error('Account Number is required');
      isValid = false;
    } else if (!/^\d+$/.test(accountNumber)) {
      toast.error('Invalid Account Number format');
      isValid = false;
    } else {
      toast.error('');
    }

    return isValid;
  };

  const handleAddAccount = () => {
    if (validateInputs()) {
      console.log('Bank account added successfully');
    } else {
      console.log('Invalid inputs. Please fix the errors.');
    }
  };

  return (
    <div className="BankAct">
      <img src={image2} alt="beedlogo" />

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
            </div>
            <div className="LastName">
              <input
                type="text"
                placeholder="Enter Your Account Name"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />
            </div>
            <div className="LastName">
              <input
                type="text"
                placeholder="Enter Your Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
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


import "./ProfilePage.scss";
import profilebackground from "../../assets/Rectangle 47.png";
import { CiUser } from "react-icons/ci";
import { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { useLogout } from "../../hooks/useLogout.jsx";
import { useUpdateProfile } from "../../hooks/useUpdateProfile.jsx";
import { usebackendStore } from "../../store/store.js";
import { useUpdateBankAccount } from "../../hooks/useUpdateBankAccount.jsx";
import { useGetBankAccount } from "../../hooks/useGetBankAccount";
import { useVerifyAccountNumber } from "../../hooks/useVerifyAccountNumber";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsBank } from "react-icons/bs";

const ProfilePage = () => {
  const { logout } = useLogout();
  const [overlayActive, setOverlayActive] = useState(false);
  const [bankDetailsActive, setBankDetailsActive] = useState(false);
  const [editAccountActive, setEditAccountActive] = useState(false);
  const [detailsShown, setDetailsShown] = useState(true);
  const [User_name, setUser_name] = useState("");
  const [User_username, setUser_username] = useState("");
  const [User_tiktokhandle, setUser_tiktokhandle] = useState("");
  const [User_bio, setUser_bio] = useState("");

  const [sortCode, setSortCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const { documents } = useGetBankAccount();
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
  // const [userBank, setUserBank] = useState('')
  // const [, setUserBank] = useState('')
  const { error, isPending, updateProfile, success, setSuccess } =
    useUpdateProfile();

  const tiktok = usebackendStore((state) => state.user.tiktok);
  const firstName = usebackendStore((state) => state.user.firstName);
  const lastName = usebackendStore((state) => state.user.lastName);
  const bio = usebackendStore((state) => state.user.bio);
  const username = usebackendStore((state) => state.user.userName);
  const {
    error: err,
    isPending: isPend,
    updateBankAccount,
    success: succ,
    setSuccess: setSucc,
  } = useUpdateBankAccount();
  const accountName = usebackendStore((state) => state.user.account.bankName);
  // console.log(accountName, tiktok);
  // console.log(tiktok);
  const toggleOverlay = () => {
    if (overlayActive) {
      setOverlayActive(false);
    } else if (!overlayActive) {
      setOverlayActive(true);
      setBankDetailsActive(true);
    }

    // console.log("clicked");
  };
  useEffect(() => {
    if (success) {
      setDetailsShown(true);
      setUser_bio("");
      setUser_name("");
      setUser_username("");
      setSuccess(false);
    }
  }, [success, setSuccess]);
  useEffect(() => {
    if (succ) {
      setBankDetailsActive(false);
      setAccountNumber("");
      setSortCode("");
      setSucc(false);
    }
  }, [succ, setSucc]);
  const toggleOverlayTwo = () => {
    if (overlayActive) {
      setOverlayActive(false);
    } else if (!overlayActive) {
      setOverlayActive(true);
      setBankDetailsActive(true);
    }

    // console.log(bankDetailsActive);
  };
  const editAccountChange = () => {
    // if(editAccountActive){
    //     setEditAccountActive(false)
    // }
    // else if (editAccountActive === false){
    //     setEditAccountActive(true)
    // }

    if (detailsShown) {
      setDetailsShown(false);
      setEditAccountActive(true);
    } else if (detailsShown === false) {
      setDetailsShown(true);
      setEditAccountActive(false);
    }

    // console.log(detailsShown);
  };

  // const submitButton = () => {
  //   // if (bankDetailsActive) {
  //   //   setBankDetailsActive(false);
  //   // }
  //   // if (editAccountActive) {
  //   //   setEditAccountActive(false);
  //   // }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(User_name, User_username, User_tiktokhandle, User_bio);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (validateInputs() && document.data.Bank_name) {
      updateBankAccount(
        document.data.Bank_name,
        document.data.account_name,
        accountNumber
      );
    }

    // updateProfile(User_name, User_username, User_tiktokhandle, User_bio);
  };

  return (
    <div className="profile-page-section">
      <section className="profile-page-banner">
        <div className="profile-page-banner-image-div">
          <img src={profilebackground} />
        </div>
      </section>
      <section className="profile-page-details">
        <section className="profile-page-details-header">
          <div className="profile-page-user-initials">JD</div>
          <div className="profile-page-user-name">
            <h4>{firstName}</h4>
            <p>
              <span>
                {" "}
                <CiUser />
              </span>{" "}
              <span>User</span>
            </p>
          </div>
          <div className="profile-page-edit-profile">
            <div className="profile-page-edit-profile-button">
              <button onClick={editAccountChange}>Edit Profile</button>
            </div>
            <div
              onClick={toggleOverlay}
              className="profile-page-add-bank-account"
            >
              <button>Add Bank Account</button>
            </div>
          </div>
          <div className="profile-page-about-you">
            <h2>About You</h2>
            <h4>Total Rewards</h4>
          </div>
        </section>
        <section className="profile-page-form-section">
          <div
            className={
              detailsShown
                ? "profile-page-form-section-div-static"
                : "profile-page-form-section-div-static-inactive"
            }
          >
            <form onSubmit={handleSubmit}>
              <div className="profile-page-form-div-line">
                <p>Name</p>
                <div>{firstName + lastName}</div>
              </div>
              <div className="profile-page-form-div-line">
                <p>Username</p>
                <div>{username}</div>
              </div>
              {/* <div className="profile-page-form-div-line">
                <p>TikTok</p>
                <div>{tiktok}</div>
              </div> */}
              <div className="profile-page-form-div-line">
                <p>Bio</p>
                <div>{bio}</div>
              </div>
              <div className="profile-page-form-div-line">
                <p>Bank Account</p>

                <p>{accountName}</p>
              </div>
            </form>
          </div>
          <div
            className={
              detailsShown
                ? "profile-page-form-section-div-inactive"
                : "profile-page-form-section-div"
            }
          >
            <form onSubmit={handleSubmit} id="updateProfile">
              <div className="profile-page-form-div-line">
                <p>Name</p>

                <div>
                  <input
                    className="user-name-input"
                    placeholder={firstName + lastName}
                    value={User_name}
                    onChange={(e) => setUser_name(e.target.value)}
                  />
                </div>
              </div>
              <div className="profile-page-form-div-line">
                <p>Username</p>
                <div>
                  <input
                    className="user-username-input"
                    placeholder={username}
                    value={User_username}
                    onChange={(e) => setUser_username(e.target.value)}
                  />
                </div>
              </div>
              {/* <div className="profile-page-form-div-line">
                <p>TikTok</p>
                <div>
                  <input
                    className="user-tiktok-input"
                    placeholder={tiktok}
                    value={User_tiktokhandle}
                    onChange={(e) => setUser_tiktokhandle(e.target.value)}
                  />
                </div>
              </div> */}
              <div className="profile-page-form-div-line">
                <p>Bio</p>

                <div>
                  <input
                    className="user-bio-input"
                    placeholder={bio}
                    value={User_bio}
                    onChange={(e) => setUser_bio(e.target.value)}
                  />
                </div>
              </div>
              <div className="profile-page-form-div-line">
                <p>Bank Account</p>
                <p>{accountName}</p>
              </div>
            </form>
          </div>
        </section>
        <section className="profile-page-form-button-section">
          <div
            className={
              detailsShown
                ? "profile-page-form-save-button-inactive"
                : "profile-page-form-save-button"
            }
          >
            <button type="submit" form="updateProfile">
              SAVE
            </button>
          </div>
          <div className="profile-page-log-out-button">
            <button onClick={logout}>LOG OUT</button>
          </div>
          {isPending && <p>LOADING..</p>}
          {Error && <p className="error">{Error}</p>}
        </section>
      </section>
      <div
        className={
          overlayActive
            ? "profile-page-overlay"
            : "profile-page-overlay-inactive"
        }
      >
        <section
          className={
            overlayActive
              ? "profile-page-account-section"
              : "profile-page-account-section-inactive"
          }
        >
          <div
            className={
              bankDetailsActive
                ? "profile-page-account-section-div"
                : "profile-page-account-section-div-submitted"
            }
          >
            <div className="profile-page-account-section-div-header">
              <p>
                Add your correct bank account details to withdraw your earnings
              </p>
              <p className="hex" onClick={toggleOverlay}>
                x
              </p>
            </div>
            <form
              className="profile-page-account-section-div-form"
              onSubmit={handleSubmit2}
            >
              <div>
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
                    <option className="" key={bank.id} value={bank.code}>
                      {bank.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>{document?.data?.account_name}</div>
              <div>
                <input
                  className="profile-page-account-input"
                  placeholder="Enter Your Account Number"
                  value={accountNumber}
                  onChange={(e) => {
                    setAccountNumber(e.target.value);
                  }}
                />
              </div>
              <div className="edit-account-submit-button">
                <button type="submit">Add Account</button>
                {isPend && <p>LOADING..</p>}
                {err && <p  className="error">{err}</p>}
              </div>
            </form>
          </div>
          <div
            className={
              bankDetailsActive
                ? "account-added-succesfully-inactive"
                : "account-added-succesfully"
            }
          >
            <div className="profile-page-account-section-div-header">
              <p>Bank Account Added</p>
              <p className="hex" onClick={toggleOverlayTwo}>
                x
              </p>
            </div>
            <div className="ace-body">
              <p>
                <FaCircleCheck className="ace-check" />
              </p>
              <p className="ace-added">account added successfully</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default ProfilePage;

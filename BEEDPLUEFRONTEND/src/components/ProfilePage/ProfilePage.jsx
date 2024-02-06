import "./ProfilePage.scss";
import profilebackground from "../../assets/Rectangle 47.png";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { useLogout } from "../../hooks/useLogout.jsx";
import { useUpdateProfile } from "../../hooks/useUpdateProfile.jsx";
import { usebackendStore } from "../../store/store.js";
const ProfilePage = () => {
  const { logout } = useLogout();
  const [overlayActive, setOverlayActive] = useState(false);
  const [bankDetailsActive, setBankDetailsActive] = useState(false);
  const [editAccountActive, setEditAccountActive] = useState(false)
  const [detailsShown, setDetailsShown] = useState(true)
  const [User_name, setUser_name] = useState("")
  const [User_username, setUser_username] = useState("")
  const [User_tiktokhandle, setUser_tiktokhandle] = useState("")
  const [User_bio, setUser_bio] = useState("")

  const { error, isPending, updateProfile } = useUpdateProfile();

  const tiktok = usebackendStore(state => state.user.tiktok)
  const firstName = usebackendStore(state => state.user.firstName)
  const lastName = usebackendStore(state => state.user.lastName)
  const toggleOverlay = () => {
    if (overlayActive) {
      setOverlayActive(false);

    } else if (!overlayActive) {
      setOverlayActive(true);
      setBankDetailsActive(true)
    }

    console.log("clicked");
  };
  const toggleOverlayTwo = () => {
    if (overlayActive){
      setOverlayActive(false)
    }
    else if (!overlayActive){
      setOverlayActive(true)
      setBankDetailsActive(true)
    }

    console.log(bankDetailsActive)
  }
  const editAccountChange = () =>{
    // if(editAccountActive){
    //     setEditAccountActive(false)
    // }
    // else if (editAccountActive === false){
    //     setEditAccountActive(true)
    // }

    if (detailsShown){
      setDetailsShown(false)
      setEditAccountActive(true)

    }
    else if (detailsShown === false){
      setDetailsShown(true)
      setEditAccountActive(false)
    }

    console.log(detailsShown)
  }

  const submitButton = () => {
    if (bankDetailsActive) {
      setBankDetailsActive(false);
    }
    if (editAccountActive){
      setEditAccountActive(false)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(User_name, User_username, User_tiktokhandle, User_bio);
    if (editAccountActive === false){
      setDetailsShown(true)
    }
    console.log(editAccountActive)
    console.log (detailsShown)
    updateProfile(User_name, User_username, User_tiktokhandle, User_bio);

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
            <h4>@JohnDoe</h4>
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
              <button onClick={editAccountChange}
              >Edit Profile</button>
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
          <div className={detailsShown ? "profile-page-form-section-div-static" : "profile-page-form-section-div-static-inactive"}>
            <form onSubmit={handleSubmit}>
              <div className="profile-page-form-div-line">
                <p>
                  Name
                </p>
                <div>
                  {firstName + lastName}
                </div>
              </div>
              <div  className="profile-page-form-div-line">
                <p>
                  UserName
                </p>
                <div>
                  {/* {User_username} */}
                </div>
              </div>
              <div className="profile-page-form-div-line">
                <p>
                  TikTok
                </p>
                <div>
                  {tiktok}
                </div>
              </div>
              <div className="profile-page-form-div-line">
                <p>
                  Bio
                </p>
                <div>
                  {User_bio}

                </div>
              </div>
              <div className="profile-page-form-div-line">
                <p>
                  Bank Account
                </p>
                <p>
                  <p>Access</p>
                </p>
              </div>
            </form>
          </div>
          <div className={detailsShown ? "profile-page-form-section-div-inactive" : "profile-page-form-section-div" }>
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
                <p>UserName</p>
                <div>
                  <input
                    className="user-username-input"
                    // placeholder={fi}
                    value={User_username}
                    onChange={(e) => setUser_username(e.target.value)}
                  />
                </div>
              </div>
              <div className="profile-page-form-div-line">
                <p>TikTok</p>
                <div>
                  <input
                    className="user-tiktok-input"
                    placeholder={tiktok}
                    value={User_tiktokhandle}
                    onChange={(e) => setUser_tiktokhandle(e.target.value)}
                  />
                </div>
              </div>
              <div className="profile-page-form-div-line">
                <p>Bio</p>
                <div>
                  <input
                    className="user-bio-input"
                    placeholder="www.google.com"
                    value={User_bio}
                    onChange={(e) => setUser_bio(e.target.value)}
                  />
                </div>
              </div>
              <div className="profile-page-form-div-line">
                <p>Bank Account</p>
                <p>
                  <p>Access</p>
                </p>
              </div>
            </form>
          </div>
        </section>
        <section className="profile-page-form-button-section">
          <div className={detailsShown ? "profile-page-form-save-button-inactive" : "profile-page-form-save-button"}>
            <button
                onClick={submitButton}
                type="submit" form="updateProfile">
              SAVE
            </button>
          </div>
          <div className="profile-page-log-out-button">
            <button onClick={logout}>LOG OUT</button>
          </div>
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
              <p  className="hex"
                  onClick={toggleOverlay}>x</p>
            </div>
            <form className="profile-page-account-section-div-form">
              <div>
                <input
                  className="profile-page-account-input"
                  placeholder="Enter Your Bank Name"
                />
              </div>
              <div>
                <input
                  className="profile-page-account-input"
                  placeholder="Enter Your Account Name"
                />
              </div>
              <div>
                <input
                  className="profile-page-account-input"
                  placeholder="Enter Your Account Number"
                />
              </div>
            </form>
            <div className="edit-account-submit-button">
              <button onClick={submitButton}>Add Account</button>
            </div>
          </div>
          <div className={bankDetailsActive ? "account-added-succesfully-inactive" : "account-added-succesfully"}>
            <div className="profile-page-account-section-div-header">
              <p>
                Bank Account Added
              </p>
              <p  className="hex"
                  onClick={toggleOverlayTwo}>
                x
              </p>
            </div>
            <div className="ace-body">
              <p>
                <FaCircleCheck className="ace-check" />
              </p>
              <p className="ace-added">
                account added successfully
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default ProfilePage;

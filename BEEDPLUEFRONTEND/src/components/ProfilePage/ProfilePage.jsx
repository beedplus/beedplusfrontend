import "./ProfilePage.scss"
import profilebackground from "../../assets/Rectangle 47.png"
import { CiUser } from "react-icons/ci";
const ProfilePage = () =>{
    return(
        <div className="profile-page-section">
            <section className="profile-page-banner">
                <div className="profile-page-banner-image-div">
                    <img src={profilebackground}  />
                </div>
            </section>
            <section className="profile-page-details">
                <section className="profile-page-details-header">
                    <div className="profile-page-user-initials">
                        JD
                    </div>
                    <div className="profile-page-user-name">
                        <h4>
                            @JohnDoe
                        </h4>
                        <p>
                           <span> <CiUser /></span>  <span>User</span>
                        </p>
                    </div>
                    <div className="profile-page-edit-profile">
                        <div className="profile-page-edit-profile-button">
                            <button>
                                Edit Profile
                            </button>
                        </div>
                        <div className="profile-page-add-bank-account">
                            <button>
                                Add Bank Account
                            </button>
                        </div>
                    </div>
                    <div className="profile-page-about-you">
                        <h2>
                            About You
                        </h2>
                        <h4>
                            Total Rewards
                        </h4>
                    </div>
                </section>
                <section className="profile-page-form-section">
                    <div className="profile-page-form-section-div">
                        <form>
                            <div className="profile-page-form-div-line">
                                <p>
                                    Name
                                </p>
                                <div>
                                    <input className="user-name-input"
                                            placeholder="Jane Doe"/>
                                </div>
                            </div>
                            <div  className="profile-page-form-div-line">
                                <p>
                                    UserName
                                </p>
                                <div>
                                    <input className="user-username-input"
                                            placeholder="_JaneDoe"/>
                                </div>
                            </div>
                            <div className="profile-page-form-div-line">
                                <p>
                                    TikTok
                                </p>
                                <div>
                                    <input className="user-tiktok-input"
                                            placeholder="JANYDOE"/>
                                </div>
                            </div>
                            <div className="profile-page-form-div-line">
                                <p>
                                    Bio
                                </p>
                                <div>
                                    <input className="user-bio-input"
                                            placeholder="www.google.com"/>
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
                </section>
                <section className="profile-page-form-button-section">
                    <div className="profile-page-form-save-button">
                        <button>
                            SAVE
                        </button>
                    </div>
                    <div className="profile-page-log-out-button">
                        <button>
                            LOG OUT
                        </button>
                    </div>
                </section>
            </section>
            <div className="overlay">

            </div>
        </div>
    )
}
export default ProfilePage
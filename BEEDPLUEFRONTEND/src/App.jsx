import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from 'react'
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound/NotFound";
import Signup from "./auth/Signup/Signup.jsx";
import Signin from './auth/Signin/Signin.jsx'
import BankAcoount from "./auth/BankAccount/BankAcoount";
import Verification from "./auth/VerificationEmail/VerificationEmail.jsx";
import Verify from "./Verify";
import ChallengeSubmit from "./components/ChallengeSumbit/ChallengeSumbit.jsx";
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx";
import { usebackendStore } from "./store/store.js";
import ChallengeLinks from "./components/ChallengeLinks/ChallengeLinks.jsx";
import { Navigate } from "react-router-dom";
import NotificationPage from './components/NotificationPage/NotificationPage';
import CheckChallenge from './components/CheckChallenge/CheckChallenge';
import LandingPageSignedIn from "./pages/LandingPageSignedIn/LandingPageSignedIn.jsx"
import AdminDashboard from "./components/AdminDashboard/AdminDashboard.jsx";
import ChallangeCard from "./components/ChallangeCard/challangeCard.jsx";
import AdminDashboardLogin from "./components/AdminDashboardLogin/AdminDashboardLogin.jsx";
import AdminDashboardCampaigns from "./components/AdminDashboardCampaigns/AdminDashboardCampaigns.jsx";
import AdminDashboardCampaignsSubmission
    from "./components/AdminDashboardCampaignsSumbmission/AdminDashboardCampaignsSubmission.jsx";
import FAQ from "./components/FAQ/Faqs.jsx";
import DashboardNavbar from "./components/DashboardNavbar/DashboardNavbar.jsx";
import AdminDashboardRejectedCampaign
    from "./components/AdminDashboardRejectedCampaign/AdminDashboardRejectedCampaign.jsx";

function App() {
  
  const accessToken = usebackendStore((state) => state.accessToken);
    const tempAccessToken = usebackendStore((state) => state.tempAccessToken);
  const [currentId,setcurrentId] =useState("")
  // const navigateToChallengeLink =() =>{
  //   navigate("/challenge-link")
  // }

  return (
    <div className="app">

      <Router>
        <Routes>
        <Route
            path="/Dashboard-Navbar"
            element={
            
             <DashboardNavbar/>
            
          }
          />
        <Route
            path="/home"
            element={
              <>
              <Navbar />
              <Home />
              <Footer /> 
              </>    
          }
          />
          <Route
            path="/FAQS"
            element={
              <>
              <Navbar />
              <FAQ />
              <Footer /> 
              </>    
          }
          />
          <Route
            path="/"
            element={
              <>
              <Navbar />
                {accessToken && <LandingPageSignedIn />}
                {!accessToken && <Navigate to= '/home'/>}
              <Footer /> 
              </>
            }
          />        
          <Route path="/auth">
            <Route index element={<Signup />} />
            <Route
              path="Signup"
              element={
                <>
                  {accessToken && <Navigate to="/" />}
                  {!accessToken && <Signup />}
                </>

              }
            />
            <Route
             path="bankaccount"
             element={
                <>
              {accessToken && <Navigate to="/profile" />}
              {!accessToken && <BankAcoount />}
              </>
             }
            />
            <Route path="verify/:token" element={<Verify />} />
            <Route
              path="signin"
              element={
                <>
                  {accessToken && <Navigate to="/" />}
                  {!accessToken && <Signin />}
                </>
              }
            />
            {/* <Route
              path="bank-account"
              element={
                <>
                  {accessToken && <Navigate to="/profile" />}
                  {!accessToken && <BankAcoount />}
                </>
              }
            /> */}
            <Route path="Verification" element={<Verification />} />
          </Route>
          <Route
            path="/challenge-submit"
            element={
              <>
              <Navbar />
                {accessToken && <ChallengeSubmit />}
                {!accessToken && <Navigate to="/auth/signin" />}
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Navbar />
                {accessToken && <ProfilePage />}
                {!accessToken && <Navigate to="/auth/signin" />}
              </>
            }
          />
          <Route
            path="/notification"
            element={
              <>
               <Navbar />
                {accessToken && <NotificationPage />}
                {!accessToken && <Navigate to="/auth/signin" />}
              </>
            }
          />
          <Route
            path="/check-challenge"
            element={
              <>
              <Navbar /> 
                {accessToken && <CheckChallenge />}
                {!accessToken && <Navigate to="/auth/signin" />}
              </>
            }
          />

          <Route
            path="/admin-dashboard"
            element={
              <>
                {tempAccessToken && <AdminDashboard />}
                {!tempAccessToken && <Navigate to="/admin-login" />}
              </>
            }
          />
          <Route
                path="/admin-login"
                element={   <>
                    {tempAccessToken &&<Navigate to="/admin-dashboard" />}
                    {!tempAccessToken && <AdminDashboardLogin/>}
                </>}
                />
          {/* <Route path="/challenge-link" element={<ChallengeLinks/>} /> */}         <Route path="/challenge/:id" element={       <>

                {accessToken && <ChallengeLinks />}
                {!accessToken && <Navigate to="/auth/signin" />}
              </>}
        />

          <Route
                path="/test"
                element={<AdminDashboardRejectedCampaign/>}
                />


        </Routes>
      </Router>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
// export {navigateToChallengeLink};

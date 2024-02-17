import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound/NotFound";
import Signup from "./auth/Signup/Signup.jsx";
import Signin from "./auth/Signin/Signin.jsx";

import BankAcoount from "./auth/BankAccount/BankAcoount";
import Verification from "./auth/VerificationEmail/VerificationEmail.jsx";
import Verify from "./Verify";
import ChallengeSubmit from "./components/ChallengeSumbit/ChallengeSumbit.jsx";
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx";
import { usebackendStore } from "./store/store.js";
import ChallengeLinks from "./components/ChallengeLinks/ChallengeLinks.jsx";
import { Navigate } from "react-router-dom";
import NotificationPage from "./components/NotificationPage/NotificationPage";
import CheckChallenge from "./components/CheckChallenge/CheckChallenge";
import LandingPageSignedIn from "./pages/LandingPageSignedIn/LandingPageSignedIn.jsx";
import AdminDashboardRequestPayment from "./components/AdminDashboardRequestPayment/AdminDashboardRequestPayment.jsx";
import ChallangeCard from "./components/ChallangeCard/challangeCard.jsx";
import AdminDashboardLogin from "./components/AdminDashboardLogin/AdminDashboardLogin.jsx";
import AdminDashboardCampaigns from "./components/AdminDashboardCampaigns/AdminDashboardCampaigns.jsx";
import AdminDashboardCampaignsSubmission from "./components/AdminDashboardCampaignsSumbmission/AdminDashboardCampaignsSubmission.jsx";
import FAQ from "./components/Faqs/Faqs.jsx";
import DashboardNavbar from "./components/DashboardNavbar/DashboardNavbar.jsx";
import AdminDashboardRejectedCampaign from "./components/AdminDashboardRejectedCampaign/AdminDashboardRejectedCampaign.jsx";
import SideBarAdmin from "./components/SideBarAdmin/SideBarAdmin.jsx";
import AcceptedSubmissions from "./components/AcceptedSubmissions/AcceptedSubmissions.jsx";
import AdminDashboardPaidRequest from "./components/AdminDashboardPaidRequest/AdminDashboardPaidRequest.jsx";
import SideBar from "./layout/SideBar.jsx";
import Faqs from "./components/Faqs/Faqs.jsx";
import HowItWorks from "./components/Howitworks/HowItWorks.jsx";
// import SideBarAdmin  from "./components/SideBarAdmin/SideBarAdmin"

function App() {
  const accessToken = usebackendStore((state) => state.accessToken);
  const tempAccessToken = usebackendStore((state) => state.tempAccessToken);
  const [currentId, setcurrentId] = useState("");

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/Dashboard-Navbar" element={<DashboardNavbar />} />
          {/*<Route*/}
          {/*  path="/"*/}
          {/*  element={*/}
          {/*    <>*/}
          {/*    */}
          {/*      <Navbar />*/}
          {/*      <LandingPageSignedIn />*/}
          {/*      <Footer />*/}
          {/*    </>*/}
          {/*  }*/}
          {/*/>*/}
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
            path="/faq"
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
                {!accessToken && <Navigate to="/home" />}
                <Footer />
              </>
            }
          />
          <Route
            path="/SideBarAdmin"
            element={
              <>
                {accessToken && <SideBarAdmin />}
                {!accessToken && <Navigate to="/home" />}
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
                  <Navbar />
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
                  <Navbar/>
                {accessToken && <NotificationPage />}
                {!accessToken && <Navigate to="/auth/signin" />}
              </>
            }
          />
          <Route
            path="/check-challenge"
            element={
              <>
                {accessToken && <CheckChallenge />}
                {!accessToken && <Navigate to="/auth/signin" />}
              </>
            }
          />
          <Route
            path="/admin-login"
            element={
              <>
                {tempAccessToken && <Navigate to="/admin" />}
                {!tempAccessToken && <AdminDashboardLogin />}
              </>
            }
          />
          {/* <Route path="/challenge-link" element={<ChallengeLinks/>} /> */}{" "}
          <Route
            path="/challenge/:id"
            element={
              <>
                <Navbar />
                {accessToken && <ChallengeLinks />}
                {!accessToken && <Navigate to="/auth/signin" />}
              </>
            }
          />
          <Route path="/admin" element={<SideBar />}>
            <Route
              path="/admin"
              element={
                <>
                  {tempAccessToken && <AdminDashboardCampaigns />}
                  {!tempAccessToken && <Navigate to="/admin-login" />}
                </>
              }
            />

            <Route
              path="/admin/claim"
              element={
                <>
                  {tempAccessToken && <AdminDashboardRequestPayment />}
                  {!tempAccessToken && <Navigate to="/admin-login" />}
                </>
              }
            />

            <Route
              path="/admin/test-campaign/:id"
              element={
                <>
                  {tempAccessToken && <AdminDashboardCampaignsSubmission />}
                  {!tempAccessToken && <Navigate to="/admin-login" />}
                </>
              }
            />

            <Route
              path="/admin/acceptedsubmissions"
              element={
                <>
                  {tempAccessToken && <AcceptedSubmissions />}
                  {!tempAccessToken && <Navigate to="/admin-login" />}
                </>
              }
            />
            <Route
              path="/admin/rejected-campaign"
              element={
                <>
                  {tempAccessToken && <AdminDashboardRejectedCampaign />}
                  {!tempAccessToken && <Navigate to="/admin-login" />}
                </>
              }
            />

            <Route
              path="/admin/paid"
              element={
                <>
                  {tempAccessToken && <AdminDashboardPaidRequest />}
                  {!tempAccessToken && <Navigate to="/admin-login" />}
                </>
              }
            />
          </Route>
          <Route
            path="/how-it-works"
            element={
              <>
                <Navbar />
                <HowItWorks />
              </>
            }
          />
        </Routes>
      </Router>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;

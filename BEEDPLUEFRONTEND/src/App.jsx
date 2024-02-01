import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import LandingPageSignedIn from "./pages/LandingPageSignIn/LandingPageSignedIn"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {  ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import NotFound from './components/NotFound/NotFound';
import Signup from './auth/Signup/Signup';
import Sigin from './auth/Signin/Sigin';
import NotificationPage from './components/NotificationPage/NotificationPage';
import CheckChallenge from './components/CheckChallenge/CheckChallenge';

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LandingPageSignedIn" element={<LandingPageSignedIn />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/auth">
            <Route index element={<Signup />} />
            <Route path="sign-up" element={<Signup />} />
            <Route path="signin" element ={<Sigin/>}/>
          </Route>
          <Route path="notification" element ={<NotificationPage/>}/>
          <Route path="check-challenge" element ={<CheckChallenge/>}/>
        </Routes>
      </Router>
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  )
}

export default App

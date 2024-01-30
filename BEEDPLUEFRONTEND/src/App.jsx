import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import LandingPageSignedIn from "./pages/LandingPageSignIn/LandingPageSignedIn"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from './auth/Signup/Signup';



function App() {

  return (
    <div className='app'>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LandingPageSignedIn" element={<LandingPageSignedIn />} />
          <Route path="/auth">
            <Route index element={<Signup />} />
            <Route path="sign-up" element={<Signup />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App

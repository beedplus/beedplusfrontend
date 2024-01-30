import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import LandingPageSignedIn from "./pages/LandingPageSignIn/LandingPageSignedIn"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {

  return (
    <div className='app'>
     <Navbar/>
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LandingPageSignedIn" element={<LandingPageSignedIn />} />
        </Routes>
      </Router>
     <Footer/>
    </div>
  )
}

export default App

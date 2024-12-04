import React from 'react';
import { Route, Routes } from 'react-router-dom';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Header from './components/Header';
//import Footer from './components/Footer';
import SignUp from './pages/SignUppage';
import SignIn from './pages/SignInpage';
import Home from './pages/Homepage';
import NoPage from './pages/NoPagepage';
import ContactUs from './pages/ContactUspage';
import UrgentCare from './pages/UrgentCarepage';
import Facilities from './pages/Facilitiespage';
import About from './pages/Aboutpage';
import Chart from './pages/Chartpage';
import Physicians from './pages/Physicianspage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NoPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/urgent-care" element={<UrgentCare />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/about" element={<About />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/physicians" element={<Physicians />} />
        <Route path="/ " element/>
      </Routes>

    </div>
  );
};

export default App;

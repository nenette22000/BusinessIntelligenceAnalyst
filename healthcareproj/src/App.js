import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

//import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Header from './components/Header';
//import Footer from './components/Footer';
import Home from './pages/Homepage';
import About from './pages/Aboutpage';
import Chart from './pages/Chartpage';
import SignUp from './pages/SignUppage';
import SignIn from './pages/SignInpage';
import NoPage from './pages/NoPagepage';
import ContactUs from './pages/ContactUspage';
import UrgentCare from './pages/UrgentCarepage';
import Facilities from './pages/Facilitiespage';
import Physicians from './pages/Physicianspage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/urgent-care" element={<UrgentCare />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/physicians" element={<Physicians />} />
      </Routes>

    </div>
  );
};

export default App;

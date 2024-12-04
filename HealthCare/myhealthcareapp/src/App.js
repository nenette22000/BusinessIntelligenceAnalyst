import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import SignIn from "./pages/Login";
import Menu from "./pages/Menu";
import Patient from "./pages/Patient";
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element={<Home></Home>}></Route>
        <Route path = "/about" element={<About></About>}></Route>
        <Route path = "/signin" element={<SignIn></SignIn>}></Route>
        <Route path = "/menu" element={<Menu></Menu>}></Route>
        <Route path = "/contactus" element={<ContactUs></ContactUs>}></Route>
        <Route path = "/patient" element={<Patient></Patient>}></Route>
        <Route path ="*" element={<NoPage></NoPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;

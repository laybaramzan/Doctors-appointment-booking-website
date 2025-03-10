import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Doctors from "./Pages/Doctors";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Myprofile from "./Pages/Myprofile";
import Myappointments from "./Pages/Myappointments";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Appointment from "./Pages/Appointment";


const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/doctors" element={<Doctors></Doctors>}></Route>
        <Route
          path="/doctors/:speciality"
          element={<Doctors></Doctors>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/my-profile" element={<Myprofile></Myprofile>}></Route>
        <Route
          path="/my-appointments"
          element={<Myappointments></Myappointments>}
        ></Route>
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;

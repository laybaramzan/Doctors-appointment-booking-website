import React from "react";
import Header from "../components/Header";
import Specialitymenu from "../components/Specialitymenu";
import TopDoctors from "../components/TopDoctors";
import Baner from "../components/Baner";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <Specialitymenu></Specialitymenu>
      <TopDoctors></TopDoctors>
      <Baner></Baner>
    </div>
  );
};

export default Home;

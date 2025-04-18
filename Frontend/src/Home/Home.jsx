import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Freebook from "../Components/FreeBook";
import Footer from "../Components/Footer";
import SearchFilter from "../Components/SearchFilter"; 
import Cards from "../Components/Cards";
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
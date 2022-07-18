import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Seller from "./components/sellers/Sellers";
import Bids from "./components/bids/Bids";
import Footer from "./components/footer/Footer";

import "./base.scss";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Banner />
        <Seller />
        <Bids />
        <Footer />
      </>
    );
  }
}

export default App;

import React, { Component } from "react";
import navbarLogo from "../../images/navbar-logo.svg";
import Button from "../button/Button";
import "./navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <>
        <section className="navbar-section">
          <div className="navbar-left">
            <div className="navbar-logo">
              <img src={navbarLogo} alt="" />
              <h1>NFT ART</h1>
            </div>
            <form>
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search to item here" />
            </form>
          </div>
          <div className="navbar-right">
            <ul className="navbar-links">
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">My items</a>
              </li>
              <li>
                <a href="#">Following</a>
              </li>
            </ul>
            <div className="buttons">
              <Button className="btn" name="Create" />
              <Button className="btn-outline" name="Connect" />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Navbar;

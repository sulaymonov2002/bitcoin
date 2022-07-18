import React, { Component } from "react";
import footerIcon from "../../images/navbar-logo.svg";
import Button from "../button/Button";
import "./footer.scss";
import FooterLinkComp from "./FooterLinkComp";

class Footer extends Component {
  render() {
    return (
      <>
        <section className="footer-wrapper">
          <div className="footer-search">
            <div className="footer-logo">
              <img src={footerIcon} alt="" />
              <h1>NFT ART</h1>
            </div>
            <div className="footer-input">
              <h3>Get the lastes Updates</h3>

              <form>
                <input type="text" placeholder="Your Email" />
                <Button className="btn" name="Email Me!" />
              </form>
            </div>
          </div>
          <div className="footer-links">
            <FooterLinkComp
              linkTitle="NFT ART"
              link1="Explore"
              link2="How it Works"
              link3="Contact Us"
            />
            <FooterLinkComp
              linkTitle="My Account"
              link1="Profile"
              link2="Favorites"
              link3="My Collections"
              link4="Settings"
            />
            <FooterLinkComp
              linkTitle="Support"
              link1="Help center"
              link2="Terms of service"
              link3="Legal"
              link4="Privacy policy"
            />
          </div>
        </section>
        <section className="under-footer">
          <p>NFT ART, Inc. All Rights Reserved</p>
          <div className="social-media">
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-telegram"></i></a>
            <a href="#"><i className="fa-brands fa-discord"></i></a>
          </div>
        </section>
      </>
    );
  }
}

export default Footer;

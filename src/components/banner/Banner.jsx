import React, { Component } from "react";
import Button from "../button/Button";
import bannerImg from "../../images/banner-img.svg";
import "./banner.scss";

class Banner extends Component {
  render() {
    return (
      <>
        <section className="banner-section">
          <div className="banner-left">
            <div className="banner-title">
              <h1>Discover, collect, and sell extraordinary NFTs</h1>
              <p>
                Explore the upcoming NFT projects, get all the info you need to
                help you decide if that is the right project for you. Don’t
                forget to check the additional info in the project page,
                including relevant tips per project.
              </p>

              <div className="banner-buttons">
                <Button className="btn" name="Explore" />
                <Button className="btn-outline" name="Create" />
              </div>
            </div>
          </div>
          <div className="banner-right">
            <img src={bannerImg} alt="" />
          </div>
        </section>
      </>
    );
  }
}

export default Banner;

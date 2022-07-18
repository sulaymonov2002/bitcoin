import React, { Component } from "react";
import Title from "../title/Title";
import User from "../users/User";
import user1 from "../../images/seller-1.svg";
import user2 from "../../images/seller-2.svg";
import user3 from "../../images/seller-3.svg";
import user4 from "../../images/seller-4.svg";
import user5 from "../../images/seller-5.svg";
import "./seller.scss";

export class Sellers extends Component {
  render() {
    return (
      <>
        <section className="seller-section">
          <Title
            title="Top Sellers"
            paragraph="The leading top-selling NFT artist in the top 5 list this year.:  Examining Some of the Most Popular NFT projects ·"
          />

          <div className="users-wrapper">
            <User
              name="01"
              userImg={user1}
              userName="Brian Domanic"
              balance="21.05 ETH"
            />
            <User
              name="02"
              userImg={user2}
              userName="Ellin Syahnaz"
              balance="20.65 ETH"
            />
            <User
              name="03"
              userImg={user3}
              userName="Abraham Lincoln"
              balance="18.35 ETH"
            />
            <User
              name="04"
              userImg={user4}
              userName="Arabella Ava"
              balance="1.05 ETH"
            />
            <User
              name="05"
              userImg={user5}
              userName="Mike Muliadro"
              balance="1.05 ETH"
            />
          </div>
        </section>
      </>
    );
  }
}

export default Sellers;

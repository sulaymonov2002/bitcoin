import React, { Component } from "react";
import Bid from "./Bid";
import bidImg1 from "../../images/bids/img-1.svg";
import bidImg2 from "../../images/bids/img-2.svg";
import bidImg3 from "../../images/bids/img-3.svg";
import bidImg4 from "../../images/bids/img-4.svg";
import bidImg5 from "../../images/bids/img-5.svg";
import bidImg6 from "../../images/bids/img-6.svg";
import bidImg7 from "../../images/bids/img-7.svg";
import smallBIg2 from "../../images/bids/small-img-2.svg";
import smallBIg3 from "../../images/bids/small-img-3.svg";
import smallBIg4 from "../../images/bids/small-img-4.svg";
import smallBIg5 from "../../images/bids/small-img-5.svg";
import smallBIg6 from "../../images/bids/small-img-6.svg";
import smallBIg7 from "../../images/bids/small-img-7.svg";
import smallBIg8 from "../../images/bids/small-img-8.svg";
import Button from "../button/Button";
import Title from "../title/Title";
import "./bids.scss";

class Bids extends Component {
  render() {
    return (
      <>
        <section className="bid-wrap">
          <div className="bid-title">
            <Title
              title="Hot Bids"
              paragraph="Non-Fungible Tokens (NFTs) are virtual tokens minted on the blockchain for digital scarcity, security, and authenticity. "
            />
          </div>
          <div className="container-hot-bids">
            <Bid
              bidImg={bidImg1}
              bidName="David Art"
              bidBalance="1.25 ETH"
              bidSmallImg={smallBIg2}
            />
            <Bid
              bidImg={bidImg2}
              bidName="David Art"
              bidBalance="1.25 ETH"
              bidSmallImg={smallBIg3}
            />
            <Bid
              bidImg={bidImg3}
              bidName="David Art"
              bidBalance="1.25 ETH"
              bidSmallImg={smallBIg4}
            />
            <Bid
              bidImg={bidImg4}
              bidName="David Art"
              bidBalance="1.25 ETH"
              bidSmallImg={smallBIg5}
            />
            <Bid
              bidImg={bidImg5}
              bidName="David Art"
              bidBalance="1.25 ETH"
              bidSmallImg={smallBIg6}
            />
            <Bid
              bidImg={bidImg6}
              bidName="David Art"
              bidBalance="1.25 ETH"
              bidSmallImg={smallBIg7}
            />
            <Bid
              bidImg={bidImg7}
              bidName="David Art"
              bidBalance="1.25 ETH"
              bidSmallImg={smallBIg5}
            />
            <Bid
              bidImg={bidImg3}
              bidName="David Art"
              bidBalance="1.25 ETH"
              bidSmallImg={smallBIg5}
            />
          </div>

          <Button className="btn-outline" name="Load More" />
        </section>
      </>
    );
  }
}

export default Bids;

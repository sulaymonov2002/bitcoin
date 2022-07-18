import React, { Component } from "react";
import "./bid.scss";

export class Bid extends Component {
  render() {
    return (
      <>
        <div className="bid">
          <img src={this.props.bidImg} alt="" />
          <div className="bid-title">
            <div>
              <h3>{this.props.bidName}</h3>
              <p>{this.props.bidBalance}</p>
            </div>
            <img src={this.props.bidSmallImg} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default Bid;

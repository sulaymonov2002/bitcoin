import React, { Component } from "react";
import Button from "../button/Button";
import "./user.scss";

class User extends Component {
  render() {
    return (
      <>
        <div className="user-wrap">
          <Button name={this.props.name} className="btn" />
          <img src={this.props.userImg} alt="" />
          <h3>{this.props.userName}</h3>
          <p>{this.props.balance}</p>
        </div>
      </>
    );
  }
}

export default User;

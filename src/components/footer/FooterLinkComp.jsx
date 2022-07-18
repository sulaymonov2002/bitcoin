import React, { Component } from "react";
import "./footerLinkComp.scss";

class FooterLinkComp extends Component {
  render() {
    return (
      <>
        <ul className="footer-link">
          <h1>{this.props.linkTitle}</h1>
          <li>
            <a href="#">{this.props.link1}</a>
          </li>
          <li>
            <a href="#">{this.props.link2}</a>
          </li>
          <li>
            <a href="#">{this.props.link3}</a>
          </li>
          <li>
            <a href="#">{this.props.link4}</a>
          </li>
        </ul>
      </>
    );
  }
}

export default FooterLinkComp;

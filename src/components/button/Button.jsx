import React, { Component } from 'react';
import './button.scss';

class Button extends Component {
  render() {
    return (
      <>
     <button className={this.props.className}>{this.props.name}</button>
      </>
    )
  }
}

export default Button
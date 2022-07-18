import React, { Component } from 'react';
import './title.scss';

class Title extends Component {
  render() {
    return (
      <>
     <div className="title-wrapper">
        <h1>{this.props.title}</h1>
        <p>{this.props.paragraph}</p>
     </div>
      </>
    )
  }
}

export default Title
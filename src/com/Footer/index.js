import React, { Component } from "react";

import './Footer.scss';

class Footer extends Component {
  render() {
    const { copy = '&copy; Test 2018' } = this.props;

    return (
      <footer className="ft">
        <div className="container">
          <p dangerouslySetInnerHTML={{ __html: copy }} />
        </div>
      </footer>
    );
  }
}

export default Footer;
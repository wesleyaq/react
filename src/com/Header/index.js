import React, { Component } from "react";

import './Header.scss'
import items from "../../data/menu";
import Menu from "../Menu";

class Header extends Component {
  render() {
    const { title } = this.props;

    return (
      <header className="hd">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="float-left">{title}</h2>
            </div>
            <div className="col d-flex align-items-center justify-content-end">
              <Menu items={items} />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
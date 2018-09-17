import React, { Component } from "react";
import './menu.scss';

import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    const { items } = this.props;

    return (
      <nav className="menu">
        <ul>
          { 
            items.map((item, key) => 
              <li className="menu-item" key={key}>
                <Link className="menu-link" to={item.url}>{item.title}</Link>
              </li> 
            )
          }
        </ul>
      </nav>
    )
  }
}

export default Menu;
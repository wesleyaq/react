import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './Post.scss';

export default class Posts extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  render() {
    const { item } = this.props;

    return (
      <article className="post">
        <h2 className="post-title">{item.title}</h2>
        <div className="post-btns">
          <Link className="post-btn btn" to={`/post/${item.id}`}>Detalle</Link>
        </div>
      </article>
    )
  }
}
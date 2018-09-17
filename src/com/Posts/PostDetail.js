import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './PostDetail.scss';
import CONFIG from '../../config';
const POSTURL = CONFIG.SRV.POSTURL;

export default class PostDetail extends Component {

  constructor() {
    super();
    this.state = {
      post: {}
    };
  }

  componentDidMount() {
    const { item } = this.props;
    this.getPost(item);
  }

  getPost(id) {
    fetch(`${POSTURL}${id}`)
    .then(res => res.json())
    .then(data => {
      this.setState({post: data});
    });
  }

  render() {
    const { className } = this.props;

    return (
      <article className={`post-detail ${className}`}>
        <h1 className="pod-title">{this.state.post.title}</h1>
        <p className="pod-text">{this.state.post.body}</p>
        <div className="mt-20">
          <Link className="pod-btn btn" to='/posts'>Entradas</Link>
        </div>
      </article>
    )
  }
}
import React, { Component } from "react";

import './Posts.scss';
import { Get } from "../../services/";
import Post from './Post';

import CONFIG from '../../config';
const POSTURL = CONFIG.SRV.POSTURL;

export default class Posts extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    Get(POSTURL, this.state) //'//localhost:3000/data/posts.json'
    .then(resp => {
      this.setState({data: resp});
    });
  }

  render() {
    const { className, cols } = this.props;
    const cos = (cols? Math.ceil(12 / cols): 3);

    return (
      <div className={`row ${className}`}>
      {
        this.state.data.map(it => {
          return (
            <div className={`col-${cos} mb-20`} key={it.id}>
              <Post item={it} />
            </div>
          )
        })
      }
      </div>
    )
  }
}
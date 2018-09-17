import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Photo extends Component {

  constructor() {
    super();
    this.state = {
      pag: {
        title: 'Photo'
      },
      post: {}
    };
  }

  componentDidMount() {
    this.getPhoto(this.props.match.params.id);
  }

  getPhoto(id) {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then(res => res.json())
    .then(data => {
      this.setState({post: data});
    });
  }

  render() {
    return (
      <section className="cont">
        <h2>{this.state.pag.title}</h2>
        <div className="mt-20">
          <h1>{this.state.post.title}</h1>
          <img src={this.state.post.thumbnailUrl} alt={this.state.post.title} width="150" height="150" />
          <div className="mt-20">
            <Link to='/photos'>Photos</Link>
          </div>
        </div>
      </section>
    )
  }
}

export default Photo;
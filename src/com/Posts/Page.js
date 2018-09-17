import React, { Component } from "react";

import Posts from './Posts';

export default class PostsPage extends Component {

  constructor() {
    super();
    this.state = {
      pag: {
        title: 'Entradas'
      }
    };
  }

  render() {
    return (
      <section className="container py-20">
        <h1 className="h1">{this.state.pag.title}</h1>
        <Posts className="mt-20" cols="3" />
      </section>
    )
  }
}
import React, { Component } from 'react';

import PostDetail from './PostDetail';

export default class PostDetailPage extends Component {

  constructor() {
    super();
    this.state = {
      pag: {
        title: 'Entrada Detalle'
      }
    };
  }

  render() {
    const { id } = this.props.match.params;

    return (
      <section className="container py-20">
        <h2>{this.state.pag.title}</h2>
        <PostDetail className="mt-20" item={id} />
      </section>
    )
  }
}
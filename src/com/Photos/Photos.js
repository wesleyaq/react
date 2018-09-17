import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Photos extends Component {

  constructor() {
    super();
    this.state = {
      pag: {
        title: 'Photos'
      },
      data: []
    };
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => {
      this.setState({data: data});
      // console.log(this.state.data);
    });
  }

  render() {
    return (
      <section className="cont">
        <h1>{this.state.pag.title}</h1>
        <table className="table mt-20">
          <thead>
            <tr>
              <td>ID</td>
              <td>Título</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.data.map(it => {
                return(
                  <tr key={it.id}>
                    <td>{it.id}</td>
                    <td>{it.title}</td>
                    <td><Link to={`/photo/${it.id}`}>Detalle</Link></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </section>
    )
  }
}

export default Photos;
import React, { Component } from "react";
// import { Redirect } from 'react-router-dom';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
    this.onLogout = this.onLogout.bind(this);
  }

  componentWillMount() {
    if(!sessionStorage.getItem('user')) {
      this.setState({redirect: true});
    }
  }

  onLogout() {
    sessionStorage.setItem('user', '');
    sessionStorage.clear();
    this.setState({redirect: true});
  }

  render() {
    /*if(this.state.redirect) {
      return (<Redirect to={'/login'} />);
    }*/

    return (
      <section className="container py-20">
        <h1>Home</h1>
        {/* <button type="button" className="btn" onClick={this.onLogout}>Logout</button> */}
      </section>
    )
  }
}
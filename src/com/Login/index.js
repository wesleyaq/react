import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './login.css';

import { Post } from "../../services/";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      redirect: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSubmit() {
    if(this.state.username && this.state.password) {
      Post('login', this.state)
      .then((resp) => {
        if(resp.userData) {
          sessionStorage.setItem('user', JSON.stringify(resp.userData));
          this.setState({redirect: true});
        }
      });
    }
  }

  onInputChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    if(this.state.redirect || sessionStorage.getItem('user')) {
      return (<Redirect to={'/'} />);
    }

    return (
      <div className="login">
        <h2>Login</h2>
        <div className="lgn-row">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" onChange={this.onInputChange}/>
        </div>
        <div className="lgn-row">
          <label>Password</label>
          <input type="password" name="password"  placeholder="Password" onChange={this.onInputChange}/>
        </div>
        < div className = "lgn-row" >
          <button type="submit" className="btn" onClick={this.onSubmit}>Login</button>
          <a href="/register" className="ml-10">Registrarse</a>
        </div>
      </div>
    )
  }
}

export default Login;
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './register.css';

import { Post } from "../../services/";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      redirect: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSubmit() {
    if(this.state.name && this.state.email && this.state.username && this.state.password) {
      Post('signup', this.state)
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
      return (<Redirect to={'/'}/>);
    }

    return (
      <div className="regist">
        <h2>Registrarse</h2>
        <div className="reg-row">
          <label className="reg-label">Nombre</label>
          <input type="text" name="name" placeholder="Nombre" onChange={this.onInputChange}/>
        </div>
        <div className="reg-row">
          <label className="reg-label">Email</label>
          <input type="text" name="email" placeholder="Email" onChange={this.onInputChange}/>
        </div>
        <div className="reg-row">
          <label className="reg-label">Usuario</label>
          <input type="text" name="username" placeholder="Username" onChange={this.onInputChange}/>
        </div>
        <div className="reg-row">
          <label className="reg-label">Clave</label>
          <input type="password" name="password"  placeholder="Password" onChange={this.onInputChange}/>
        </div>
        < div className = "reg-row" >
          <button type="submit" className="btn" onClick={this.onSubmit}>Enviar</button>
          <a href="/login" className="ml-10">Login</a>
        </div>
      </div>
    )
  }
}

export default Register;
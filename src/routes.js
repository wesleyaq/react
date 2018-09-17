import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; //, Redirect

// Components
import App from './com/App';
import Page404 from './com/Page404';
import Home from './com/Home';
// import Login from './com/Login';
import PostsPage from './com/Posts/Page';
import PostDetailPage from './com/Posts/PageDetail';
// import Photos from './com/Photos/Photos';
// import Photo from './com/Photos/Photo';
// import Register from './com/Register/';

/*const checkAuth = () => {
  let user = sessionStorage.getItem('user');
  user = JSON.parse(user);
  return (user && user.user_id? true : false);
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth()? (
      <Component {...props} />
    ): (
      <Redirect to={'/login'} />
    )
  )} />
);*/

class Routes extends Component {
  render() {
    return (
      <App>
        <Switch>
          <Route path='/' component={Home} exact />
          {/* <Route path='/login' component={Login} /> */}
          <Route path='/posts' component={PostsPage} />
          <Route path='/post/:id' component={PostDetailPage} />
          {/* <Route path="/photos" component={Photos} /> */}
          {/* <Route path='/photo/:id' component={Photo} /> */}
          {/* <PrivateRoute path="/photos" component={Photos} /> */}
          {/* <Route path='/register' component={Register} /> */}
          <Route component={Page404} />
        </Switch>
      </App>
    );
  }
}

export default Routes;
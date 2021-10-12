import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Profile, Shop, Login } from './pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/shop" component={Shop} />
        <Route path="/login" component={Login} />
      </div >
    );
  }
}

export default App;

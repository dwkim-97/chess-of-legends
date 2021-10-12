import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, Profile, Shop, Login } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/shop" component={Shop} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;

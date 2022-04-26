import React, { Component } from 'react';
import Navbars from './components/Navbar/Navbar';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Giphy from './components/Giphy/Giphy';


class App extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <Giphy/>
      </div>
    );
  }
}

export default App;

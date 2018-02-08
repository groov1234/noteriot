import React, { Component } from 'react';
import './Navi.css'
class Navi extends Component {
  
  render() {
    return (
      <nav className="nav-main">
        <header className="nav-header">
          <h2 className="nav-title" href="/">Note Riot</h2>
          <button className="log-in">Log In</button>
          <button className="log-out">Log Out</button>
        </header>
      </nav>
    )
  }
}

export default Navi;
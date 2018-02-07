import React, { Component } from 'react';

class Navi extends Component {
  
  render() {
    return (
      <nav className="nav-main">
        <div className="nav-header">
          <a className="nav-title" href="/">Note Riot</a>
        </div>
        <ul className="navbar-left">
          <li>
            <a href="/noteform">Add Note</a>
          </li>
          <li>
            <a href="/notes">View Notes</a>
          </li>
        </ul>
        <ul className="navbar-right">
          <li><button className="log-in">Log In</button></li>
          <li><button className="log-out">Log Out</button></li>
        </ul>
      </nav>
    )
  }
}

export default Navi;
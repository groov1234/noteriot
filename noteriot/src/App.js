import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NoteForm from './components/NoteForms';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Note Riot</h1>
        </header>
        <NoteForm />
      </div>
    );
  }
}

export default App;

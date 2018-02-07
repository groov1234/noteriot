import React, { Component } from 'react';
import './App.css';
import Notes from './Notes';
import NoteForm from './NoteForm';
import { getNotes } from '../actions';
import { connect } from 'react-redux';
import Navi from './Navi';


class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <Navi />
          
        </header>
        <NoteForm />
        <div className="List">
          {this.props.notesFetched ? (this.props.notes.map((note, index) => {
              return <Notes key={index} index={index} note={note} />;
            })
          ) : (
            <img className="App-Logo" alt="logo" />
          )}
        </div>
      </div>
    );
  }
}
// mapState
const mapStateToProps = state => {
  return {
    notes: state.notes,
    notesFetched: state.notesFetched,
  };
};

// export def and connect
export default connect(mapStateToProps, { getNotes })(App);

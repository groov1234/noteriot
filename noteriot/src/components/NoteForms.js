import React, { Component } from 'react';
// stretch goal quick implementation in attempt to add to main Input forms
import Remarkable from 'remarkable';
// Create form for adding new notes
// title/text + (additional) date input?
class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Type note here + "Markdown!"' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <div className="Addnote">
        <h3>Add Note</h3>
        
        <input type="text" placeholder="Title"/>
        <textarea
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <input type="text" placeholder="Date"/>
        <button onClick={this.props.addNote}>Submit</button>
      </div>
    );
  }
}

export default NoteForm;

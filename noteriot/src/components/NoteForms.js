import React, { Component } from 'react';
// future addition
// import Calendar from 'react-input-calendar';

//import css
import './NoteForm.css'
// stretch goal quick implementation in attempt to add to form
// add markdown feature later
import Remarkable from 'remarkable';
// Create form for adding new notes
// title/text + (additional) date input?
class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: '' };
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
      <div className="Container">
      <form>
      <div className="Note-input">
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Date Added" />
        <input type="text" placeholder="Date Completed" />
        <textarea onChange={this.handleChange} defaultValue={this.state.value} />
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}/>
        </div>
        
        <button>Submit</button>
        
        </form>   
        </div> 
    )  
  }
}

export default NoteForm;

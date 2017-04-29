import React from 'react';

class AddHabit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAddHabit({value: this.state.value, isCompleted: false})
  }


  render() {
    return (
       <form> 
          <input value={this.state.value} onChange={this.handleChange} type="text"/>
          <button onClick={this.handleSubmit}>Create</button>
        </form>
      );
  }
}


export default AddHabit;

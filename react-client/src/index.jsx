import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AddHabit from './components/AddHabit.jsx';
import HabitList from './components/HabitList.jsx';

const habits = [
  {habit: 'Exercise'}, 
  {habit: 'Meditate'} 
];


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      habits: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/habits', 
      success: (data) => {
        this.setState({
          habits: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Habit Tracker</h1>
      <AddHabit />
      <HabitList habits={this.state.habits}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AddHabit from './components/AddHabit.jsx';
import HabitList from './components/HabitList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      habits: []
      // isChecked: false
    }
    this.handleAddHabit = this.handleAddHabit.bind(this)
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/habits', 
  //     success: (data) => {
  //       this.setState({
  //         habits: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  
  handleAddHabit(habit) {
    var habitArr = [habit]
    this.setState({
      habits: this.state.habits.concat(habitArr)
    })
  }



  render () {
    return (<div>
      <h1>Habit Tracker</h1>
      <AddHabit handleAddHabit={this.handleAddHabit} />
      <HabitList habitlist={this.state.habits} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
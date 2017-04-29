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
    }
    this.handleAddHabit = this.handleAddHabit.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);

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
    this.setState({
      habits: this.state.habits.concat(habit)
    
    })
  }


  toggleCompleted(index) {
    const newHabits = this.state.habits.slice();
    newHabits[index].isCompleted = !newHabits[index].isCompleted;
    this.setState({
      habits: newHabits 
    });
    console.log(newHabits)
  }
 

  render () {
    return (<div>
      <h1>Habit Tracker</h1>
      <AddHabit handleAddHabit={this.handleAddHabit} />
      <HabitList habitlist={this.state.habits} toggleCompleted={this.toggleCompleted} isCompleted={this.state.isCompleted}/>
    </div>)
  }
}




ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AddHabit from './components/AddHabit.jsx';
import HabitList from './components/HabitList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      habit: []
    }

    this.handleAddHabit = this.handleAddHabit.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.insertHabit = this.insertHabit.bind(this);
    this.componentDidMount = this.componentDidMount(this);
    this.fetchHabits = this.fetchHabits.bind(this);
    this.deleteHabit = this.deleteHabit.bind(this);

  }

  fetchHabits() {
    var context = this;
    $.ajax({
      type: 'GET',
      url: '/habits',
      contentType: 'application/json'
     })
    .done((data) => {
     console.log('success', data);
     context.setState({habit: data});
     console.log("GET STATE INSIDE insertHabit", context.state)
   })
    .fail((err) => {
     console.log('There was an error!', err);
    })
  }


  insertHabit(habit) {
    var context = this;

    $.ajax({
      type: 'POST', 
      url: '/habits',
      contentType: 'application/json',
      data: JSON.stringify(habit)
    })
    .done((data) => {
      console.log('success!')
      this.fetchHabits();      
    })
    .fail(function(err) {
      console.log('there was an error with POST', err);
    })
  }



  componentDidMount() {
    this.fetchHabits();
  }

  
  handleAddHabit(habit) {
    this.setState({
      habit: this.state.habit.concat(habit)
    
    })

    this.insertHabit(habit);
  }


  deleteHabit(index) {
    var newHabits = this.state.habit.slice();
    newHabits.splice(index, 1);
    this.setState({habit: newHabits});
  }


  toggleCompleted(index) {
    const newHabits = this.state.habit.slice();
    newHabits[index].isCompleted = !newHabits[index].isCompleted;
    this.setState({
      habits: newHabits 
    });
  }
 

  render () {

    return (
    <div>
      <h1>Create Better Habits</h1>
      <AddHabit  handleAddHabit={this.handleAddHabit}  />
      <HabitList habitlist={this.state.habit} 
                 toggleCompleted={this.toggleCompleted} 
                 isCompleted={this.state.isCompleted} 
                 deleteHabit={this.deleteHabit} />

    </div>)
  }
}




ReactDOM.render(<App />, document.getElementById('app'));
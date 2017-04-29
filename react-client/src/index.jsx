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
    this.insertHabit = this.insertHabit.bind(this);
    this.componentDidMount = this.componentDidMount(this);

  }

  insertHabit(habit) {
    console.log("habit was entered!")
    var context = this;

    $.ajax({
      type: 'POST', 
      url: '/habits',
      contentType: 'application/json',
      data: JSON.stringify(habit)
    })
    .done((data) => {
      console.log('success!')
      context.setState(habit: data)
    })
    .fail(function(err) {
      console.log('there was an error with POST', err);
    })


    $.ajax({
      type: 'GET',
      url: '/habits',
      contentType: 'application/json'
    })
    .done((data) => {
      console.log('success', data);
      context.setState({habit: data});
    })
    .fail((err) => {
      console.log('There was an error!', err);
    })
  }
  

  componentDidMount() {
    var context = this;
    $.ajax({
      type: 'GET', 
      url: '/habits'
    })
    .done((data) => {
      console.log("DATA", data);
      context.setState({habit: data});
    })
    .fail((err) => {
      console.log('There was an error!', err);
    })

  }

  
  handleAddHabit(habit) {
    this.setState({
      habits: this.state.habits.concat(habit)
    
    })

    this.insertHabit(habit);
  }


  toggleCompleted(index) {
    const newHabits = this.state.habits.slice();
    newHabits[index].isCompleted = !newHabits[index].isCompleted;
    this.setState({
      habits: newHabits 
    });
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
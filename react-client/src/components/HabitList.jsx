import React from 'react';
import HabitEntry from './HabitEntry.jsx';

const HabitList = (props) => (
  <ul>
    <h4> Habit List </h4>
    {props.habitlist.map((habit, index) => 
    <HabitEntry 
    	index={index}
    	habit={habit.habit}
    	toggleCompleted={props.toggleCompleted} 
    	isCompleted={habit.isCompleted}
        deleteHabit={props.deleteHabit}

    />)}
  </ul>
)

export default HabitList;
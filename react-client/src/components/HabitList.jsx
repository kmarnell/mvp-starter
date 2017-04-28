import React from 'react';
import HabitEntry from './HabitEntry.jsx';

const HabitList = (props) => (
  <div>
    <h4> Habit List </h4>
    There are { props.habits.length } habits.
    {props.habits.map(habit => <HabitEntry key={habit} habit={habit}/>)}
  </div>
)

export default HabitList;
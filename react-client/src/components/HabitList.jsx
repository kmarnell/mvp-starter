import React from 'react';
import HabitEntry from './HabitEntry.jsx';

const HabitList = (props) => (
  <ul>
    <h4> Habit List </h4>
    {props.habitlist.map(habit => <HabitEntry key={habit} habit={habit}/>)}
  </ul>
)

export default HabitList;
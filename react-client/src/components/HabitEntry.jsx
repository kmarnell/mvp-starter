import React from 'react';

const HabitEntry = (props) => (
  <div>
    { props.habit }
    {props.isCompleted ? <button onClick={props.toggleCompleted}> YES </button> : 
    <button onClick={props.toggleCompleted}> NO </button>}
   	{console.log(props.isCompleted)}
  </div>
)

export default HabitEntry;
import React from 'react';


const HabitEntry = (props) => (
  <div>
    { props.habit }
    {props.isCompleted ? <button onClick={props.toggleCompleted.bind(null, props.index)}><i className="fa fa-check-square-o" aria-hidden="true"></i> </button> : 
    <button onClick={props.toggleCompleted.bind(null, props.index)}> <i className="fa fa-square-o" aria-hidden="true"></i> </button>}
  </div>
)


export default HabitEntry;



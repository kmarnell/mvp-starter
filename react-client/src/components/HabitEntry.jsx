import React from 'react';


const HabitEntry = (props) => (
  <div>
    { props.habit }
    {props.isCompleted ? <button onClick={props.toggleCompleted.bind(null, props.index)}> YES </button> : 
    <button onClick={props.toggleCompleted.bind(null, props.index)}> NO </button>}
   	{console.log(props.isCompleted)}
  </div>
)


export default HabitEntry;


// class HabitEntry extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {

// 		}
// 	}

// 	render() {
// 		return()
// 	}



//}
import React from 'react';


const habitItemStyle = {

  background: '#CFFFCE',
  float: 'left',
  margin: 0,
  borderRadius: 4,
  width: 150,
  fontFamily: "Trebuchet MS"
}



const HabitEntry = (props) => (
  <div>
  	<div style={habitItemStyle}>
  		{ props.habit }
  	</div>
   
  	 <div>
   		{props.isCompleted ? <button onClick={props.toggleCompleted.bind(null, props.index)}><i className="fa fa-check-square-o" aria-hidden="true"></i> </button> : 
    	<button onClick={props.toggleCompleted.bind(null, props.index)}> <i className="fa fa-square-o" aria-hidden="true"></i> </button>}
 		<button onClick={props.deleteHabit.bind(null, props.index)}> <i className="fa fa-trash-o" aria-hidden="true"> </i>  </button>
  	</div>
  </div>
)


export default HabitEntry;



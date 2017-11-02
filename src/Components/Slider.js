import React from 'react';

type SliderPropTypes = {
	id: string,
	label: string
};


const Slider = (props: SliderPropTypes) => {
	return (
		<p className="range-field">
			<label htmlFor={props.id}>{props.label}</label>
		    <input type="range" value="1" id={props.id} min="1" max="10" />
		</p> 
	)
}

export default Slider
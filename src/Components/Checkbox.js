import React from 'react';

type CheckboxPropTypes = {
	id: string,
	label: string,
  	checked: boolean
};


const Checkbox = (props: CheckboxPropTypes) => {
	return (
		<p>
      <input type="checkbox" id={`${props.id}-check`} data-shape={props.id} checked={props.checked} />
      <label htmlFor={`${props.id}-check`}>{props.label}</label>
    </p>
	)
}

export default Checkbox;
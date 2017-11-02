import React from 'react';

type ActionButtonPropTypes = {
	color: string,
	label: string,
  selector: string,
  isHidden?: boolean
};


const ActionButton = (props: ActionButtonPropTypes) => {
	return (
		<div className='download-btn' hidden={props.isHidden ? props.isHidden : ''}>
      <a className={`waves-effect waves-light btn ${props.color} ${props.selector} darken-${props.darken} full-width`}>{props.label}</a>
    </div>
	)
}

export default ActionButton
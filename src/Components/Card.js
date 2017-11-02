import React from 'react';

type CardPropTypes = {
	heading: string,
	children: Array<React$Element>
};


const Card = (props: CardPropTypes) => {
	return (
		<div className="">
			<h5>{props.heading}</h5>
			{props.children}
		</div>
	)
}

export default Card;
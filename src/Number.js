import React from 'react';

function Number(props) {
	let color = props.number < 0 ? 'white' : 'black';
	const myStyle = {
		color: color,
	};
	return (
		<div className="number">
			<h2 style={myStyle}>{props.number}</h2>
		</div>
	);
}

export default Number;

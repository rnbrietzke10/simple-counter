import React from 'react';

function Buttons({ number, setNumber }) {
	return (
		<div className="btn-container">
			<div className="btn decrease" onClick={() => setNumber(number - 1)}>
				DECREASE
			</div>
			<div className="btn reset" onClick={() => setNumber(0)}>
				RESET
			</div>
			<div className="btn increase" onClick={() => setNumber(number + 1)}>
				INCREASE
			</div>
		</div>
	);
}

export default Buttons;

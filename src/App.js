import React, { useState } from 'react';
import './App.css';
import Number from './Number';

function App() {
	const [number, setNumber] = useState(0);
	let color = number < 0 ? 'red' : 'black';
	const myStyle = {
		color: color,
	};
	return (
		<div className="App">
			<div className="container">
				<div className="main">
					<div className="title">
						<h1>Counter</h1>
					</div>
					<div className="number">
						<h2 style={myStyle}>{number}</h2>
					</div>

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
				</div>
			</div>
		</div>
	);
}

export default App;

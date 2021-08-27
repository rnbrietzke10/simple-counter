import React, { useState } from 'react';
import './App.css';
import Number from './Number';

function App() {
	const [number, setNumber] = useState(0);
	let backgroundColor = number < 0 ? 'red' : 'white';
	const backgroundStyle = {
		backgroundColor: backgroundColor,
	};
	return (
		<div className="App">
			<div className="container" style={backgroundStyle}>
				<div className="main">
					<div className="title">
						<h1>Counter</h1>
					</div>
					<Number number={number} />
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

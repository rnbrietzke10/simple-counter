import React, { useState } from 'react';
import './App.css';
import Number from './Number';
import Buttons from './Buttons';

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

					<Buttons number={number} setNumber={setNumber} />
				</div>
			</div>
		</div>
	);
}

export default App;

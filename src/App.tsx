import React, { useState, useEffect } from 'react';

interface Props {
	name: string;
	price: number;
}

const App = (props: Props) => {
	const [state, setState] = useState(props);
	const { name, price } = state;

	const reset = () => setState(props);

	useEffect(() => {
		console.log('componentDidMount!!!!!!!');
	}, []);

	useEffect(() => {
		console.log('this callback uis name only!!!!!!!');
	}, [name]);

	const renderPeriod = () => {
		console.log('render');
		return '。';
	};

	return (
		<>
			<p>
				現在の{name}は、{price}です{renderPeriod()}
			</p>
			<button onClick={() => setState({ ...state, price: price + 1 })}>
				+1
			</button>
			<button onClick={() => setState({ ...state, price: price - 1 })}>
				-1
			</button>
			<button onClick={reset}>Reset</button>
			<input
				type="text"
				value={name}
				onChange={e => setState({ ...state, name: e.target.value })}
			/>
		</>
	);
};

App.defaultProps = {
	name: '',
	price: 1000
};

export default App;

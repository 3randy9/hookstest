import React, { useState } from 'react';

const App: React.FC = () => {
	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);
	const increment2 = () => setCount(previousCount => previousCount + 1);
	const decrement2 = () => setCount(previousCount => previousCount - 1);
	const clear = () => setCount(0);
	const double = () => setCount(count * 2);
	const third = () => setCount(count % 3 === 0 ? count / 3 : count);

	return (
		<>
			<div>count: {count}</div>
			<div>
				<button onClick={increment}>+1</button>
				<button onClick={decrement}>-1</button>
			</div>
			<div>
				<button onClick={increment2}>+1</button>
				<button onClick={decrement2}>-1</button>
			</div>
			<div>
				<button onClick={clear}>Reset</button>
				<button onClick={double}>×2</button>
				<button onClick={third}>3の倍数の値だけ3で割る</button>
			</div>
		</>
	);
};

export default App;

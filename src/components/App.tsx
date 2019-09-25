import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';
import AppContext from '../contexts/AppContext';
import EventForm from './EventForm';
import EventList from './EventList';

const App = () => {
	const [state, dispatch] = useReducer(reducer, []);

	return (
		<AppContext.Provider value={'context'}>
			<div className="container">
				<EventForm state={state} dispatch={dispatch} />
				<EventList state={state} dispatch={dispatch} />
			</div>
		</AppContext.Provider>
	);
};

export default App;

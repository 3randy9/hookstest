import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';
import AppContext from '../contexts/AppContext';
import EventForm from './EventForm';
import EventList from './EventList';
import OperationList from './OperationList';

const App = () => {
	const initialState = {
		events: [],
		operationLogs: []
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			<div className="container">
				<EventForm />
				<EventList />
				<OperationList />
			</div>
		</AppContext.Provider>
	);
};

export default App;

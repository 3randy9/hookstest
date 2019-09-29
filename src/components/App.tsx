import React, { useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';
import AppContext from '../contexts/AppContext';
import EventForm from './EventForm';
import EventList from './EventList';
import OperationList from './OperationList';

const APP_KEY = 'appWithRedux'

const App = () => {
	const appState = localStorage.getItem(APP_KEY);
	const initialState = appState ? JSON.parse(appState) : {
		events: [],
		operationLogs: []
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const stateToJson = JSON.stringify(state);
		localStorage.setItem(APP_KEY, stateToJson);
	}, [state]);

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

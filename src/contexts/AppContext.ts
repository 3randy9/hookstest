import { createContext } from 'react';
import { EventState, Action } from '../reducers/events';

interface State {
	events: EventState;
}
export interface ContextProps {
	state: State;
	dispatch: React.Dispatch<Action>;
}
const AppContext = createContext({} as ContextProps);

export default AppContext;

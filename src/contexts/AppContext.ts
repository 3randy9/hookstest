import { createContext } from 'react';
import { EventsState, EventAction } from '../reducers/events';
import {
	OperationLogsState,
	OperationLogsAction
} from '../reducers/operationLogs';

interface State {
	events: EventsState;
	operationLogs: OperationLogsState;
}

type ContextPropsAction = EventAction | OperationLogsAction;

export interface ContextProps {
	state: State;
	dispatch: React.Dispatch<ContextPropsAction>;
}
const AppContext = createContext({} as ContextProps);

export default AppContext;

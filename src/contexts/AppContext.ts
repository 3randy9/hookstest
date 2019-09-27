import { createContext } from 'react';
import { State, Action } from '../reducers';

interface ContextProps {
	state: State[];
	dispatch: React.Dispatch<Action>;
}
const AppContext = createContext({} as ContextProps);

export default AppContext;

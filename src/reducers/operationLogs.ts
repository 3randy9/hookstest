import { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOG } from '../actions';

export interface OperationLogState {
	description: string;
	operatedAt: string;
}

export interface OperationLogsAction extends OperationLogState {
	type: string;
}

export type OperationLogsState = OperationLogState[];

const operationLogs = (
	state: OperationLogsState = [],
	action: OperationLogsAction
) => {
	switch (action.type) {
		case ADD_OPERATION_LOG:
			const operationLog = {
				description: action.description,
				operatedAt: action.operatedAt
			};
			return [operationLog, ...state];

		case DELETE_ALL_OPERATION_LOG:
			return [];

		default:
			return state;
	}
};

export default operationLogs;

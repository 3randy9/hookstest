import React from 'react';
import { OperationLogState } from '../reducers/operationLogs';

type OperationLogProps = {
	operationLog: OperationLogState;
};

const OperationLog = ({ operationLog }: OperationLogProps) => {
	return (
		<tr>
			<td>{operationLog.description}</td>
			<td>{operationLog.operatedAt}</td>
		</tr>
	);
};

export default OperationLog;

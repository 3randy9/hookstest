import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import OperationLog from './OperationLog';

const OperationList = () => {
	const { state } = useContext(AppContext);
	return (
		<>
			<h4 className="mt-5">操作ログ一覧</h4>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>内容</th>
						<th>日時</th>
					</tr>
				</thead>
				<tbody>
					{state.operationLogs.map((operationLog, i) => {
						return <OperationLog key={i} operationLog={operationLog} />;
					})}
				</tbody>
			</table>
		</>
	);
};

export default OperationList;

import React, { useContext } from 'react';
import Event from './Event';
import AppContext from '../contexts/AppContext';

const EventList = ({ state, dispatch }: any) => {
	const value = useContext(AppContext);

	return (
		<>
			<div>{value}</div>
			<h4 className="mt-5">イベント一覧</h4>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>ID</th>
						<th>タイトル</th>
						<th>ボディー</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{state.map((event: any, i: number) => (
						<Event key={i} event={event} dispatch={dispatch} />
					))}
				</tbody>
			</table>
		</>
	);
};

export default EventList;

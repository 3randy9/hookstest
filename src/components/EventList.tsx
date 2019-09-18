import React from 'react';
import Event from './Event';

const EventList = ({ state, dispatch }: any) => {
	return (
		<>
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

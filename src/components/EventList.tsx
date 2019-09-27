import React, { useContext } from 'react';
import Event from './Event';
import AppContext from '../contexts/AppContext';

const EventList = () => {
	const { state } = useContext(AppContext);

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
					{state.map((event, i) => (
						<Event key={i} event={event} />
					))}
				</tbody>
			</table>
		</>
	);
};

export default EventList;

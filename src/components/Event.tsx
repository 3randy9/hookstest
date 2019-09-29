import React, { useContext } from 'react';
import { DELETE_EVENT, ADD_OPERATION_LOG } from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';
import { EventState } from '../reducers/events';

type EventProps = {
	event: EventState;
};

const Event = ({ event }: EventProps) => {
	const { dispatch } = useContext(AppContext);
	const id = event.id;

	const handleClickDeleteBtn = (e: React.BaseSyntheticEvent) => {
		e.preventDefault();
		const result = window.confirm(
			`イベント(id=${id})を本当に削除しても良いですか？`
		);
		if (result) {
			dispatch({
				type: DELETE_EVENT,
				id
			});
			dispatch({
				type: ADD_OPERATION_LOG,
				description: `イベント(id=${id})を削除しました。`,
				operatedAt: timeCurrentIso8601
			});
		}
	};

	return (
		<tr>
			<td>{id}</td>
			<td>{event.title}</td>
			<td>{event.body}</td>
			<td>
				<button
					type="button"
					className="btn btn-danger"
					onClick={handleClickDeleteBtn}
				>
					削除
				</button>
			</td>
		</tr>
	);
};

export default Event;

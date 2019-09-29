import React, { useState, useContext } from 'react';
import {
	CREATE_EVENT,
	DELETE_ALL_EVENT,
	ADD_OPERATION_LOG,
	DELETE_ALL_OPERATION_LOG
} from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';

const EventForm = () => {
	const { state, dispatch } = useContext(AppContext);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const addEvent = (e: React.BaseSyntheticEvent) => {
		e.preventDefault();
		dispatch({
			type: CREATE_EVENT,
			title,
			body
		});

		dispatch({
			type: ADD_OPERATION_LOG,
			description: 'イベントを作成しました。',
			operatedAt: timeCurrentIso8601
		});

		setTitle('');
		setBody('');
	};

	const deleteAllEvent = (e: React.BaseSyntheticEvent) => {
		e.preventDefault();
		const result = window.confirm(
			'すべてのイベントを本当に削除しても良いですか？'
		);
		if (result) {
			dispatch({
				type: DELETE_ALL_EVENT
			});
			dispatch({
				type: ADD_OPERATION_LOG,
				description: 'すべてのイベントを削除しました。',
				operatedAt: timeCurrentIso8601
			});
		}
	};

	const unCreatable = title === '' || body === '';

	return (
		<>
			<h4 className="mt-5">イベント作成フォーム</h4>
			<form>
				<div className="form-group">
					<label htmlFor="formEventTitle">タイトル</label>
					<input
						type="text"
						id="formEventTitle"
						className="form-control"
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="formEventBody">ボディー</label>
					<textarea
						id="formEventBody"
						className="form-control"
						value={body}
						onChange={e => setBody(e.target.value)}
					/>
				</div>

				<button
					className="btn btn-primary"
					disabled={unCreatable}
					onClick={addEvent}
				>
					イベントを作成する
				</button>
				<button
					className="btn btn-danger ml-3"
					disabled={state.events.length === 0}
					onClick={deleteAllEvent}
				>
					すべてのイベントを削除する
				</button>
			</form>
		</>
	);
};

export default EventForm;

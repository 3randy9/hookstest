import React, { useState } from 'react';

const EventForm = ({ state, dispatch }: any) => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const addEvent = (e: React.BaseSyntheticEvent) => {
		e.preventDefault();
		dispatch({
			type: 'CREATE_EVENT',
			title,
			body
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
				type: 'DELETE_ALL_EVENT'
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
					disabled={state.length === 0}
					onClick={deleteAllEvent}
				>
					すべてのイベントを削除する
				</button>
			</form>
		</>
	);
};

export default EventForm;

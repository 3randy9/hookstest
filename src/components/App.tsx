import React, { useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';

const App = () => {
	const [state, dispatch] = useReducer(reducer, []);
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

	console.log({ state });

	return (
		<div className="container">
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

				<button className="btn btn-primary" onClick={addEvent}>
					イベントを作成する
				</button>
				<button className="btn btn-danger">すべてのイベントを削除する</button>
			</form>

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
				<tbody></tbody>
			</table>
		</div>
	);
};

export default App;

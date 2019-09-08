import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<div className="container">
			<h4 className="mt-5">イベント作成フォーム</h4>
			<form>
				<div className="form-group">
					<label htmlFor="formEventTitle">タイトル</label>
					<input type="text" id="formEventTitle" className="form-control" />
				</div>
				<div className="form-group">
					<label htmlFor="formEventBody">ボディー</label>
					<textarea id="formEventBody" className="form-control" />
				</div>

				<button className="btn btn-primary">イベントを作成する</button>
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

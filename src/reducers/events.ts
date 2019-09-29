import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENT } from '../actions';
// action = {
//		type: 'CREATE_EVENT',
// 		title: '2020年東京オリンピックのお知らせ',
// 		body: '2020年に東京オリンピックを開催します。'
// }

export interface EventState {
	id?: number;
	title?: string;
	body?: string;
}

export interface EventAction extends EventState {
	type: string;
}

export type EventsState = EventState[];

const events = (state: EventsState = [], action: EventAction) => {
	switch (action.type) {
		case CREATE_EVENT:
			const event = { title: action.title, body: action.body };
			const length = state.length;
			const id = length === 0 ? 1 : state[length - 1].id! + 1;
			return [...state, { id, ...event }];

		case DELETE_EVENT:
			return state.filter(event => event.id !== action.id);

		case DELETE_ALL_EVENT:
			return [];
		default:
			return state;
	}
};

export default events;

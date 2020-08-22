import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			if (action.payload.data) {
				return [action.payload.data, ...state]; //return new state
			} else {
				return state;
			}
		default:
			return state;
	}
}

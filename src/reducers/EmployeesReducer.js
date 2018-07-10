import { EMPLOYEES_FETCH_SUCCESS, EMPLOYEES_FETCH } from '../actions/type';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMPLOYEES_FETCH:
			return { ...state, loading: true };
		case EMPLOYEES_FETCH_SUCCESS:
			console.log(action.payload);
			return { ...action.payload, loading: false };
		default:
			return state;
	}
};

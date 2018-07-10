import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_CREATED } from '../actions/type';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMPLOYEE_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case EMPLOYEE_CREATE:
			return { ...state, loading: true };
		case EMPLOYEE_CREATED:
			return INITIAL_STATE;
		default:
			return state;
	}
};

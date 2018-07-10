import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE,
	EMPLOYEE_CREATED, EMPLOYEES_FETCH_SUCCESS,
	EMPLOYEES_FETCH, EMPLOYEE_SAVE } from './type';

export const employeeUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }
	};
};

export const employeeCreate = ({ name, phone, shift }) => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		dispatch({ type: EMPLOYEE_CREATE });
		firebase.database().ref(`/users/${currentUser.uid}/employees`)
			.push({ name, phone, shift })
			.then(() => {
				dispatch({ type: EMPLOYEE_SAVE });
				Actions.pop();
			});
	};
};

export const employeeFetch = () => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		dispatch({ type: EMPLOYEES_FETCH });
		firebase.database().ref(`/users/${currentUser.uid}/employees`)
			.on('value', snapshot => {
				dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
			});
	};
};

export const employeeSave = ({ name, phone, shift, uid }) => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		dispatch({ type: EMPLOYEE_CREATE });
		firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
			.set({ name, phone, shift })
			.then(() => {
				dispatch({ type: EMPLOYEE_CREATED });
				Actions.pop();
			});
	};
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.pop();
      });
  };
};

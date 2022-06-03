export const USER_ID = 'USER_ID';
export const USER_DATA = 'USER_DATA';

export const setID = (id) => {
	return {
		type: USER_ID,
		id: id
	};
}

export const setUserData = (data) => {
	return {
		type: USER_DATA,
		data: data
	};
}


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isLoggedIn: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			login: () => { setStore({isLoggedIn: true});},
			logout:  () => { setStore({isLoggedIn: false});},
		}
	};
};

export default getState;

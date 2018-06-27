import bugServer from '../services/bugServer';

function getBugsSync(){
	return [
		{ id : 100, name : 'Application not working', isClosed : false},
		{ id : 101, name : 'Too many bugs', isClosed : true},
	]
}
function load(){
	return function(dispatch){
		/*console.log(arguments);
		const bugs = getBugsSync();
		const action = { type : 'LOAD', payload : bugs};
		dispatch(action);*/

		bugServer
			.getAll()
			.then(bugs => {
				const action = { type : 'LOAD', payload : bugs};
				dispatch(action);
			});

	}
}
export default load;
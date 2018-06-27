import bugServer from '../services/bugServer';

function addNew(bugName){
	return function(dispatch){
		const newBugData = {
			id : 0,
			name : bugName,
			isClosed : false
		};
		bugServer
			.save(newBugData)
			.then(newBug => {
				const action = { type : 'ADD_NEW', payload : newBug };
				dispatch(action);		
			});
	}
}
export default addNew;
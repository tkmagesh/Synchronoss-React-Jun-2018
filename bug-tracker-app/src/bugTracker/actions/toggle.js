import bugServer from '../services/bugServer';

function toggle(bugToToggle){
	return function(dispatch){
		let toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		bugServer.save(toggledBugData)
			.then((toggledBug) => {
				const action = { type : 'TOGGLE', payload : {oldBug : bugToToggle, newBug : toggledBug}};
				dispatch(action);
			});
	}
}
export default toggle;
export function bugsReducer(currentState = [], action){
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		let newState = [...currentState, newBug];
		return newState;
	}
	if (action.type === 'TOGGLE'){
		let { oldBug, newBug } = action.payload;
		let newState = currentState.map(bug => bug === oldBug ? newBug : bug);
		return newState;
	}
	if (action.type === 'REMOVE'){
		let { payload : closedBugs } = action;
		let newState = currentState.filter(bug => closedBugs.indexOf(bug) === -1);
		return newState;
	}
	return currentState;
}
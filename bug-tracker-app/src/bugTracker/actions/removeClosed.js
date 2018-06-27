function removeClosed(){
	return function(dispatch, getState){
		let closedBugs = getState().bugsData.filter(bug => bug.isClosed);
		const action = { type : 'REMOVE', payload : closedBugs};
		dispatch(action);
	}
}
export default removeClosed;
function removeClosed(bugs){
	let closedBugs = bugs.filter(bug => bug.isClosed);
	const action = { type : 'REMOVE', payload : closedBugs};
	return action;
}
export default removeClosed;
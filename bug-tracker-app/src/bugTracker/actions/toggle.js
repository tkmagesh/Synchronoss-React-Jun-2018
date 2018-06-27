function toggle(bugToToggle){
	let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
	const action = { type : 'TOGGLE', payload : {oldBug : bugToToggle, newBug : toggledBug}};
	return action;
}
export default toggle;
import React from 'react';

let BugItem = ({bug, toggle}) => (
	<li >
		<span className="bugname" onClick={() => toggle(bug)}>{bug.name}</span>
		<div>[{bug.isClosed.toString()}]</div>
		<div className="datetime">[Created At]</div>
	</li>
);
export default BugItem;
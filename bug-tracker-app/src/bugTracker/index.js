import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import bugActions from './actions';

import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';

class BugTracker extends Component{
	render(){
		let {list : bugs,addNew, toggle, removeClosed} = this.props;
			
		return(
			<div>
				<BugStats bugs={bugs} />
				<BugSort />
				<BugEdit addNew={addNew} />
				<BugList {...{bugs, toggle, removeClosed}} />
			</div>
		)
	}
}

function mapStateToBugTrackerProps(storeState){
	//let bugs = storeState.bugsData.filter((bug, index) => index % 2 === storeState.spinnerData % 2);
	let bugs = storeState.bugsData;
	return { list : bugs };
}
function mapDispatchToBugTrackerProps(dispatch){
	const actions = bindActionCreators(bugActions, dispatch);
	return actions;
}
export default connect(mapStateToBugTrackerProps, mapDispatchToBugTrackerProps)(BugTracker);








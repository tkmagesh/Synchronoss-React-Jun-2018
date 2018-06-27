import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

let spinnerActionCreators = {
	increment(delta){
		return { type : 'INCREMENT', payload : delta };
	},
	decrement(delta){
		return { type : 'DECREMENT', payload : delta };
	}
}

class Spinner extends Component{
	state = {deltaValue : 0}
	render(){
		let { value, increment, decrement } = this.props;
		return(
			<div>
				<input type="number" onChange={evt => this.setState({deltaValue : evt.target.valueAsNumber})} />
				<br/>
				<input type="button" value="DECREMENT" onClick={() => decrement(this.state.deltaValue)}/>
				<span> [ {value} ] </span>
				<input type="button" value="INCREMENT" onClick={() => increment(this.state.deltaValue)}/>
			</div>
		)
	}
}

function mapStateToSpinnerProps(storeState){
	let value = storeState.spinnerData;
	return { value : value };
}
function mapDispatchToSpinnerProps(dispatch){
	const spinnerActions = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActions;
}
export default connect(mapStateToSpinnerProps, mapDispatchToSpinnerProps)(Spinner);






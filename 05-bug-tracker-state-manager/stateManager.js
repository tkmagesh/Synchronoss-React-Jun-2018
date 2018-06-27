var SM = (function(){
	var _state = undefined,
		_listeners = [],
		_reducer = undefined,
		__init_action = '@@init_action';

	function getState(){
		return _state;
	}

	function subscribe(listenerFn){
		if (typeof listenerFn === 'function')
			_listeners.push(listenerFn);
	}

	function triggerChange(){
		_listeners.forEach(listenerFn => listenerFn());
	}

	function dispatch(action){
		var newState = _reducer(_state, action);
		if (newState === _state) return;
		_state = newState;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_state = _reducer(_state, __init_action);
		return { getState, subscribe, dispatch };
	}

	function bindActionCreators(actionCreators, dispatch){
		let result = {};
		for(let key in actionCreators){
			result[key] = function(){
				let action = actionCreators[key].apply(undefined, arguments);
				dispatch(action);
			}
		}
		return result;
	}

	return { createStore, bindActionCreators };

})();

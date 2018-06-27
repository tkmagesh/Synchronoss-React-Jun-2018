import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import BugTracker from './bugTracker';
import Spinner from './spinner';
import appStore from './store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


ReactDOM.render(
	<Provider store={appStore}>
		<Router>
			<div>
				<Link to="/">Bug Tracker</Link>
				<br/>
				<Link to="/spinner">Spinner</Link>
				<br />
			  <Route exact path="/" component={BugTracker} />
		      <Route path="/bugs" component={BugTracker} />
		      <Route path="/spinner" component={Spinner} />
		     </div>
	    </Router>
	</Provider>
	, document.getElementById('root')
);
		
registerServiceWorker();

"use strict";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import App from "App";

import { Home, Blog } from './containers';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Router>
			<App>
				<Switch>
					<Route exact path="*/" component={Home} />
					<Route exact path="*/blog" component={Blog} />
				</Switch>
			</App>
		</Router>, document.querySelector("#app"));
});

//<Route exact path="*/" component={Home} />
//<Route exact path="*/blog/" component={Blog} />

'use strict';

import React, { Component } from 'react';

import { CookieConsentMessage } from './components/';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.children}
				<CookieConsentMessage />
			</div>
		);
	}
}

export default App;

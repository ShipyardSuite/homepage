'use strict';

import React, { Component } from 'react';

import { Segment, Container, Menu, Icon, Image, Button } from 'semantic-ui-react';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="NotFound">
				<div className="message">
					<Segment>Homepage</Segment>
				</div>
			</div>
		);
	}
}

export default Home;

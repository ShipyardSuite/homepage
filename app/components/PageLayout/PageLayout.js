'use strict';

import React, { Component } from 'react';

import { Button, Message, Container } from 'semantic-ui-react';

import { PageHeader } from '../';

export default class PageLayout extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const { visible } = this.state;

		return (
			<div>
				<PageHeader />
				<Container fluid>{this.props.children}</Container>
				<div>footer</div>
			</div>
		);
	}
}

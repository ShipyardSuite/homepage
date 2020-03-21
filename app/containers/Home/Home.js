'use strict';

import React, { Component } from 'react';
import { PageLayout } from '../../components/';

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return <PageLayout>Homepage</PageLayout>;
	}
}

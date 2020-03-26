'use strict';
import { NavLink, Link } from 'react-router-dom';
import React, { Component } from 'react';

import { Segment, Container, Menu, Icon, Image, Button } from 'semantic-ui-react';

export default class PageHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<Segment inverted style={{ borderRadius: 0 }}>
					<Container fluid>
						<Menu stackable inverted secondary>
							<Menu.Item>
								<Image src="/homepage/images/shipyard_logo_icon.png" size="mini" />
							</Menu.Item>

							{/*
							<Menu.Item name="features">Item 1</Menu.Item>

							<Menu.Item name="testimonials">Item 2</Menu.Item>
							*/}

							<Menu.Menu position="right">
								<Menu.Item name="sign-in">
									<Button
										color="green"
										onClick={() => {
											window.location.replace(`http://${window.location.host}/auth/login`);
											return null;
										}}
									>
										Log-in
									</Button>
								</Menu.Item>

								<Menu.Item>
									<Icon
										name="github"
										size="large"
										onClick={() => {
											window.location.replace('https://github.com/ShipyardSuite');
											return null;
										}}
									/>
								</Menu.Item>
							</Menu.Menu>
						</Menu>
					</Container>
				</Segment>
			</div>
		);
	}
}

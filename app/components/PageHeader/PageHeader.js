import React from 'react';

import { Segment, Container, Menu, Icon, Image } from 'semantic-ui-react';

/**
 * Default class for react Application
 * @class Header
 */
export default class PageHeader extends React.Component {
	/**
	 * Renders the current react component.
	 * @method render
	 */
	render() {
		return (
			<Segment inverted style={{ borderRadius: 0 }}>
				<Container fluid>
					<Menu stackable inverted secondary>
						<Menu.Item>
							{/**
							 * @todo Fix image link
							 * @body The header image path needs to be fixed.
							 */}
							<Image src="./public/images/shipyard_logo_icon.png" size="mini" />
						</Menu.Item>
						{/* <Menu.Item disabled>FEATURES</Menu.Item> */}
						<Menu.Item href={`http://${window.location.host}/documentation/`}>DOCUMENTATION</Menu.Item>
						<Menu.Menu position="right">
							{/**
							 * @todo Fix semantic-ui button
							 * @body The Button element does not work currently, so only it's css has been used, use the real Button element instead.
							 */}
							<div className="item">
								<a className="ui primary button" href={`http://${window.location.host}/auth/login`}>
									Dashboard
								</a>
							</div>
							<Menu.Item>
								<a href="https://github.com/ShipyardSuite">
									<Icon name="github" size="big" />
								</a>
							</Menu.Item>
						</Menu.Menu>
					</Menu>
				</Container>
			</Segment>
		);
	}
}

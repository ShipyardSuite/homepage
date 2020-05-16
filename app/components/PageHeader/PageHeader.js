import React from "react";

import {
	Segment,
	Container,
	Menu,
	Icon,
	Image,
	Button,
} from "semantic-ui-react";

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
							<Image src="./homepage/public/images/shipyard_logo_icon.png" size="mini" />
						</Menu.Item>
						{/**
						 * @todo Add final links for feature list and blog
						 * @body Either create services for each header section, or repair the react-router setup for this service.
						 */}
						<Menu.Item href={"#"}>FEATURES</Menu.Item>
						<Menu.Item href={`http://${window.location.host}/status/`}>STATUS</Menu.Item>
						<Menu.Item href={`http://${window.location.host}/documentation/`}>DOCUMENTATION</Menu.Item>
						<Menu.Item href={`http://${window.location.host}/blog`}>BLOG</Menu.Item>

						<Menu.Menu position="right">

							<Menu.Item>
								<Button primary href={`http://${window.location.host}/auth/login`}>DASHBOARD</Button>
							</Menu.Item>
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

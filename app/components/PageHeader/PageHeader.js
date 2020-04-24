import React from 'react';

import { Menu, Button } from 'semantic-ui-react';

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
			<Menu secondary>
				<Menu.Item disabled>Features</Menu.Item>
				<Menu.Item name="documentation" href={`http://${window.location.host}/documentation/`}>
					Documentation
				</Menu.Item>
				<Menu.Menu position="right">
					<Menu.Item name="help">
						<Menu.Item name="login" href={`http://${window.location.host}/auth/login`}>
							Login
						</Menu.Item>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		);
	}
}
/*
				<Menu.Item href={`http://${window.location.host}`}>
					<img src="https://react.semantic-ui.com/logo.png" />
				</Menu.Item>
*/

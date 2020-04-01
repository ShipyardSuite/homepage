import React from 'react';

/**
 * Default class for react Application
 * @class App
 */
export default class App extends React.Component {
	componentDidMount() {
		document.title = 'Page Title';
	}

	/**
	 * Renders the current react component.
	 * @method render
	 */
	render() {
		return (
			<ul>
				<li>
					link to <a href={`http://${window.location.host}/auth/login`}>Login Page</a>
				</li>
				<li>
					link to <a href={`http://${window.location.host}/auth/login`}>Registration Page</a>
				</li>
			</ul>
		);
	}
}

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
					<a href={`http://${window.location.host}/documentation/`}>Documentation</a>
				</li>
				<li>
					<a href={`http://${window.location.host}/auth/login`}>Login Page</a>
				</li>
				<li>
					<a href={`http://${window.location.host}/auth/register`}>Registration Page</a>
				</li>
			</ul>
		);
	}
}

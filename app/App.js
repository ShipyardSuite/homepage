import React from 'react';

import { Menu, Container } from 'semantic-ui-react';
import { PageHeader } from './components';
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
			<Container fluid>
				<PageHeader />
				<p>PAGECONTENT</p>
				<p>FOOTER</p>
			</Container>
		);
	}
}

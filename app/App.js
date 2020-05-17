import React from "react";

import { Menu, Container } from "semantic-ui-react";
import { PageHeader, PageFooter } from "./components";
/**
 * Default class for react Application
 * @class App
 */
export default class App extends React.Component {
	componentDidMount() {
		document.title = "Page Title";
	}

	/**
	 * Renders the current react component.
	 * @method render
	 */
	render() {
		return (
			// <div>
			// 	<Container fluid>
			// 		<PageHeader />
			// 		<div className="Content">{this.props.children}</div>

			// 	</Container>
			// 	<PageFooter />
			// </div>
			<div>
				<div className="content">
					<Container fluid>
						<PageHeader />
						<Container>
							{this.props.children}
						</Container>
					</Container>
				</div>
				<PageFooter />
			</div>
		);
	}
}

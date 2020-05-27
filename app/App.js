import React from "react";

import { Menu, Container, Segment } from "semantic-ui-react";

import { PageHeader, PageFooter } from "./components";
/**
 * Default class for react Application
 * @class App
 */
export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			offset: 0
		};
	}

	componentDidMount() {
		document.title = "Page Title";
	}

	componentDidMount() {
		window.addEventListener('scroll', this.parallaxShift.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.parallaxShift.bind(this));
	}

	parallaxShift() {
		this.setState({
			offset: window.pageYOffset / 2
		});
	};

	/**
	 * Renders the current react component.
	 * @method render
	 */
	render() {
		return (
			<div>
				<header
					className='header-background'
					style={{ backgroundPositionY: this.state.offset, height: "100vh" }}
				>
					<PageHeader />
					<section
						className='info-container'
						style={{ bottom: this.state.offset / 2 }}
					>
						<Container>
							<Segment>Test</Segment>
						</Container>
					</section>
				</header>
				<Segment style={{ marginTop: 0 }} basic inverted>
					<Container>
						<Segment>Test</Segment>
					</Container>
				</Segment>
				<PageFooter />
			</div >
		);
	}
}

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
export default class PageFooter extends React.Component {
	/**
	   * Renders the current react component.
	   * @method render
	   */
    render() {
        return (
            <Segment secondary basic className="footer" textAlign="center">
                © {new Date().getFullYear()} ShipyardSuite
            </Segment>
        );
    }
}

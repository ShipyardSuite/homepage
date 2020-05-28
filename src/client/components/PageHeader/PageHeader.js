import React from "react";
import { Link } from "react-router-dom";
import {
    Segment,
    Container,
    Menu,
    Icon,
    Image,
    Button,
} from "semantic-ui-react";

import "./PageHeader.sass";

export default class PageHeader extends React.Component {
    render() {
        const { isHome } = this.props;

        return (
            <Segment inverted className={`PageHeader ${isHome ? "home" : ""}`}>
                <Container fluid>
                    <Menu
                        stackable
                        inverted
                        secondary
                        size="tiny"
                    >
                        {
                            isHome ? (
                                <Menu.Item>
                                    <Image src="./homepage/public/images/shipyard_logo_icon.png" size="mini" />
                                </Menu.Item>
                            )
                                :
                                (
                                    <Menu.Item as={Link} to="/">
                                        <Image src="./homepage/public/images/shipyard_logo_icon.png" size="mini" />
                                    </Menu.Item>
                                )
                        }

                        <Menu.Item as={Link} to="/features">FEATURES</Menu.Item>
                        <Menu.Item as={Link} to="/blog">BLOG</Menu.Item>
                        <Menu.Item href={`http://${window.location.host}/documentation/`}>DOCUMENTATION</Menu.Item>
                        <Menu.Item href={`http://${window.location.host}/status/`}>STATUS</Menu.Item>

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

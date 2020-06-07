import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Segment,
    Container,
    Menu,
    Icon,
    Image,
    Button,
} from 'semantic-ui-react';

import { i18nManager } from '@shipyardsuite/i18n-manager';

import './PageHeader.sass';

export default class PageHeader extends React.Component
{
    constructor(props) 
    {
        super(props);

        this.state = {
            language: navigator.language.slice(0,2) || 'en'
        };

        this.i18nManager = new i18nManager(this.state.language);
    }

    render()
    {
        const { isHome } = this.props;

        return (
            <Segment inverted className={`PageHeader ${isHome ? 'home' : ''}`}>
                <Container fluid>
                    <Menu
                        stackable
                        inverted
                        secondary
                        size="tiny"
                    >
                        {isHome ? (
                            <Menu.Item>
                                <Image src="./homepage/public/images/shipyard_logo_icon.png" size="mini" />
                            </Menu.Item>
                        ) : (
                            <Menu.Item as={Link} to="/">
                                <Image src="./homepage/public/images/shipyard_logo_icon.png" size="mini" />
                            </Menu.Item>
                        )}

                        <Menu.Item as={Link} to="/features">{this.i18nManager.message('layout.headerMenu.features').toUpperCase()}</Menu.Item>
                        <Menu.Item as={Link} to="/blog">{this.i18nManager.message('layout.headerMenu.blog').toUpperCase()}</Menu.Item>
                        <Menu.Item href={`http://${window.location.host}/documentation/`}>{this.i18nManager.message('layout.headerMenu.documentation').toUpperCase()}</Menu.Item>
                        <Menu.Item href={`https://shipyardsuite-${ 'develop' }.statuspage.io/`} target='_blank'>{this.i18nManager.message('layout.headerMenu.status').toUpperCase()}</Menu.Item>

                        <Menu.Menu position="right">
                            <Menu.Item>
                                <Button primary href={`http://${window.location.host}/auth/login`}>{this.i18nManager.message('layout.headerMenu.dashboard').toUpperCase()}</Button>
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

PageHeader.propTypes = {
    isHome: PropTypes.bool,
};

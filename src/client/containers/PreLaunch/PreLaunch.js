import React from 'react';
import { 
    Container, 
    Segment, 
    Menu, 
    Image,
} from 'semantic-ui-react';

import PreLaunchModal from './PreLaunchModal';

import { i18nManager } from '@shipyardsuite/i18n-manager';

import './PreLaunch.sass';

export default class PreLaunch extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {
            language: navigator.language.slice(0,2) || 'en'
        };

        this.i18nManager = new i18nManager(this.state.language);
    }

    componentDidMount()
    {
        document.title = 'ShipyardSuite';
    }

    render()
    {
        return (
            <div className="Prelaunch">
                <Segment 
                    className="page-header" 
                    basic 
                    secondary
                >
                    <Container>
                        <Menu 
                            stackable 
                            secondary 
                            size="tiny"
                            fluid={false}
                        >
                            <Menu.Item>
                                <Image 
                                    src="./homepage/public/images/shipyard_logo_icon.png" 
                                    size="mini" 
                                />
                            </Menu.Item>

                            <Menu.Menu position="right">
                                <Menu.Item>
                                    <PreLaunchModal />
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                    </Container>
                </Segment>
                <Container className="page-content">
                    PRELAUNCH CONTENT
                </Container>
                <Segment 
                    className="page-footer" 
                    basic 
                    secondary
                >
                    <Container textAlign="center">
                        © {new Date().getFullYear()} ShipyardSuite
                    </Container>
                </Segment>
            </div>
        );
    }
}

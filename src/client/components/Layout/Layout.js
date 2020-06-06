import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Grid } from 'semantic-ui-react';

import { PageHeader, PageFooter } from './../';

//import './Layout.sass';

export default class Layout extends React.Component
{
    constructor(props) 
    {
        super(props);

        this.state = {
            offset: 0
        };
    }

    componentDidMount() 
    {
        document.title = 'ShipyardSuite | Home';

        window.addEventListener('scroll', this.parallaxShift.bind(this));
    }

    componentWillUnmount() 
    {
        window.removeEventListener('scroll', this.parallaxShift.bind(this));
    }

    parallaxShift() 
    {
        this.setState({
            offset: window.pageYOffset / 2
        });
    }

    render() 
    {
        const { fluid, isHome } = this.props;

        return (
            <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
                {isHome ? (
                    <header
                        className="header-background"
                        style={{
                            backgroundPositionY: this.state.offset,
                            height: '80vh'
                        }}
                    >
                        <PageHeader isHome={isHome} />
                        <section
                            className='info-container'
                            style={{ bottom: this.state.offset / 2 }}
                        >
                            <Container>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={6}>
                                            <Header as="h1" inverted textAlign="center">WELCOME TEXT</Header>
                                        </Grid.Column>
                                        <Grid.Column width={10}>
                                            <Header floated="right" as="h1" inverted textAlign="center">SECONDARY TEXT</Header>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Container>
                        </section>
                    </header>
                ) : (
                    <PageHeader isHome={isHome} />
                )}
                <div style={{ flex: 1 }}>
                    <Container fluid={fluid}>
                        {this.props.children}
                    </Container>
                </div>
                <PageFooter/>
            </div>
        );
    }
}

Layout.propTypes = {
    fluid: PropTypes.bool,
    isHome: PropTypes.bool,
    children: PropTypes.array
};


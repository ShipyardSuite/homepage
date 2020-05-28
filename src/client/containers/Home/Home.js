import React from "react";
import {
    Segment,
    Container,
    Grid,
    Header
} from "semantic-ui-react";

import { Layout } from "./../../components/";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            offset: 0
        };
    }

    componentDidMount() {
        document.title = "ShipyardSuite | Home";

        window.addEventListener("scroll", this.parallaxShift.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.parallaxShift.bind(this));
    }

    parallaxShift() {
        this.setState({
            offset: window.pageYOffset / 2
        });
    }

    render() {
        return (
            <Layout fluid isHome>
                <div className="page">HOME</div>
            </Layout>
        );
    }
}

/*
<div>
                <header
                    className='header-background'
                    style={{
                        backgroundPositionY: this.state.offset,
                        height: "80vh"
                    }}
                >
                    <PageHeader isHome={true} />
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
                <Segment style={{ marginTop: 0 }} basic secondary>
                    <Container>
                        Test
                    </Container>
                </Segment>
                <Container>
                    TEXT
                </Container>
                <Container>
                    FEATURES
                </Container>
                <Segment style={{ marginTop: 0 }} basic secondary>
                    <Container>
                        FEATURES SLIDER
                    </Container>
                </Segment>
                <Container>
                    ITEMS
                </Container>
                <Segment style={{ marginTop: 0 }} basic secondary>
                    <Container>
                        TESTEMONIALS
                    </Container>
                </Segment>
                <PageFooter />
            </div >
*/
import React from "react";

import {
    Segment,
    Container,
    Grid,
    Button,
    Header
} from "semantic-ui-react";

export default class PageFooter extends React.Component {
    render() {
        return (
            <div>
                {/* <Segment
                    style={{ paddingTop: 0, paddingBottom: 0 }}
                    color="blue"
                    basic
                    inverted
                    secondary
                >
                    <Container>
                        <Grid padded="vertically">
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Header as='h1' inverted>Get Started now</Header>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <a href="/auth/register">
                                        <Button floated="right" size="huge">Register</Button>
                                    </a>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment> */}
                <Segment secondary basic className="footer" textAlign="center">
                    © {new Date().getFullYear()} ShipyardSuite
                </Segment>
            </div>
        );
    }
}
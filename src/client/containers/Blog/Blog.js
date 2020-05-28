import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Menu, Container, Segment, Header, Grid, Card, Icon, Image, Pagination, Loader } from "semantic-ui-react";

import { Layout } from "./../../components/";

export default class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            feed: [],
            items: []
        };
    }

    componentDidMount() {
        document.title = "ShipyardSuite | Blog";

        fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40sabesan96")
            .then((res) => res.json())
            .then((json) => {

                this.setState({
                    isLoading: false,
                    feed: json.feed,
                    items: json.items
                });
            });
    }

    render() {
        const { isLoading, feed, items } = this.state;

        return (
            <Layout>
                <Container>
                    {isLoading ?
                        (
                            <Segment basic>
                                <Loader active inline="centered" />
                            </Segment>
                        ) :
                        (
                            <Card.Group>
                                {items.map((item, i) => {
                                    return (
                                        <Card key={i} fluid>
                                            <Image src={item.thumbnail} wrapped ui={false} />
                                            <Card.Content>
                                                <Card.Header>{item.title}</Card.Header>
                                                <Card.Meta>
                                                    <span className="date">
                                                        {moment(item.pubDate).fromNow()}
                                                    </span>
                                                </Card.Meta>
                                                <Card.Description>
                                                    <Link to={`/blog/${item.guid.replace("https://medium.com/p/", "")}`}>Read Article</Link>

                                                </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                                <a>
                                                    <Icon name="user" />
                                                    {item.author}
                                                </a>
                                                <p style={{ float: "right" }}>
                                                    <Icon name="tags" />
                                                    {item.categories.map((category, i) => {
                                                        return (<span key={i}> {category}</span>);
                                                    })}
                                                </p>
                                            </Card.Content>
                                        </Card>
                                    );
                                })}
                            </Card.Group>
                        )}
                    <br />
                </Container>
            </Layout>
        );
    }
}

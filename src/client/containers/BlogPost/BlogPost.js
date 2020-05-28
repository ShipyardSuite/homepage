import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import {
    Segment,
    Container,
    Card,
    Icon,
    Image,
    Loader
} from "semantic-ui-react";

import { Layout } from './../../components/';

import "./BlogPost.css";

export default class BlogPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            post: []
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        document.title = "ShipyardSuite | Blog";

        fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40sabesan96')
            .then((res) => res.json())
            .then((json) => {

                const post = json.items.filter(function (item) {
                    return item.guid === `https://medium.com/p/${params.date}`
                });
                this.setState({
                    isLoading: false,
                    post: post[0]
                }, () => {
                    document.title = `ShipyardSuite | Blog: ${
                        post[0].title.length > 25 ?
                            (
                                `${post[0].title.substring(0, 25)}...`
                            )
                            :
                            (
                                post[0].title
                            )}`
                });
            });
    }

    render() {
        const { isLoading, post } = this.state;

        return (
            <Layout fluid>
                <Image src={post.thumbnail} />
                <Container>
                    {isLoading ?
                        (
                            <Segment basic>
                                <Loader active inline='centered' />
                            </Segment>
                        ) :
                        (
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header>{post.title}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>
                                            {moment(post.pubDate).fromNow()}
                                        </span>
                                    </Card.Meta>
                                    <Card.Description
                                        className="mediumContent"
                                        dangerouslySetInnerHTML={{ __html: post.content }}
                                    />
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon name='user' />
                                        {post.author}
                                    </a>
                                    {post.categories &&
                                        <p style={{ float: "right" }}>
                                            <Icon name='tags' />
                                            {post.categories.map((category, i) => {
                                                return (<span key={i}> {category}</span>)
                                            })}
                                        </p>
                                    }
                                </Card.Content>
                            </Card>
                        )}
                    <br />
                </Container>
            </Layout>
        );
    }
}
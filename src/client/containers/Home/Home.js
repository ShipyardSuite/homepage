import React from 'react';

import { Layout } from './../../components/';

export default class Home extends React.Component 
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
        return (
            <Layout fluid isHome>
                <div className="page">HOME</div>
            </Layout>
        );
    }
}

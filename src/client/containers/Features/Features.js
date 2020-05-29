import React from 'react';

import { Layout } from './../../components/';

export default class Features extends React.Component 
{

    componentDidMount() 
    {
        document.title = 'ShipyardSuite | 404 - Not found';
    }

    render()
    {
        return (
            <Layout>
                <div className="page">FEATURES</div>
            </Layout>
        );
    }
}

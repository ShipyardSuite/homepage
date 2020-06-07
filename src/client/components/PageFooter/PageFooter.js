import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

import { copyrightYear, serviceStatus } from './../../utils';

export default class PageFooter extends React.Component 
{
    constructor(props) 
    {
        super(props);
        
        this.state = {
            onlineState: 'none'
        };
    }

    setServiceStatusType()
    {
        fetch('https://mb7nljzwcx4d.statuspage.io/api/v2/status.json')
            .then((res) => res.json())
            .then((json) =>
            {
                this.setState({
                    onlineState: json.status.indicator
                });
            });
    }

    componentDidMount()
    {
        this.setServiceStatusType();
    }

    render() 
    {
        const { onlineState } = this.state;
        return (
            <div>
                <Segment secondary basic className="footer" textAlign="center">
                    © {copyrightYear(2020, new Date().getFullYear())} ShipyardSuite | 
                    Status <Icon color={serviceStatus(onlineState)} name='circle' />
                </Segment>
            </div>
        );
    }
}

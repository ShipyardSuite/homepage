import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

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
                let stateColor;

                console.log(json.status.indicator);

                switch(json.status.indicator)
                {
                case 'minor':
                    stateColor = 'green';
                    break;
                case 'major':
                    stateColor = 'yellow';
                    break;
                case 'critical':
                    stateColor = 'red';
                    break;
                case 'none':
                    stateColor = 'grey';
                    break;
                }

                this.setState({
                    onlineState: stateColor
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
                    © {new Date().getFullYear()} ShipyardSuite | <span>Status <Icon color={onlineState} name='circle' /></span>
                </Segment>
            </div>
        );
    }
}

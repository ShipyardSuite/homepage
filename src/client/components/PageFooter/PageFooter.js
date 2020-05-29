import React from 'react';
import { Segment } from 'semantic-ui-react';

export default class PageFooter extends React.Component 
{
    render() 
    {
        return (
            <div>
                <Segment secondary basic className="footer" textAlign="center">
                    © {new Date().getFullYear()} ShipyardSuite
                </Segment>
            </div>
        );
    }
}

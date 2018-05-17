import React, {Component} from 'react';
import { Button, Panel } from 'react-bootstrap';

class Ingest extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: true
        };
    }
    render() {
        return (
            <div id={this.props.assetId}>
                <Button onClick={() => this.setState({ open: !this.state.open })}>
                    Click to toggle
                </Button>
                <br />
                <Panel id="collapsible-panel-example-1" expanded={this.state.open}>
                    <Panel.Collapse>
                        <Panel.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred nesciunt sapiente
                            ea proident.
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
            </div>
        )
    };
}

export default Ingest;
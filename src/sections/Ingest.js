import React, {Component} from 'react';
import { PanelGroup, Panel, Button } from 'react-bootstrap';
import EncryptUploadForm from '../elementLib/EncryptUploadForm';

class Ingest extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            activeKey: '1'
        };
    }

    handleSelect(activeKey) {
        this.setState({ activeKey: activeKey });
    }

    handleAddAsset = (e) => {

    };

    render() {
        return (
            <section id="ingest" className="ssss" >
                <PanelGroup
                    accordion
                    id="accordion-controlled-example"
                    activeKey={this.state.activeKey}
                    onSelect={this.handleSelect}
                >
                    <Panel eventKey="1" bsStyle="success">
                        <Panel.Heading>
                            <Panel.Title toggle>Asset 1</Panel.Title>
                            <Panel.Toggle className="removeAsset"> - </Panel.Toggle>
                        </Panel.Heading>

                        <Panel.Body collapsible>
                            <EncryptUploadForm/>
                        </Panel.Body>
                    </Panel>

                    <Panel eventKey="2" bsStyle="danger">
                        <Panel.Heading>
                            <Panel.Title toggle>Asset 2</Panel.Title>
                            <Panel.Toggle className="removeAsset"> - </Panel.Toggle>
                        </Panel.Heading>

                        <Panel.Body collapsible>
                            <EncryptUploadForm/>
                        </Panel.Body>
                    </Panel>
                </PanelGroup>

                <Button onClick={() => this.setState({ open: !this.state.open })}>
                    Add Asset
                </Button>
            </section>
        );
    }
}

export default Ingest;

// import React, {Component} from 'react';
// import { Row, Col, Nav, NavItem, Tab } from 'react-bootstrap';
//
// class Ingest extends Component {
//     constructor(props, context) {
//         super(props, context);
//
//         this.handleSelect = this.handleSelect.bind(this);
//
//         this.state = {
//             key: 1
//         };
//     }
//
//     handleSelect(key) {
//         this.setState({ key });
//     }
//
//     render() {
//         return (
//             <section id="Ingest" className="ssss" >
//                 <Tab.Container id="left-tabs-example" defaultActiveKey="first">
//                     <Row className="clearfix">
//                         <Col sm={2}>
//                             <Nav bsStyle="pills" stacked>
//                                 <NavItem eventKey="first">Asset 1</NavItem>
//                                 <NavItem eventKey="second">Asset 2</NavItem>
//                             </Nav>
//                         </Col>
//                         <Col sm={10}>
//                             <Tab.Content animation>
//                                 <Tab.Pane eventKey="first">Asset 1 content</Tab.Pane>
//                                 <Tab.Pane eventKey="second">Asset 2 content</Tab.Pane>
//                             </Tab.Content>
//                         </Col>
//                     </Row>
//                 </Tab.Container>
//             </section>
//         );
//     }
// }
//
// export default Ingest;
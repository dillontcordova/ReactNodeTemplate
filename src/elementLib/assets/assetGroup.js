import React, {Component} from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Col, InputGroup, PanelGroup, Panel, Button } from 'react-bootstrap';
import EncryptUploadForm from '../../elementLib/EncryptUploadForm';


class assetGroup extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            activeKey   : 0,
            assets      : []
        };
    }

    handleAddAsset = (e) => {
        const assets = this.state.assets;
        this.setState({
            activeKey   : assets.length,
            assets      : assets.concat( this.createAsset(assets.length, 'danger') )
        });
    };

    handleRemoveAsset = (e) => {
        const assets = this.state.assets;
        assets.pop();
        this.setState({
            assets: assets
        });
    };

    handleSelect = (activeKey) => {
        this.setState({ activeKey });
    };

    asd = () => {
        const asdn = (ref) => {
            console.log(ref.checkValidity());
            // const isFormValid = !ref.props.children.some((formGroup)=>{
            //     return formGroup.props.validationState !== 'success';
            // });
            //
            // console.log(isFormValid);
        };

        return (
            <form ref={asdn} >
                <Form componentClass="fieldset" horizontal>
                    <FormGroup controlId="formValidationError3" validationState="success">
                        <Col componentClass={ControlLabel} xs={3}>
                            Input with error
                        </Col>
                        <Col xs={9}>
                            <InputGroup>
                                <InputGroup.Addon>...</InputGroup.Addon>
                                <FormControl type="text" />
                            </InputGroup>
                            <FormControl.Feedback />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formValidationSuccess4" validationState="error">
                        <Col componentClass={ControlLabel} xs={3}>
                            Input group with success
                        </Col>
                        <Col xs={9}>
                            <InputGroup>
                                <InputGroup.Addon>@</InputGroup.Addon>
                                <FormControl type="text" />
                            </InputGroup>
                            <FormControl.Feedback />
                        </Col>
                    </FormGroup>
                </Form>
            </form>
        );
    };


    createAsset = (key, style) => {

        return (
            <Panel key={key} eventKey={key} bsStyle={style}>
                <Panel.Heading>
                    <Panel.Title toggle>Asset {key}</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    {this.asd()}
                    <EncryptUploadForm kmsKey={this.props.kmsKey} bucketName={this.props.bucketName}/>
                </Panel.Body>
            </Panel>
        )
    };

    render() {
        return (
            <PanelGroup
                accordion
                id="accordion-controlled-example"
                activeKey={this.state.activeKey}
                onSelect={this.handleSelect}
            >
                {this.state.assets}

                <Button bsStyle="success" onClick={this.handleAddAsset}>
                    +
                </Button>
                <Button bsStyle="danger" onClick={this.handleRemoveAsset}>
                    -
                </Button>
            </PanelGroup>
        )
    };
}

export default assetGroup;
import React from 'react';
import EncryptUploadForm from '../EncryptUploadForm';
import { Form, FormControl, FormGroup, ControlLabel, Col, InputGroup, Panel } from 'react-bootstrap';

const metadataForm = () => {
    const getRef = (ref) => {
        // console.log(ref.checkValidity());
        const isFormValid = !ref.props.children.some((formGroup) => {
            return formGroup.props.validationState !== 'success';
        });

        console.log( isFormValid );
    };

    return (
        <form >
            <Form ref={getRef} componentClass="fieldset" horizontal>
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


export default ({key, style, kmsKey, bucketName}) => {
    return (
        <Panel key={key} eventKey={key} bsStyle={style}>
            <Panel.Heading>
                <Panel.Title toggle>Asset {key}</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
                {metadataForm()}
                <EncryptUploadForm kmsKey={kmsKey} bucketName={bucketName}/>
            </Panel.Body>
        </Panel>
    )
}
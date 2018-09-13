import React, {Component} from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Col, InputGroup, Button } from 'react-bootstrap';

export default class metadataForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            sourceSystemId  : '',
            metadata        : {},
            titleIds        : {
                editEidr: '',
                mpm     : ''
            },

            validators: {
                sourceSystemId: val => !!val.match('[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}')
            }
        };
    }



    validateFullForm = ( e ) => {
        e.preventDefault();
        debugger;
        // const isFormValid = formRef && !formRef.props.children.some((formGroup) => {
        //     return formGroup.props.validationState !== 'success';
        // });
        //
        // console.log( isFormValid );
    };

    validateFormGroup = ( val ) => {
        return !!val ? 'success': 'error';
    };

    onChange = ( e ) => {
        const target    = e.target;
        const value     = this.state.validators[target.id]( target.value );

        this.setState({
            [target.id]: value
        });
    };

    render() {
        return (
            <form onSubmit={this.validateFullForm}>
                <Form componentClass="fieldset" horizontal>
                    <FormGroup validationState={this.validateFormGroup( this.state.sourceSystemId )}>
                        <Col componentClass={ControlLabel} xs={3}>
                            Source System Id:
                        </Col>
                        <Col xs={9}>
                            <InputGroup>
                                <InputGroup.Addon>...</InputGroup.Addon>
                                <FormControl
                                    id="sourceSystemId"
                                    type="text"
                                    placeholder="Enter text"
                                    onChange={this.onChange}
                                />
                            </InputGroup>
                            <FormControl.Feedback />
                        </Col>
                    </FormGroup>

                    <FormGroup validationState={this.validateFormGroup( this.state.titleIds.mpm )}>
                        <Col componentClass={ControlLabel} xs={3}>
                            Title Id's:
                        </Col>
                        <Col xs={9}>
                            <InputGroup>
                                <InputGroup.Addon>@</InputGroup.Addon>
                                <FormControl
                                    id="titleIds.mpm"
                                    type="text"
                                    placeholder="Enter text"
                                    onChange={this.onChange}
                                />
                            </InputGroup>
                            <FormControl.Feedback />
                        </Col>
                    </FormGroup>

                    <FormGroup validationState={this.validateFormGroup( this.state.titleIds.editEidr )}>
                        <Col componentClass={ControlLabel} xs={3}>
                            Edit Eidr:
                        </Col>
                        <Col xs={9}>
                            <InputGroup>
                                <InputGroup.Addon>@</InputGroup.Addon>
                                <FormControl
                                    id="titleIds.editEidr"
                                    type="text"
                                    placeholder="Enter text"
                                    onChange={this.onChange}
                                />
                            </InputGroup>
                            <FormControl.Feedback />
                        </Col>
                    </FormGroup>

                    <Button type="submit">Submit</Button>
                </Form>
            </form>
        );
    }
}
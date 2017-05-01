/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';
import Magic from '../lib/Magic';
import Email from '../lib/Email';

class Contact extends Component {
    constructor(_props) {
        super(_props);

        this.state = {
            emailFrom: '',
            emailBody: '',
            emailAddress: '',
            emailSubject: ''
        };
        this.textRefs = [];
        this.componentRefs = [];
        this.triggerElement = null;
    }

    onChange = (_e) => {
        let newState = {};
        newState[_e.target.name] = _e.target.value;
        this.setState(newState);
    };

    onSubmit = (event) => {
        event.preventDefault();
        //verification
        //verify email and subject have all special chars removed
        let from = 'From: ' + this.state.emailFrom + this.state.emailAddress;
        Email.send({
            from: from,
            subject: this.state.emailSubject,
            text: from + '\n\n' + this.state.emailBody
        });
    };

    getTrigger = (_ref) => {
        this.triggerElement = _ref;
    };

    addTextRef = (_ref) => {
        this.textRefs.push(_ref);
    };

    addComponentRef = (_ref) => {
        this.componentRefs.push(_ref);
    };

    componentDidMount() {
        // Magic.tweenFrom(this.textRefs, 1, {opacity: 0, scaleX: -1, y: 500}, this.triggerElement);
        Magic.tweenStagger(this.componentRefs, 1, {scale: 0.5, opacity: 0, delay: 0.5, ease: 'Elastic.easeOut', force3D: true }, this.triggerElement);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>Contact</h2>
                    <p>
                        Lorem Ipsum passages, and more recently
                        with desktop publishing software
                    </p>

                    <form onSubmit={this.onSubmit} name="asd">
                        <div id="leftFormSide" className="col-lg-6 col-md-6">

                            <div className="input-group input-group-lg">
                                <span className="input-group-addon">
                                    <i className="fa fa-user"/>
                                </span>
                                <input type="text" className="form-control" placeholder="Full Name" value={this.state.emailFrom} name="emailFrom" onChange={ this.onChange }/>
                            </div>

                            <div className="input-group input-group-lg">
                                <span className="input-group-addon" >
                                    <i className="fa fa-envelope"/>
                                </span>
                                <input type="text" className="form-control" placeholder="Email Address" value={this.state.emailAddress} name="emailAddress" onChange={ this.onChange } />
                            </div>

                            <div className="input-group input-group-lg">
                                <span className="input-group-addon" >
                                    <i className="fa fa-phone"/>
                                </span>
                                <input type="text" className="form-control" placeholder="Phone Number"/>
                            </div>
                        </div>

                        <div id="rightFormSide" className="col-lg-6 col-md-6">
                            <span className="input-group-addon" >
                                <i className="fa fa-pencil-square-o"/>
                            </span>
                            <div className="input-group">
                                <textarea cols="80" rows="4" className="form-control" placeholder="Message" value={this.state.emailBody} name="emailBody" onChange={ this.onChange } />
                            </div>
                            <input ref={this.addComponentRef} type="submit"  value="Submit" className="btn btn-lg"/>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

export default Contact;
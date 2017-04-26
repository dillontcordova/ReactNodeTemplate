/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';
import Magic from '../lib/Magic';
import Email from '../lib/Email';

class Contact extends Component {
    constructor(_props) {
        super(_props);
        this.textRefs = [];
        this.componentRefs = [];
        this.triggerElement = null;
    }

    click = () => {
        //verification
        Email.send( {
            from : 'Dillon <dillontcordova@gmail.com>',
            subject : 'Dillon\'s Test!',
            text : 'Hello World'
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
        Magic.tweenFrom(this.textRefs, 1, { opacity: 0, scaleX: -1, y: 500}, this.triggerElement );
        Magic.tweenStagger(this.componentRefs, 1, {scale: 0.5, opacity: 0, delay: 0.5, ease: 'Elastic.easeOut', force3D: true}, this.triggerElement );
    }

    render() {
        return (
            <div ref={this.getTrigger} className="container">
                <div className="row">
                    <h2 ref={this.addTextRef} >Contact</h2>
                    <p ref={this.addTextRef} >
                        Lorem Ipsum passages, and more recently
                        with desktop publishing software
                    </p>

                    <div className="col-lg-6 col-md-6">

                        <div ref={this.addComponentRef} className="input-group input-group-lg">
                                    <span className="input-group-addon" id="sizing-addon1">
                                        <i className="fa fa-user"/>
                                    </span>
                            <input type="text" className="form-control" placeholder="Full Name"/>
                        </div>

                        <div ref={this.addComponentRef} className="input-group input-group-lg">
                                    <span className="input-group-addon" id="sizing-addon1">
                                        <i className="fa fa-envelope" />
                                    </span>
                            <input type="text" className="form-control" placeholder="Email Address"/>
                        </div>

                        <div ref={this.addComponentRef} className="input-group input-group-lg">
                                    <span className="input-group-addon" id="sizing-addon1">
                                        <i className="fa fa-phone" />
                                    </span>
                            <input type="text" className="form-control" placeholder="Phone Number"/>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div ref={this.addComponentRef} className="input-group">
                            <textarea name="" id="" cols="80" rows="6" className="form-control"/>
                        </div>
                        <button onClick={this.click} ref={this.addComponentRef} className="btn btn-lg">
                            Submit Your Message
                        </button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Contact;
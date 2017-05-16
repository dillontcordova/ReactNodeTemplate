/**
 * Created by dillo_000 on 3/17/2017.
 */
import React, {Component} from 'react';
import Magic from '../lib/Magic';

class Services extends Component {

    constructor(_props) {
        super(_props);
        this.textRefs = [];
        this.componentRefs = [];
        this.triggerElement = null;
    }

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
            <div ref={this.getTrigger} className="container" >
                <div className="row">
                    <h2 ref={this.addTextRef} className="serviceTitleText">Strengths</h2>
                    <p ref={this.addTextRef} className="serviceTitleText">
                        Lorem Ipsum is simply dummy text of the
                        printing and type setting dummy text
                    </p>

                    <div ref={this.addComponentRef} className="col-lg-3 col-md-3">
                        <i className='icon-database'/>
                        <h4>Web design</h4>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    </div>

                    <div ref={this.addComponentRef} className="col-lg-3 col-md-3">
                        <i className='icon-database'/>
                        <h4>Mobile Apps</h4>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    </div>

                    <div ref={this.addComponentRef} className="col-lg-3 col-md-3">
                        <i className='icon-database'/>
                        <h4>Database</h4>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    </div>

                    <div ref={this.addComponentRef} className="col-lg-3 col-md-3">
                        <i className='icon-database'/>
                        <h4>Consulting</h4>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Services;
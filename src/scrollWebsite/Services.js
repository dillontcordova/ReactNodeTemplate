/**
 * Created by dillo_000 on 3/17/2017.
 */
import React, {Component} from 'react';
import Magic from '../lib/Magic';
import FontIcon from './FontIcon';

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
            <div>
                <div ref={this.getTrigger} className="container" >
                    <div className="row">
                        <h2 ref={this.addTextRef} className="serviceTitleText">Services</h2>
                        <p ref={this.addTextRef} className="serviceTitleText">
                        </p>

                        <div ref={this.addComponentRef} className="col-lg-3 col-md-3">
                            <FontIcon fontClassName='icon-database'/>
                            <h4>FACE PAINTING</h4>
                            <p>
                                Enjoy a face painting done by your very own Ice Queen!
                            </p>
                        </div>

                        <div ref={this.addComponentRef} className="col-lg-3 col-md-3">
                            <FontIcon fontClassName='icon-database'/>
                            <h4>STORY TELLING</h4>
                            <p>
                                Hear fun themed stories about all the adventures with Elsa’s friends!
                            </p>
                        </div>

                        <div ref={this.addComponentRef} className="col-lg-3 col-md-3">
                            <FontIcon fontClassName='icon-database'/>
                            <h4>PLAYING GAMES</h4>
                            <p>
                                As well as play games to make the kids giggle and have fun they won’t want to stop!
                            </p>
                        </div>

                        <div ref={this.addComponentRef} className="col-lg-3 col-md-3">
                            <FontIcon fontClassName='icon-database'/>
                            <h4>SNOW MAKING</h4>
                            <p>
                                From snowflakes to snowmen and even make your child look like a princess or prince!
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Services;
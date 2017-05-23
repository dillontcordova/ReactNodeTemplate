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
            <section id="services" ref={this.getTrigger} className="container" >

                <div className="row">
                    <h2 ref={this.addTextRef} className="serviceTitleText">Strengths</h2>
                    <p ref={this.addTextRef} className="serviceTitleText">
                        I have the skills in all phases of the designing process.
                    </p>
                </div>

                <div className="row">
                    <div ref={this.addComponentRef} className="col-lg-4 col-md-4">
                        <i className='fa fa-code'/>
                        <h4>Code Development</h4>
                        <p>
                            Responsive development will help make your website easily accessible across all devices. Utilizing
                            modern patterns like MEAN or MERN Stack to get the job done.
                        </p>
                    </div>

                    <div ref={this.addComponentRef} className="col-lg-4 col-md-4">
                        <i className='fa fa-paint-brush'/>
                        <h4>Website Design</h4>
                        <p>
                            I build user interfaces focusing on content structure, intuitive UI patterns and
                            simple interactions are key. As they say, less is more.
                        </p>
                    </div>

                    <div ref={this.addComponentRef} className="col-lg-4 col-md-4">
                        <i className='fa fa-comments-o'/>

                        <h4>Ideas</h4>
                        <p>
                            I collaborate with clients and peers to nurture and transform ideas into well thought out design specs.
                            After all, that's where the majority of amazing user experiences start.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;
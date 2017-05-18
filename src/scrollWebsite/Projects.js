/**
 * Created by dillo_000 on 4/1/2017.
 */
import React, {Component} from 'react';
import Magic from '../lib/Magic';

class Projects extends Component {

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
        Magic.tweenParallax('#parallaxHeaderBg', this.triggerElement );
        Magic.tweenFrom(this.textRefs, 2, { ease: 'Bounce.easeOut', y: 500, opacity: 0}, this.triggerElement );
        Magic.tweenStagger(this.componentRefs, 1, {scale: 0.5, opacity: 0, delay: 0.5, ease: 'Elastic.easeOut', force3D: true}, this.triggerElement );
    }

    render() {
        return (
            <div ref={this.getTrigger} className="container">
                <h2 ref={this.addTextRef}>Accomplishments</h2>
                <p ref={this.addTextRef}>
                    Want to see more examples? Email me below.
                </p>

                <div ref={this.addComponentRef} className="row aligned-left">
                    <div className="left-description col-lg-6 col-xs-12">
                        <h2>J.D. Power</h2>
                        <p>
                            Rebuilt the company web app with my team in a MEAN Stack format.
                            Allowing for a more cohesive, smoother, and modern take of the platform.
                        </p>
                        <a href="http://www.jdpower.com/" className="btn btn-success btn-lg">Visit the Site</a>
                    </div>

                    <div className="col-lg-6 col-xs-12">
                        <img className="project-image" src="/images/jdpower-site.png" alt=""/>
                    </div>
                </div>


                <div ref={this.addComponentRef} className="row aligned-left">
                    <div className="col-lg-6 col-xs-12">
                        <img className="project-image" src="/images/creditrepair-site.png" alt=""/>
                    </div>

                    <div className="col-lg-6 col-xs-12">
                        <h2>Credit Repair 1st</h2>
                        <p>
                            Worked with Credit repair 1st to rebuild their website with an automated backend system,
                            to send and receive responses from banks and debt collectors. Thus eliminating the need
                            for personal representatives in the company that did the same.
                        </p>
                        <a href="http://www.creditrepair1st.com/" className="btn btn-success btn-lg">Visit the Site</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Projects;
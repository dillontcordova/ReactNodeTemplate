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
        Magic.tweenParallax('#parallaxHeaderBg', '#projects',  this.triggerElement );

        Magic.tweenFrom(this.textRefs, 2, { ease: 'Bounce.easeOut', y: 500, opacity: 0}, this.triggerElement );
        Magic.tweenStagger(this.componentRefs, 1, {scale: 0.5, opacity: 0, delay: 0.5, ease: 'Elastic.easeOut', force3D: true}, this.triggerElement );
    }

    render() {
        return (
            <div ref={this.getTrigger} className="container">
                <img id="parallaxHeaderBg" src="http://genkoreanbbq.com/wp-content/uploads/2015/05/mainpic_b2.jpg" alt=""/>

            </div>
        );
    }
}
export default Projects;
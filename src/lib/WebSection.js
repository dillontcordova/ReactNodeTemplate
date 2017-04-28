/**
 * Created by dillo_000 on 4/7/2017.
 */
import React, {Component} from 'react';

class WebSection extends Component {
    constructor(props) {
        super(props);
        this.textRefs = [];
        this.componentRefs = [];
        this.triggerElement = null;
        this.constructCssNames();
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

    constructCssNames() {
        this.titleTextClass = this.props.className + 'TitleText';
    }

    render() {
        return (
            <section id={this.props.id} className={this.props.className} >
                <div className="container">
                    <h2 className={this.titleTextClass}>{this.props.className}</h2>
                    <p className={this.titleTextClass}>
                        {this.props.description}
                    </p>

                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </section>
        );
    }
}

export default WebSection;
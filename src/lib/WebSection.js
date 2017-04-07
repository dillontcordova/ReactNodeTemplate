/**
 * Created by dillo_000 on 4/7/2017.
 */
import React, {Component} from 'react';
import {TweenMax} from "gsap";
const ScrollMagic = typeof window !== 'undefined' ? require( 'scrollmagic') : undefined;

class WebSection extends Component {
    constructor(props) {
        super(props);

        this.constructCssNames();
    }

    static setScrollController(_controller) {
        WebSection.prototype.scrollController = _controller;
    }

    constructCssNames() {
        this.titleTextClass = this.props.className + 'TitleText';
    }

    componentDidMount() {}

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
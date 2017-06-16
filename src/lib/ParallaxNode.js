/**
 * Created by dillo_000 on 6/16/2017.
 */
import React, {Component} from 'react';
import Magic from '../lib/Magic';

class ParallaxNode extends Component {

    componentDidMount() {
        Magic.tweenParallax(this.props.parent);
    }

    render() {
        return (
            <div className="parallaxParent">
                <img className="parallaxChild" src={this.props.imageSrc} alt=""/>
            </div>
        );
    }
}

export default ParallaxNode;
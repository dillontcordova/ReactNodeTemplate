/**
 * Created by dillo_000 on 3/25/2017.
 */
import React, {Component} from 'react';

class FontIcon extends Component {

    render() {
        let fontElement = <i className={this.props.fontClassName} style={{color: this.props.color}}/>;

        if(this.props.linkUrl) {
            fontElement = (
                <a href={this.props.linkUrl}>
                    {fontElement}
                </a>
            );
        }

        return (
            <div className="my-icons col-lg-2 col-md-2 col-sm-1">
                {fontElement}
            </div>
        )
    }
}

export default FontIcon;
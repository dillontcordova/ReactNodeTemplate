import React, {Component} from 'react';

class DropDown extends Component {

    getOptions = (values) => {
        let options = [];

        values.forEach( (val) => {
            options.push(<option value={val}>{val}</option>);
        });

        return options || <option value="undefined">undefined</option>;
    };

    render() {
        return (
            <select onChange={this.props.optionSelect}>
                {this.getOptions( this.props.options )}
            </select>
        );
    }
}

export default DropDown;
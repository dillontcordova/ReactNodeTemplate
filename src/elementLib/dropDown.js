import React, {Component} from 'react';

class DropDown extends Component {
    constructor(_props) {
        super(_props);
    }

    getOptions = (values) => {

        let options = [];

        values.forEach( (val) => {
            options.push(<option value={val}>{val}</option>);
        });

        return options || <option value="undefined">undefined</option>;
    };

    componentDidMount() {}

    render() {
        return (
            <select>
                {this.getOptions( this.props.options )}
            </select>
        );
    }
}

export default DropDown;
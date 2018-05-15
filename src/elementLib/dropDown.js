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

        this.props.selectedOption.value = this.props.selectedOption.value || (values && values[0]);
        return options || <option value="undefined">undefined</option>;
    };

    handleChange = (e) => {
        this.props.selectedOption.value = e.target.value;
    };

    componentDidMount() {}

    render() {
        return (
            <select value={this.props.selectedOption.value} onChange={this.handleChange}>
                {this.getOptions( this.props.options )}
            </select>
        );
    }
}

export default DropDown;
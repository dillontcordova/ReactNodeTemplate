import React, {Component} from 'react';
import AssetGroup from '../elementLib/assets/assetGroup';
import DropDown from '../elementLib/DropDown';
import getCreds from "../lib/getCreds";

class Ingest extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            menuOptions     : [],
            selectedOption  : '',
            kmsKey          : ''
        };
    }

    onBlur = (e) => {
        this.setState({
            kmsKey: e.target.value
        })
    };

    componentDidMount() {

        getCreds((err, awsCfg) => {

            const data = new FormData();
            data.append( 'config', JSON.stringify(awsCfg) );

            fetch('/listBuckets', {
                method  : 'POST',
                body    : data
            })
            .then( (response) => {
                response.json()
                .then( (body) => {
                    if(body.error || !body.menuOptions){
                        console.error( body.error || 'listed buckets could not be reached');
                    } else {
                        this.setState({
                            menuOptions: body.menuOptions,
                            selectedOption: body.menuOptions[0]
                        });
                    }
                });
            });
        });
    }

    dropDownSelectHandler = (e) => {
        this.setState({
            selectedOption: e.target.value
        });
    };

    render() {
        return (
            <section id="ingest" className="ssss" >
                <div>
                    <div>
                        <input onBlur={this.onBlur} type="text" placeholder="Enter the kms key id Here:" />
                    </div>

                    <DropDown optionSelect={this.dropDownSelectHandler} options={this.state.menuOptions}/>
                </div>

                <AssetGroup kmsKey={this.state.kmsKey} bucketName={this.state.selectedOption}/>
            </section>
        );
    }
}

export default Ingest;
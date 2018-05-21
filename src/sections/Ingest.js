import React, {Component} from 'react';
import AssetGroup from '../elementLib/assets/assetGroup';

class Ingest extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <section id="ingest" className="ssss" >
                <AssetGroup/>
            </section>
        );
    }
}

export default Ingest;
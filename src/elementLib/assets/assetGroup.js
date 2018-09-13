import React, {Component} from 'react';
import { PanelGroup, Panel, Button } from 'react-bootstrap';
import AssetMetadataForm from './assetMetadataForm';
import EncryptUploadForm from '../../elementLib/EncryptUploadForm';


class assetGroup extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            activeKey   : 0,
            assets      : []
        };
    }

    handleAddAsset = (e) => {
        const assets = this.state.assets;
        this.setState({
            activeKey   : assets.length,
            assets      : assets.concat( this.createAsset(assets.length, 'danger') )
        });
    };

    handleRemoveAsset = (e) => {
        const assets = this.state.assets;
        assets.pop();
        this.setState({
            activeKey   : assets.length-1,
            assets      : assets
        });
    };

    handleSelect = (activeKey) => {
        this.setState({ activeKey });
    };

    createAsset = (key, style) => {
        return (
            <Panel key={key} eventKey={key} bsStyle={style}>
                <Panel.Heading>
                    <Panel.Title toggle>Asset {key}</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    <AssetMetadataForm/>
                    <EncryptUploadForm kmsKey={this.props.kmsKey} bucketName={this.props.bucketName}/>
                </Panel.Body>
            </Panel>
        )
    };

    render() {
        return (
            <PanelGroup
                accordion
                id="accordion-controlled-example"
                activeKey={this.state.activeKey}
                onSelect={this.handleSelect}
            >
                {this.state.assets}

                <Button bsStyle="success" onClick={this.handleAddAsset}>
                    +
                </Button>
                <Button bsStyle="danger" onClick={this.handleRemoveAsset}>
                    -
                </Button>
            </PanelGroup>
        )
    };
}

export default assetGroup;
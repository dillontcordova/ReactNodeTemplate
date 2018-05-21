import React, {Component} from 'react';
import { PanelGroup, Button } from 'react-bootstrap';
import Asset from '../../elementLib/assets/asset';


class assetGroup extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            activeKey   : 0,
            assets      : []
        };
    }

    handleToggleSelect = (activeKey) => {
        this.setState({ activeKey: activeKey });
    };

    handleAddAsset = (e) => {
        const assets = this.state.assets;
        this.setState({
            assets: assets.concat( <Asset key={assets.length} eventKey={assets.length} style="danger"/> ),
            activeKey: assets.length
        });
    };

    handleRemoveAsset = (e) => {
        const assets = this.state.assets;
        assets.pop();
        this.setState({
            assets: assets
        });
    };

    render() {
        return (
            <PanelGroup
                accordion
                id="accordion-controlled-example"
                activeKey={this.state.activeKey}
                onSelect={this.handleToggleSelect}
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
import React from 'react';
import { Panel } from 'react-bootstrap';
import EncryptUploadForm from '../EncryptUploadForm';

export default ({eventKey, style}) => {

    // const handleRemoveAsset = (e, assetNum) => {
    //     console.log(e.target, assetNum);
    // };

    return (
        <Panel eventKey={eventKey} bsStyle={style}>
            <Panel.Heading>
                <Panel.Title toggle>Asset {eventKey}</Panel.Title>
                {/*<Button className="removeAsset" onClick={(e)=>{handleRemoveAsset(e, eventKey)}}> remove </Button>*/}
            </Panel.Heading>

            <Panel.Body collapsible>
                <EncryptUploadForm/>
            </Panel.Body>
        </Panel>
    )
}
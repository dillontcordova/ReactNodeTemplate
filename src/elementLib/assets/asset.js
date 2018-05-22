import React from 'react';
import { Panel } from 'react-bootstrap';
import EncryptUploadForm from '../EncryptUploadForm';

export default ({eventKey, style, kmsKey, bucketName}) => {

    return (
        <Panel eventKey={eventKey} bsStyle={style}>
            <Panel.Heading>
                <Panel.Title toggle>Asset {eventKey}</Panel.Title>
                {/*<Button className="removeAsset" onClick={(e)=>{handleRemoveAsset(e, eventKey)}}> remove </Button>*/}
            </Panel.Heading>

            <Panel.Body collapsible>
                <EncryptUploadForm kmsKey={kmsKey} bucketName={bucketName}/>
            </Panel.Body>
        </Panel>
    )
}
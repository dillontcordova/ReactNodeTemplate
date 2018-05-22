import React, {Component} from 'react';
import getCreds from "../lib/getCreds";

class Contact extends Component {
    constructor(_props) {
        super(_props);

        this.state = {
            dek         : '',
            imageURL    : '',
            sha1        : ''
        };

        this.textRefs = [];
        this.componentRefs = [];
        this.triggerElement = null;
    }

    addComponentRef = (_ref) => {
        this.componentRefs.push(_ref);
    };

    handleUploadImage = (e) => {
        e.preventDefault();

        const file = this.uploadInput.files[0];

        const data = new FormData();
        data.append( 'file', file );
        data.append( 'fileName', file.name );
        data.append( 'kmsKey', this.props.kmsKey );
        data.append( 'bucketName', this.props.bucketName );

        getCreds((err, awsCfg) => {
            data.append( 'config', JSON.stringify(awsCfg) );

            fetch('/upload', {
                method  : 'POST',
                body    : data
            })
            .then( (response) => {
                response.json()
                .then( (body) => {
                    console.log( body.dek );
                    this.setState({
                        imageURL: body.file,
                        dek     : body.error || body.dek,
                        sha1    : body.error || body.sha1
                    });
                });
            });
        });
    };

    render() {
        const isImage = this.state.imageURL;
        const responseTag = isImage ? (
            <div>
                <p>DEK: {this.state.dek}</p>
                <p>Sha1: {this.state.sha1}</p>
                <img src={this.state.imageURL} alt="img" />
            </div>
        ): (
            <div/>
        );

        return (
            <div id="encryptUploadForm" className="container">
                <form onSubmit={this.handleUploadImage}>
                    <div ref={this.addComponentRef}>
                        <div>
                            <input type="file" ref={(ref) => { this.uploadInput = ref; }} />
                        </div>

                        <button>Upload</button>

                        {responseTag}
                    </div>
                </form>
            </div>
        );
    }
}

export default Contact;
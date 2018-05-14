import React, {Component} from 'react';
import {Auth} from 'aws-amplify';
import {S3} from 'aws-sdk';


class Contact extends Component {
    constructor(_props) {
        super(_props);

        this.state = {
            imageURL: '',
            cypherKey: ''
        };

        this.textRefs = [];
        this.componentRefs = [];
        this.triggerElement = null;
    }

    onChange = (_e) => {
        let newState = {};
        newState[_e.target.name] = _e.target.value;
        this.setState(newState);
    };

    getTrigger = (_ref) => {
        this.triggerElement = _ref;
    };

    addTextRef = (_ref) => {
        this.textRefs.push(_ref);
    };

    addComponentRef = (_ref) => {
        this.componentRefs.push(_ref);
    };

    componentDidMount() {}

    // handleUploadImage = (e) => {
    //     e.preventDefault();
    //
    //     const file = this.uploadInput.files[0];
    //     console.log(file);
    //
    //     const data = new FormData();
    //     data.append('file', file);
    //     data.append('fileName', file.name);
    //     data.append('bucketName', this.bucketName.value);
    //     data.append('accessKey', this.accessKey.value);
    //     data.append('secretKey', this.secretKey.value);
    //
    //     fetch('/upload', {
    //         method  : 'POST',
    //         body    : data,
    //     })
    //     .then( (response) => {
    //         response.json()
    //         .then( (body) => {
    //             console.log(body.cipherKey);
    //             this.setState({
    //                 imageURL: body.file,
    //                 cypherKey: body.error || body.cipherKey
    //             });
    //         });
    //     });
    // };

    handleUploadImage = (e) => {
        e.preventDefault();

        // const file = this.uploadInput.files[0];
        // console.log(file);
        //
        // const data = new FormData();
        // data.append('file', file);
        // data.append('fileName', file.name);
        // data.append('bucketName', this.bucketName.value);

        Auth.currentCredentials()
            .then(credentials => {
                const s3 = new S3({
                    credentials: Auth.essentialCredentials(credentials)
                });

                const params = {
                    Bucket: "cn-dmz-untrusted",
                    Key: "newImg.jpg"
                };
                s3.getObject(params, function(err, data) {
                    if (err) console.log(err, err.stack);
                    else     console.log(data);
                });
            })
        ;
    };

    render() {



        const isImage = this.state.imageURL;
        const responseTag = isImage ? (
            <div>
                <p>CypherKey: {this.state.cypherKey}</p>
                <img src={this.state.imageURL} alt="img" />
            </div>
        ): (
            <div/>
        );

        return (
            <div ref={this.getTrigger} className="container">
                <form onSubmit={this.handleUploadImage}>
                    <div ref={this.addComponentRef}>
                        <div>
                            <input type="file" ref={(ref) => { this.uploadInput = ref; }} />
                        </div>

                        <div>
                            <div>
                                <input ref={(ref) => { this.accessKey = ref; }} type="text" placeholder="Enter the AccessKey Here:" />
                            </div>
                            <div>
                                <input ref={(ref) => { this.secretKey = ref; }} type="text" placeholder="Enter the SecretKey Here:" />
                            </div>
                            <div>
                                <input ref={(ref) => { this.bucketName = ref; }} type="text" placeholder="Enter the Bucket name Here:" />
                            </div>
                            <div>
                                <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the Name you want to call the File Here:" />
                            </div>
                        </div>

                        <div>
                            <button>Upload</button>
                        </div>

                        {responseTag}
                    </div>
                </form>
            </div>
        );
    }
}

export default Contact;
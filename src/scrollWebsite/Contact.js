import React, {Component} from 'react';
import s3Upload from '../lib/s3Upload';


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

    handleUploadImage = (e) => {
        e.preventDefault();

        const file = this.uploadInput.files[0];
        console.log(file);

        const data = new FormData();
        data.append('file', file);
        data.append('fileName', file.name);
        data.append('bucketName', this.bucketName.value);

        fetch('/upload', {
            method  : 'POST',
            body    : data,
        })
        .then( (response) => {
            response.json()
            .then( (body) => {
                console.log(body.cipherKey);
                this.setState({
                    imageURL: body.file,
                    cypherKey: body.error || body.cipherKey
                });
            });
        });
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
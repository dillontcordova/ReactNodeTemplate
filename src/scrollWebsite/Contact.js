/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';
import Magic from '../lib/Magic';

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

    componentDidMount() {
        // Magic.tweenFrom(this.textRefs, 1, { opacity: 0, scaleX: -1, y: 500}, this.triggerElement );
        // Magic.tweenStagger(this.componentRefs, 1, {scale: 0.5, opacity: 0, delay: 0.5, ease: 'Elastic.easeOut', force3D: true}, this.triggerElement );
    }

    handleUploadImage = (e) => {
        e.preventDefault();

        const file = this.uploadInput.files[0];
        console.log(file);

        const data = new FormData();
        data.append('file', file);
        data.append('fileName', file.name);
        data.append('bucketName', this.bucketName.value);
        data.append('accessKey', this.accessKey.value);
        data.append('secretKey', this.secretKey.value);

        fetch('/upload', {
            method  : 'POST',
            body    : data,
        }).then((response) => {
            response.json()
                .then( (body) => {
                    console.log(body.cipherKey);
                    this.setState({
                        imageURL: body.file,
                        cypherKey: body.cipherKey
                    });
                })
            ;
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
            <div></div>
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
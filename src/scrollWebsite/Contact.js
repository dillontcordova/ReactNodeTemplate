import React, {Component} from 'react';
import DropDown from '../elementLib/dropDown';

class Contact extends Component {
    constructor(_props) {
        super(_props);

        this.state = {
            dek         : '',
            imageURL    : '',
            sha1        : '',
            menuOptions : []
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

    handleUploadImage = (e) => {
        e.preventDefault();

        console.log(`option: ${this.selectedOption && this.selectedOption.value}`);

        const file = this.uploadInput.files[0];
        console.log(file);

        const data = new FormData();
        data.append( 'file', file );
        data.append( 'fileName', file.name );
        data.append( 'kmsKey', this.kmsKey.value );
        data.append( 'bucketName', this.bucketName.value );

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
    };

    componentDidMount() {

        fetch('/listBuckets', {
            method: 'GET'
        })
        .then( (response) => {
            response.json()
            .then( (body) => {
                if(body.error || !body.menuOptions){
                    console.log( body.error || 'listed buckets could not be reached');
                } else {
                    this.setState({
                        menuOptions: body.menuOptions
                    });
                }
            });
        });
    }

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
            <div ref={this.getTrigger} className="container">
                <form onSubmit={this.handleUploadImage}>
                    <div ref={this.addComponentRef}>
                        <div>
                            <input type="file" ref={(ref) => { this.uploadInput = ref; }} />
                        </div>

                        <div>
                            <div>
                                <input ref={(ref) => { this.kmsKey = ref; }} type="text" placeholder="Enter the kms key id Here:" />
                            </div>

                            <DropDown ref={(ref) => { this.selectedOption = ref; }} options={this.state.menuOptions}/>

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
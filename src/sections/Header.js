import React, {Component} from 'react';

class Header extends Component {

    constructor(_props) {
        super(_props);
        this.textRefs = [];
        this.componentRefs = [];
        this.triggerElement = null;
    }

    getTrigger = (_ref) => {
        this.triggerElement = _ref;
    };

    addTextRef = (_ref) => {
        this.textRefs.push(_ref);
    };

    addComponentRef = (_ref) => {
        this.componentRefs.push(_ref);
    };

    render() {
        return (
            <section id="header" ref={this.getTrigger}>
                <div className="header-content">
                    <div className="col-lg-12">
                        <h1 className="title">
                            Lorem Ipsum Dolor
                        </h1>
                        <p className="summary">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>

                    <div className="col-lg-12">
                        <img onClick={this.scrollDownToHire} className="hire-me hidden-xs hidden-sm hidden-md" src="/images/team/self.png" alt=""/>
                        <p className="img-description hidden-xs hidden-sm hidden-md">Lorm ipsm dolo </p>

                        <div onClick={this.scrollDownToHire} className="hire-me hidden-lg">
                            <button className="btn btn-info">Lorem ipsum dolor sit amet</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;
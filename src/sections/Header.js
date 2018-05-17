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

    componentDidMount() {
    }

    scrollDownToHire = () => {
    };

    scrollDown = () => {
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
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
                        </p>
                    </div>

                    <div className="col-lg-12">
                        <img onClick={this.scrollDownToHire} className="hire-me hidden-xs hidden-sm hidden-md" src="/images/team/self.png" alt=""/>
                        <p className="img-description hidden-xs hidden-sm hidden-md">Lorem ipsum dolor sit amet</p>

                        <div onClick={this.scrollDownToHire} className="hire-me hidden-lg">
                            <button className="btn btn-info">Lorem ipsum dolor sit amet</button>
                        </div>
                    </div>
                </div>

                <div onClick={this.scrollDown} className="learn-more col-lg-12">
                    <p>
                        Ut enim ad minim veniam
                    </p>
                    <span className="glyphicon glyphicon-chevron-down"/>
                </div>
            </section>
        );
    }
}

export default Header;
/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';
// import Magic from '../lib/Magic';

class Pricing extends Component {

    constructor(_props) {
        super(_props);

        this.state = {
            addTravel: false,
            addBalloons: false,
            addAssitToPrin: false,
            addFacePainting: false
        };

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
        // Magic.tweenFrom(this.textRefs, 1, { opacity: 0, scaleX: -1, y: 500}, this.triggerElement );
        // Magic.tweenStagger(this.componentRefs, 1, {scale: 0.5, opacity: 0, delay: 0.5, ease: 'Elastic.easeOut', force3D: true}, this.triggerElement );
    }

    render() {
        return (
            <div className="container">
                <h2>Pricing</h2>
                <p>
                    Lorem Ipsum passages, and more recently
                    with desktop publishing software
                </p>

                <form>
                    <div id="formLeftSide"  className="col-lg-6 col-md-6">
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                            </div>
                        </div>
                        <fieldset className="form-group row">
                            <legend className="col-form-legend col-sm-2">AddOns</legend>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                                        Option one is this and that&mdash;be sure to include why it's great
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                        Option two can be something else and selecting it will deselect option one
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
                                        Option three is disabled
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <div className="form-group row">
                            <label className="col-sm-2">Checkbox</label>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                    </div>



                    <div id="formRightSide"  className="col-lg-6 col-md-6">
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                            </div>
                        </div>

                        <fieldset className="form-group row">
                            <legend className="col-form-legend col-sm-2">Add Ons</legend>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                                        Option one is this and that&mdash;be sure to include why it's great
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                        Option two can be something else and selecting it will deselect option one
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
                                        Option three is disabled
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <div className="form-group row">
                            <label className="col-sm-2">Checkbox</label>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row" >
                            <div className="offset-sm-2 col-sm-10">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Pricing;
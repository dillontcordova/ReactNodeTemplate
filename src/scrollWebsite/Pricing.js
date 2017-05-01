/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';
// import Magic from '../lib/Magic';

class Pricing extends Component {

    constructor(_props) {
        super(_props);

        this.state = {
            kidNum: 10,
            hrNum: 1,
            addFacePainting: false,
            addBalloons: false,
            addAssistant: false,
            addAssistantToPrincess: false,
            addTravel: false
        };

        this.textRefs = [];
        this.componentRefs = [];
        this.triggerElement = null;
    }

    reCalculate(a) {
        let asd = {
            kidNum: this.state.kidNum,
            hrNum: this.state.hrNum,
            addFacePainting: this.state.addFacePainting,
            addBalloons: this.state.addBalloons,
            addAssistant: this.state.addAssistant,
            addAssistantToPrincess: this.state.addAssistantToPrincess,
            addTravel: this.state.addTravel
        };

        if(a > 15) {
            let isAssistant = true;
            console.log(this.state);
            this.setState({addAssistant: true});
            console.log(this.state);
        }
    }

    onChange = (_e) => {
        let newState = {};
        newState[_e.target.name] = _e.target.value !== 'on' ? _e.target.value: _e.target.checked;
        this.setState(newState);
        this.reCalculate(_e.target.value);
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

    render() {
        return (
            <div className="container">
                <h2>Pricing</h2>
                <p>
                    Lorem Ipsum passages, and more recently
                    with desktop publishing software
                </p>

                <form>
                    <div id="formLeftSide"  className="packages col-lg-9 col-md-9">
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Number Of Kids</label>
                            <div className="col-sm-10">
                                <input type="number" min="1" step="1" name="kidNum" value={this.state.kidNum}  onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Number Of Hrs</label>
                            <div className="col-sm-10">
                                <input type="number" min="1" step="1" name="hrNum" value={this.state.hrNum} onChange={this.onChange} />
                            </div>
                        </div>


                        <fieldset className="form-group row">
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox"  name="addFacePainting" checked={this.state.addFacePainting} onChange={this.onChange}/>
                                        Add Face Painting
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" name="addBalloons" checked={this.state.addBalloons} onChange={this.onChange} />
                                        Balloon Animals
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" name="addAssistant" checked={this.state.addAssistant} onChange={this.onChange} />
                                        Add Assistant
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" name="addAssistantToPrincess" checked={this.state.addAssistantToPrincess && this.state.addAssistant} onChange={this.onChange} disabled={!this.state.addAssistant} />
                                        Upgrade Assistant to Princess
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" name="addTravel" checked={this.state.addTravel} onChange={this.onChange} />
                                        Travel is farther than 15 miles of Sherman Oaks
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </div>


                    <div id="formRightSide"  className="packages col-lg-3 col-md-3">
                        <div className="form-group row">
                            <p id="total"> Total Cost: 22.9 </p>
                            <p id="total"> Total Cost: 22.9 </p>
                            <p id="total"> Total Cost: 22.9 </p>
                            <p id="total"> Total Cost: 22.9 </p>
                            <p id="total"> Total Cost: 22.9 </p>
                            <p id="total"> Total Cost: 22.9 </p>
                            <p id="total"> Total Cost: 22.9 </p>
                        </div>
                        <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                                <button type="submit" className="btn btn-primary">Save Quote</button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

export default Pricing;
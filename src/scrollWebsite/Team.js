/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';
import Magic from '../lib/Magic';

class Team extends Component {

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
        Magic.tweenParallax('#parallaxTeamBg', 1, {}, this.triggerElement );
        Magic.tweenFrom(this.textRefs, 1, { opacity: 0, scaleX: -1, y: 500}, this.triggerElement );
        Magic.tweenStagger(this.componentRefs, 1, {scale: 0.5, opacity: 0, delay: 0.5, ease: 'Elastic.easeOut', force3D: true}, this.triggerElement );
    }

    render() {
        return (
            <div>
                <div id="parallaxTeamBg"/>
                <div ref={this.getTrigger} className="container">
                    <div className="row">
                        <h2 ref={this.addTextRef} >Meet our team</h2>
                        <p ref={this.addTextRef} >
                            Dedicated and ready when you are!
                        </p>

                        <div ref={this.addComponentRef} className="col-lg-6 col-md-6">
                            <img src="/images/team/member2.jpg" className="img-circle" alt=""/>
                            <h4>Haley Axelson</h4>
                            <a href="https://www.linkedin.com/in/derrek-cordova-9226803/">
                                <i className="fa fa-facebook" aria-hidden="true"/>
                            </a>
                            <b>Founder and Actress</b>
                            <p>
                                Meet this Ice Queen played by Haley J Axelson. She love Disney and princesses.
                                Her dream is to always make kids smile. She started this company early 2015 with the help of some great inspiring people in her life.
                                A little background: She is 23 and has been working with children since she was 14 years old.
                                She is working towards her child development certification. As her main career choice she is learning and working in the escrow field.
                                She is friendly, smart, fun, and understanding. Kids make her happy and she enjoys making them happy.
                            </p>
                        </div>

                        <div ref={this.addComponentRef} className="col-lg-6 col-md-6">
                            <img src="/images/team/member1.jpg" className="img-circle" alt=""/>
                            <h4>Winonna</h4>
                            <a href="https://www.linkedin.com/in/dilloncordova/">
                                <i className="fa fa-linkedin"/>
                            </a>
                            <b>Designer and Make-up Artist</b>
                            <p>
                                Then we have Winnona Laralie Evangeline. This is the maker of the make-up magic and costume design.
                                She and Haley became fast friends. When Haley told Winnona of the new idea of starting this business Winnona was all on board!
                                Winnona is a costume designer, make up artist and actress. She makes Haley into the beautiful Elsa that you see above.
                                She does hours of make up and alterations to the dress or wig. Haley would be lost with out her magical make up artist!
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default Team;
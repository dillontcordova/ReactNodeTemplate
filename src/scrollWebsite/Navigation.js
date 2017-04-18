/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';
import Magic from '../lib/Magic';

class Navigation extends Component {

    click = (_href) => {
        Magic.animateElementWithScrollTo(_href);
        return false;
    };

    render() {
        return (
            <nav id="myNavbar" className="navbar navbar-default navbar-fixed-top" >
                <div className="container">

                    <a href="#" className="navbar-brand">Tech Site</a>

                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navHeaderCollapse">
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>

                    <div className="collapse navbar-collapse navHeaderCollapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a onClick={()=>{ this.click('#header')     }} >Home</a></li>
                            <li><a onClick={()=>{ this.click('#services')   }} >services</a></li>
                            <li><a onClick={()=>{ this.click('#pricing')    }} >pricing</a></li>
                            <li><a onClick={()=>{ this.click('#team')       }} >team</a></li>
                            <li><a onClick={()=>{ this.click('#client')     }} >clients</a></li>
                            <li><a onClick={()=>{ this.click('#contact')    }} >contact</a></li>
                        </ul>
                    </div>

                </div>
            </nav>
        );
    }
}

export default Navigation;
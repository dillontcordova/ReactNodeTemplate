/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';

class Navigation extends Component {

    click = (_href) => {
        return false;
    };


    render() {
        return (
            <nav id="navigation" className="navbar navbar-fixed-top" >
                <div className="container">
                    <div className="row">

                        <button type="button" className="navbar-toggle  collapsed" data-toggle="collapse" data-target="#navHeaderCollapse">
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>

                        <div id="navHeaderCollapse" className="collapse navbar-collapse">
                            <a onClick={()=>{ this.click('#header') }} >
                                <img className="home-image" src="./images/csLogo.png" alt=""/>
                            </a>

                            <ul data-toggle="collapse" data-target="#navHeaderCollapse" className="nav navbar-nav navbar-right">
                                <li><a id="poop" onClick={()=>{ this.click('#header')     }} >Home</a></li>
                                <li><a onClick={()=>{ this.click('#services')   }} >About Us</a></li>
                                <li><a onClick={()=>{ this.click('#projects')   }} >Menu</a></li>
                                <li><a onClick={()=>{ this.click('#client')     }} >Gallery</a></li>
                                <li><a onClick={()=>{ this.click('#contact')    }} >Locations</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
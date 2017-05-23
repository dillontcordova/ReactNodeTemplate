/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';
import Magic from '../lib/Magic';

class Navigation extends Component {

    click = (_href) => {
        Magic.scrollTo(_href);
        return false;
    };


    render() {
        return (
            <nav className="navbar navbar-fixed-top" >
                <div className="container">
                    <div className="row">

                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navHeaderCollapse">
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>

                        <div id="navHeaderCollapse" className="collapse navbar-collapse">
                            <span id="home-image">
                                <img onClick={()=>{ this.click('#header') }} src="http://genkoreanbbq.com/wp-content/uploads/2015/10/logo_w1.png" alt=""/>
                            </span>

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
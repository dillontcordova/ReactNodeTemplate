import {TweenMax, TweenLite, TimelineMax} from "gsap";
const ScrollMagic = typeof window !== 'undefined' ? require( 'scrollmagic') : undefined;
if(typeof window !== 'undefined') {
    // require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');
}

let instance = null;
class Magic {

    constructor() {
        if(!instance) {
            throw new Error('Can\'t instantiate singleton Magic Class without get instance');
        }
        this.controller = new ScrollMagic.Controller();
    }

    static getInstance() {
        instance = Magic.prototype.instance;
        if(!instance) {
            instance = true;
            instance = Magic.prototype.instance = new Magic();
        }
        return instance;
    }

    static getController() {
        return this.getInstance().controller;
    }

    static getNewScene(_obj) {
        return new ScrollMagic.Scene(_obj);
    }

    static animateElement(_element, _cssClass) {
        new ScrollMagic.Scene({triggerElement: _element})
            .setClassToggle(_element, _cssClass)
            // .setTween( TweenLite.from( _element, 1, {scaleY: -1, opacity: 0} ) )
            .addTo( this.getInstance().controller )
        ;
    }
}

export default Magic;
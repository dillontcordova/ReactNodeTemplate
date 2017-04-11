/* eslint-disable */
if(typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    window.ScrollMagic = require('scrollmagic');
    require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');
    require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js');
}

class Magic {
    constructor() {
        throw new Error('!Can\'t instantiate static Magic Class!');
    }
    static getController() {
        return Magic.prototype.controller || ( Magic.prototype.controller = new ScrollMagic.Controller() );
    }
    static getNewScene(_sceneObj) {
        return new ScrollMagic.Scene(_sceneObj);
    }


    static animateElementWithCss(_element, _cssClass) {
        let scene = new ScrollMagic.Scene({triggerElement: _element});
        scene.setClassToggle(_element, _cssClass);
        process.env.NODE_ENV === 'development' && scene.addIndicators();
        scene.addTo( this.getController() );
    }
    static animateElementWithTweenFrom(_element, _duration, _tweenObj) {
        let scene = new ScrollMagic.Scene({triggerElement: _element});
        scene.setTween( TweenMax.from( _element, _duration, _tweenObj ));
        process.env.NODE_ENV === 'development' && scene.addIndicators();
        scene.addTo( this.getController() );
    }
    static animateElementWithTweenTo(_element, _duration, _tweenObj) {
        let scene = new ScrollMagic.Scene({triggerElement: _element});
        scene.setTween( TweenMax.to( _element, _duration, _tweenObj ));
        process.env.NODE_ENV === 'development' && scene.addIndicators();
        scene.addTo( this.getController() );
    }
}
export default Magic;
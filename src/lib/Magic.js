/* eslint-disable */
if(typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    window.ScrollMagic = require('scrollmagic');
    // require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');       //TODO: find fix for Module not found: Error: Cannot resolve module 'TweenMax' in /Users/dcordova/WebstormProjects/Personal/ReactNodeTemplate/node_modules/scrollmagic/scrollmagic/uncompressed/plugins
    // require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js');  //TODO: find fix for Module not found: Error: Cannot resolve module 'TweenMax' in /Users/dcordova/WebstormProjects/Personal/ReactNodeTemplate/node_modules/scrollmagic/scrollmagic/uncompressed/plugins
    require('gsap/src/uncompressed/plugins/ScrollToPlugin');
}

class Magic {
    static isParallaxOn = false;

    constructor() {
        throw new Error('!Can\'t instantiate static Magic Class!');
    }

    static newScene(_triggerElement, _element) {
        return new ScrollMagic.Scene({
            triggerElement: _triggerElement || _element,
            reverse: false
        });
    }

    static addToController(_scene) {
        process.env.NODE_ENV === 'development' && _scene.addIndicators();
        _scene.addTo( this.getController() );
    }

    static getController() {
        return Magic.prototype.controller || ( Magic.prototype.controller = new ScrollMagic.Controller() );
    }
    static getNewScene(_sceneObj) {
        return new ScrollMagic.Scene(_sceneObj);
    }

    static triggerCssClass(_element, _cssClass, _triggerElement) {
        let scene = this.newScene(_triggerElement, _element);

        scene.setClassToggle(_element, _cssClass);

        this.addToController(scene);
    }

    static tweenFrom(_element, _duration, _tweenObj, _triggerElement) {
        let scene = this.newScene(_triggerElement, _element);

        scene.setTween( TweenMax.from( _element, _duration, _tweenObj ));

        this.addToController(scene);
    }

    static tweenTo(_element, _duration, _tweenObj, _triggerElement) {
        let scene = this.newScene(_triggerElement, _element);

        scene.setTween( TweenMax.to( _element, _duration, _tweenObj ));

        this.addToController(scene);
    }

    static tweenStagger(_element, _duration, _tweenObj, _triggerElement, _delayBetween) {
        let scene = this.newScene(_triggerElement, _element);

        scene.setTween( TweenMax.staggerFrom(_element, _duration, _tweenObj, _delayBetween || .1) );

        this.addToController(scene);
    }

    static tweenParallax(_parentContainer, _duration) {
        TweenMax.set(_parentContainer, {
            overflow: 'hidden',
            position: 'relative'
        });

        if( !this.isParallaxOn ){
            let scene = new ScrollMagic.Scene({
                triggerElement: '.parallaxParent',
                triggerHook: 'onEnter',
                duration: _duration || '200%'
            });

            scene.setTween('.parallaxChild', {y: '80%', ease: 'Linear.easeNone'});

            this.addToController(scene);
            this.isParallaxOn = true;
        }
    }

    static scrollTo(_element) {
        TweenMax.to(window, 0.5, {scrollTo: _element});
    }


}
export default Magic;

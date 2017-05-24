/* eslint-disable */
if(typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    window.ScrollMagic = require('scrollmagic');
    require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');
    require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js');
    require('gsap/src/uncompressed/plugins/ScrollToPlugin');
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

    static triggerCssClass(_element, _cssClass, _triggerElement) {
        let scene = new ScrollMagic.Scene({
            triggerElement: _triggerElement || _element,
            reverse: false
        });
        scene.setClassToggle(_element, _cssClass);
        process.env.NODE_ENV === 'development' && scene.addIndicators();
        scene.addTo( this.getController() );
    }

    static tweenFrom(_element, _duration, _tweenObj, _triggerElement) {
        let scene = new ScrollMagic.Scene({
            triggerElement: _triggerElement || _element,
            reverse: false
        });
        scene.setTween( TweenMax.from( _element, _duration, _tweenObj ));
        process.env.NODE_ENV === 'development' && scene.addIndicators();
        scene.addTo( this.getController() );
    }

    static tweenTo(_element, _duration, _tweenObj, _triggerElement) {
        let scene = new ScrollMagic.Scene({
            triggerElement: _triggerElement || _element,
            reverse: false
        });
        scene.setTween( TweenMax.to( _element, _duration, _tweenObj ));
        process.env.NODE_ENV === 'development' && scene.addIndicators();
        scene.addTo( this.getController() );
    }


    static tweenStagger(_element, _duration, _tweenObj, _triggerElement, _delayBetween) {
        let scene = new ScrollMagic.Scene({
            triggerElement: _triggerElement || _element,
            reverse: false
        });
        scene.setTween( TweenMax.staggerFrom(_element, _duration, _tweenObj, _delayBetween || .1) );
        process.env.NODE_ENV === 'development' && scene.addIndicators();
        scene.addTo( this.getController() );
    }

    static continuousFadeToNextElement(_array, _duration, _elemPos) {
        //alter css here (will only occur once)
        (function nextSlide(_array, _duration, _elemPos) {
            _elemPos = !_elemPos ? 0: _elemPos;
            TweenMax.to( _array[_elemPos], 1, { opacity: 1 ,
                onComplete: function () {
                    TweenMax.to( _array[_elemPos], _duration, { opacity: 0 ,
                        onComplete: function () {
                            _elemPos++;
                            if(_elemPos > _array.length-1) {
                                _elemPos = 0;
                            }
                            nextSlide(_array, _duration, _elemPos);
                        }
                    })
                }
            });
        })(_array, _duration, _elemPos);

    }

    static tweenParallax(_parallaxElement, _parentElement, _triggerElement) {
        TweenMax.set(_parallaxElement, {
            position: 'absolute',
            width: '100%',
            height: '275%',
            left: 0,
            top: 0
        });

        TweenMax.set(_parentElement, {
            position: 'relative',
            overflow: 'hidden'
        });

        let scene = new ScrollMagic.Scene({
            triggerElement: _triggerElement,
            triggerHook: 2,
            duration: '150%'
        });
        scene.setTween( TweenMax.from(_parallaxElement, 1, {y: '-50%', ease: 'Power0.easeNone'}) );
        process.env.NODE_ENV === 'development' && scene.addIndicators();
        scene.addTo( this.getController() );
    }

    static scrollTo(_element) {
        TweenMax.to(window, 0.5, {scrollTo: _element});
    }


}
export default Magic;

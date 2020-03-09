// MIT © bitworking https://github.com/bitworking/react-gsap
// $FlowFixMe
import gsap from 'gsap';

const playStates = {
    play: 'play',
    reverse: 'reverse',
    stop: 'stop',
    pause: 'pause',
};

const setPlayState = (playState?:string, prevPlayState?:string | null, tween?: any) => {
    if (playState && playState !== prevPlayState) {
        if (playState === playStates.play) {
            if (prevPlayState === playStates.pause || prevPlayState === playStates.reverse) {
                tween.play();
            }
            else {
                tween.restart(true);
            }
        }
        else if (playState === playStates.reverse) {
            if (prevPlayState === playStates.pause || prevPlayState === playStates.play) {
                tween.reverse();
            }
            else {
                tween.reverse(0);
            }
        }
        else if (playState === playStates.stop) {
            tween.pause(0);
        }
        else if (playState === playStates.pause) {
            tween.pause();
        }
    }
};

const getTweenFunction = (targets: any, props: any) => {
    const {
        children,
        wrapper,

        duration,
        from,
        to,

        progress,
        totalProgress,
        playState,

        onCompleteAll,
        onCompleteAllParams,
        onCompleteAllScope,
        onStartAll,

        disabled,

        ...vars
    } = props;

    let tweenFunction;
    const duration$ = (duration === undefined || duration === null) ? 1 : duration;

    if (from && to) {
        tweenFunction = gsap.fromTo(targets, from, { duration: duration$, ...to, ...vars });
    }
    else if (to) {
        tweenFunction = gsap.to(targets, { duration: duration$, ...to, ...vars });
    }
    else {
        tweenFunction = gsap.from(targets, { duration: duration$, ...from, ...vars });
    }

    // if multiple tweens (stagger), wrap them in a timeline
    if (Array.isArray(tweenFunction)) {
        tweenFunction.forEach((t) => {
            t.paused(false);
        });
        tweenFunction = gsap.timeline({
            ...vars,
            tweens: tweenFunction,
            smoothChildTiming: true,
            onComplete: onCompleteAll,
            onCompleteParams: onCompleteAllParams,
            onCompleteScope: onCompleteAllScope,
            onStart: onStartAll,
        });
    }

    // props at mount
    if (progress) {
        tweenFunction.progress(progress);
    }
    if (totalProgress) {
        tweenFunction.totalProgress(totalProgress);
    }
    if (playState) {
        setPlayState(playState, null, tweenFunction);
    }

    return tweenFunction;
};

const callTweenFunction = (tweenFunction: any, functionName: string, params?:any, returnFunction?: any): void => {
    if (Array.isArray(tweenFunction)) {
        tweenFunction.forEach((tween) => {
            if (!params && returnFunction) {
                params = [tween[returnFunction].apply(tween)];
            }
            tween[functionName].apply(tween, params);
        });
    }
    else {
        if (!params && returnFunction) {
            params = [tweenFunction[returnFunction].apply(tweenFunction)];
        }
        tweenFunction[functionName].apply(tweenFunction, params);
    }
};

const isEqual = (obj1: any, obj2: any) => {
    // very easy equal check
    // attention: if the order of properties are different it returns false
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};

const refOrInnerRef = (child: any) => {
    if (child.type.$$typeof && child.type.$$typeof.toString() === 'Symbol(react.forward_ref)') {
        return 'ref';
    }

    // styled-components < 4
    if (child.type.styledComponentId) {
        return 'innerRef';
    }

    return 'ref';
}

export {
    getTweenFunction,
    callTweenFunction,
    setPlayState,
    playStates,
    isEqual,
    refOrInnerRef,
};

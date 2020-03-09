// MIT © bitworking https://github.com/bitworking/react-gsap
// 升级gsap3.0依赖, 移除stagger部分代码
// @flow
import React,{  Fragment } from 'react';
import { getTweenFunction, playStates, setPlayState, isEqual, refOrInnerRef } from '../utils/helper.ts';

class Tween extends React.Component {
    static displayName = 'Tween';

    static get playState() {
        return playStates;
    }

    targets;
    tween;

    constructor(props) {
        super(props);

        this.targets = [];
    }

    componentDidMount() {
        this.createTween();
    }

    componentWillUnmount() {
        this.tween.kill();
    }

    getSnapshotBeforeUpdate() {
        this.targets = [];
        return null;
    }

    componentDidUpdate(prevProps) {
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
        } = this.props;

        if (React.Children.count(prevProps.children) !== React.Children.count(children)) {
            this.createTween();
        }

        if (disabled) {
            return;
        }

        // execute function calls
        if (progress !== prevProps.progress) {
            this.tween.progress(progress);
        }
        if (totalProgress !== prevProps.totalProgress) {
            this.tween.totalProgress(totalProgress);
        }
        if (duration !== prevProps.duration) {
            this.tween.duration(duration);
        }
        // if "to" or "staggerTo" props are changed: reinit and restart tween
        if (!isEqual(to, prevProps.to)) {
            this.tween.vars = { ...to, ...vars };
            this.tween.invalidate();
            if (!this.tween.paused()) {
                this.tween.restart();
            }
        }
        setPlayState(playState, prevProps.playState, this.tween);
    }

    createTween() {
        if (this.tween) {
            this.tween.kill();
        }
        this.tween = getTweenFunction(this.targets, this.props);
    }

    getGSAP() {
        return this.tween;
    }

    addTarget(target) {
        // target is null at unmount
        if (target !== null) {
            this.targets.push(target);
        }
    }

    render() {
        let { children, wrapper } = this.props;

        // @ts-ignore
        const output = (
            <Fragment>
                {React.Children.map(children, child =>
                    React.cloneElement(
                        child,
                        {
                            [refOrInnerRef(child)]: (target) => this.addTarget(target)
                        }
                    )
                )}
            </Fragment>
        );

        if (wrapper) {
            return React.cloneElement(
                wrapper,
                [],
                output
            );
        }

        return output;
    }
}

export { Tween };
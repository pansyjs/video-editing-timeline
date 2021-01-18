import React from 'react';
import VideoEditingTimeline from "video-editing-timeline";

export interface ReactVideoEditingTimelineProps {
    config: {
        mode?: string,
        el: string | HTMLCanvasElement,
        canvasWidth?: number,
        canvasHeight?: number,
        minimumScale?: number,
        minimumScaleTime?: number,
        minimumScalesInLongScale?: number,
        lineWidth?: number,
        lineColor?: string,
        longLineColor?: string,
        offestLeft?: number,
    }
}

export default class ReactVideoEditingTimeline extends React.Component<ReactVideoEditingTimelineProps, any> {
    static defaultProps = {
        config: {}
    }
    timelineInstance: any = null;
    el: any = null;
    constructor(props: ReactVideoEditingTimelineProps) {
        super(props);
    }

    instance() {
        this.timelineInstance = new VideoEditingTimeline({ ...this.props.config, el: this.el });
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.instance();
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
        this.instance();
    }
    componentWillReceiveProps(nextProps: ReactVideoEditingTimelineProps) {
        let flag = false;
        for (let key in this.props.config) {
            if (nextProps.config[key] !== this.props.config[key]) {
                flag = true;
                break;
            }
        }
        if (flag) {
            this.instance();
        }
    }

    canvasRef = (el) => {
        if (!this.el) {
            this.el = el;
        }
    };

    render() {
        return <canvas ref={this.canvasRef}></canvas>;
    }
}

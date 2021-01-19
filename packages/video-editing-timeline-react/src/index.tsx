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

    instance() {
        this.timelineInstance = new VideoEditingTimeline({ ...this.props.config, el: this.el });
    }

    shouldComponentUpdate(nextProps: ReactVideoEditingTimelineProps) {
        let flag = false;
        for (let key in this.props.config) {
            if (nextProps.config[key] !== this.props.config[key]) {
                flag = true;
                break;
            }
        }
        return flag
    }

    componentDidMount() {
        this.instance();
    }

    componentDidUpdate() {
        this.instance();
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


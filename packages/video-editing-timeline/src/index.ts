/**
 * author: chenguzhen87
 * 视频剪辑时间线
 */

interface VideoEditingTimeLineOptions {
    mode?: string,
    el: string | HTMLCanvasElement,
    canvasWidth?: number,
    canvasHeight?: number,
    canvasId?: string,
    minimumScale?: number,
    minimumScaleTime?: number,
    minimumScalesInLongScale?: number,
    lineWidth?: number,
    lineColor?: string,
    longLineColor?: string,
    offestLeft?: number,

}


interface DrawLineOptions {
    beginX: number,
    beginY: number,
    endX: number,
    endY: number,
    lineColor: string,
    lineWidth: number
}


const defaultConfig = {
    mode: "top",
    canvasWidth: 400, // canvas长度
    canvasHeight: 50, // canvas高度
    minimumScale: 10, // 一个小刻度长度(单位px)
    minimumScaleTime: 1, // 一个小刻度代表时间（单位秒）
    minimumScalesInLongScale: 10, // 一个长刻度中有几个最少刻度
    lineWidth: 1, // 刻度线宽
    offestLeft: 0, // 起始刻度线偏移距离（距离左边）
    lineColor: "#666", // 最小刻度线颜色
    longLineColor: "#fff" // 最长刻度线颜色
};

/**
 * 视频编辑时间线
 * @param config 
 */

function VideoEditingTimeline(config: VideoEditingTimeLineOptions) {

    this.config = Object.assign({}, defaultConfig, config);

    let el = query(this.config.el);
    if (!(el instanceof HTMLCanvasElement)) {
        throw new Error('[VideoEditingTimeline] element should be an instance of HTMLCanvasElement');
    }

    el.width = this.config.canvasWidth;
    el.height = this.config.canvasHeight;
    this.ctx = el.getContext("2d");
    this.renderTimeLine();

}

/**
 * Query an element selector if it's not an element already.
 * @param el 
 */

function query(el: string | HTMLCanvasElement) {
    if (typeof el === 'string') {
        var selected = document.querySelector(el);
        if (!selected) {
            throw new Error("[VideoEditingTimeline]: Cannot find element: " + el);

        }
        return selected
    } else {
        return el
    }
}


/**
 * 画线
 */

function drawLine(ctx: CanvasRenderingContext2D, options: DrawLineOptions) {
    const { beginX, beginY, endX, endY, lineColor, lineWidth } = options;
    ctx.beginPath();
    ctx.moveTo(beginX, beginY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
}



/**
 * 渲染时间线
 */

VideoEditingTimeline.prototype.renderTimeLine = function () {
    const ctx = this.ctx;
    const {
        canvasWidth,
        canvasHeight,
        lineColor,
        longLineColor,
        lineWidth,
        minimumScale,
        minimumScaleTime,
        minimumScalesInLongScale,
        offestLeft,
        mode
    } = this.config;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "#999999";
    ctx.font = "12px Arial";

    const beginY = mode === "top" ? 0 : canvasHeight;
    const endY = mode === "top" ? 20 : canvasHeight - 20;
    for (let i = 0; i < canvasWidth; i += minimumScale) {
        if (i % (minimumScale * minimumScalesInLongScale) == 0) {
            drawLine(ctx, {
                beginX: i + offestLeft,
                beginY: beginY,
                endX: i + offestLeft,
                endY: endY,
                lineColor: longLineColor,
                lineWidth: lineWidth
            });

            const showTime = (i / minimumScale) * minimumScaleTime;
            if (mode === "top") {
                ctx.fillText(formatSeconds(showTime), i + offestLeft + 10, 22);
            } else {
                const text = i === 0 ? 0 : formatSeconds(showTime);
                // 文本宽度
                const textWidth = ctx.measureText(text).width;
                ctx.fillText(text, i + offestLeft - textWidth / 2, 24);
            }
        } else {
            drawLine(ctx, {
                beginX: i + offestLeft,
                beginY: beginY,
                endX: i + offestLeft,
                endY: mode === "top" ? 10 : canvasHeight - 10,
                lineColor,
                lineWidth: lineWidth
            });
        }
    }
};

/**
 * 计算刻度数、总时长、px与s关系
 */

VideoEditingTimeline.prototype.calc = function () {
    const { canvasWidth, minimumScale, minimumScaleTime } = this.config;
    const ticks = Math.floor(canvasWidth / minimumScale); // 总刻度数
    const duration = this.ticks * minimumScaleTime; // 时间线表示总时长
    const scale = minimumScaleTime / minimumScale; // 1px 表示时间
    return { ticks: ticks, duration: duration, scale: scale };
};

/**
 * 秒转成hh:mm:ss
 * @param {number} value
 */

function formatSeconds(value: number) {
    let result = Math.floor(value);
    let hh =
        Math.floor(result / 3600) < 10
            ? "0" + Math.floor(result / 3600)
            : Math.floor(result / 3600);
    let mm =
        Math.floor((result / 60) % 60) < 10
            ? "0" + Math.floor((result / 60) % 60)
            : Math.floor((result / 60) % 60);
    let ss =
        Math.floor(result % 60) < 10
            ? "0" + Math.floor(result % 60)
            : Math.floor(result % 60);
    return `${hh}:${mm}:${ss}`;
}

export default VideoEditingTimeline;

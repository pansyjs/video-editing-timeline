<h1 align="center">
 video-editing-timeline
</h1>

<img height="200" src="./example/1610880717.png"></img>

## install

```
// npm
npm install video-editing-timeline --save

// yarn
yarn add video-editing-timeline
```

## usage
``` html

<canvas id='timeline' />

```

```
import VideoEditingTimeline from 'video-editing-timeline';

const config = {
    el: "#canvas",
    canvasWidth: 5000,
    canvasHeight: 50,
    minimumScale: 10, // 一个小刻度长度(单位px)
    minimumScaleTime: 1, // 一个小刻度代表时间（单位秒）
}

const videoEditingTimeline = new VideoEditingTimeline(config)

```

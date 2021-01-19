
<h1 align="center">
 video-editing-timeline
</h1>

<img height="200" src="./packages/video-editing-timeline/example/1610880717.png"></img>


> The video-editing-timeline repo contains three packages: video-editing-timeline (native version), video-editing-timeline-react (react version), and video-editing-timelinevue (vue version). You can install the corresponding version as required

## Features

- 💻 使用 TypeScript 编写，提供完善的类型定义
- 🚀 小巧，不到10K大小，Gzip压缩后不到3K
- 📦 提供`cjs`、`es`、`umd`三种格式
- 🎉 提供`Vue`、`React`组件包


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



<h1 align="center">
  video-editing-timeline-react
</h1>

<img height="200" src="./example/1610880717.png"></img>

## install

```
// npm
npm install  video-editing-timeline-react --save

// yarn
yarn add  video-editing-timeline-react
```

## usage

```
import React from 'react';
import VideoEditingTimeline from 'video-editing-timeline-react';

export default () => {
  const config = {
      canvasWidth: 5000,
      canvasHeight: 50,
      minimumScale: 10, // 一个小刻度长度(单位px)
      minimumScaleTime: 1, // 一个小刻度代表时间（单位秒）
  };
  
  return <VideoEditingTimeline config={config} />;
};
```

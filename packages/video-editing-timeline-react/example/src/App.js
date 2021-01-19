import React, { useEffect, useState } from 'react';
import VideoEditingTimeline from "video-editing-timeline-react";
import './App.css';
function App() {
  const initConfig = {
    canvasWidth: 5000,
    canvasHeight: 50,
    minimumScale: 10, // 一个小刻度长度(单位px)
    minimumScaleTime: 1, // 一个小刻度代表时间（单位秒）
  }
  const [config, setConfig] = useState(initConfig)

  useEffect(()=>{
    setTimeout(() => {
      setConfig({ 
        canvasWidth: 5000,
        canvasHeight: 50,
        minimumScale: 10, // 一个小刻度长度(单位px)
        minimumScaleTime: 5, // 一个小刻度代表时间（单位秒）
      })
    }, 3000);
  },[])
  
  return (
    <div className="App">
     <div className="title">
          视频编辑时间线例子
      </div>
       <div className="canvas-wrapper">
          <VideoEditingTimeline  config={config} />
       </div>
    </div>
  );
}

export default App;

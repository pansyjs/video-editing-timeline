<template>
  <div id="app">
      <div class="title">
          视频编辑时间线例子
      </div>
       <div class="canvas-wrapper">
          <VideoEditingTimeline ref="timeline" :config="config" />
       </div>
  </div>
</template>

<script>
import VideoEditingTimeline from 'video-editing-timeline-vue';

export default {
  name: 'App',
  components: {
    VideoEditingTimeline
  },
  data() {
    return {
       config: {
            canvasWidth: 5000,
            canvasHeight: 50,
            minimumScale: 10, // 一个小刻度长度(单位px)
            minimumScaleTime: 1, // 一个小刻度代表时间（单位秒）
       }
    }
  },
  mounted() {
    const timeline = this.$refs.timeline;
    console.log(timeline);
    setTimeout(() => {
      this.config.minimumScaleTime = 5;
    }, 2000);

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title {
      text-align: center;
      padding: 30px 0;
      font-size: 20px;
  }

  .canvas-wrapper {
      background-color: #111;
      overflow-x: auto;
  }
</style>

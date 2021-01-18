<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import VideoEditingTimeline from 'video-editing-timeline';

export default {
  name: 'VideoEditingTimeline',
  props: {
    config:{
        type: Object,
        default: function () {
            return {  }
        }
    }
  },
  timelineInstance: null,
  mounted() {
    this.instance();
  },
  updated() {
    this.instance();
  },
  methods: {
    instance() {
      this.timelineInstance = new VideoEditingTimeline({ ...this.config, el: this.$refs.canvas });
    }
  }
};
</script>

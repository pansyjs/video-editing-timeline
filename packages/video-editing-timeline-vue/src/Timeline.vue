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
  mounted() {
    this.instance();
  },
  updated() {
    this.instance();
  },
  methods: {
    instance() {
      return new VideoEditingTimeline({ ...this.config, el: this.$refs.canvas });
    }
  }
};
</script>

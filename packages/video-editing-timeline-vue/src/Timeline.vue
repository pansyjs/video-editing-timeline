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
  methods: {
    instance() {
      this.timelineInstance = new VideoEditingTimeline({ ...this.config, el: this.$refs.canvas });
    }
  },
  watch:{
    config: {
      handler: function () { 
        this.instance();
      },
      deep: true
    },
  }
};
</script>

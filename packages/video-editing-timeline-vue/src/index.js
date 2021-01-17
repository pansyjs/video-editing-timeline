import VideoEditingTimeline from './Timeline.vue';

VideoEditingTimeline.install = function(Vue) {
  Vue.component(VideoEditingTimeline.name, VideoEditingTimeline);
};

export default VideoEditingTimeline;

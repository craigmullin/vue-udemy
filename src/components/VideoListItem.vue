<template>
  <li class="list-group-item media">
    <img class="mr-3" :src="thumbnail" /> <div class="media-body"> {{ video.snippet.title }} </div></li
  >
</template>

<script>
export default {
  name: 'VideoListItem',
  props: {
    video: {},
  },
  computed: {
    thumbnail() {
      return this.video.snippet.thumbnails.default.url
    },
  },
}
</script>

<style scoped>
li {
  display: flex;
}
</style>

<template>
  <div class="container">
    <SearchBar @termChange="onTermChange" @videoSelect="onVideoSelect"></SearchBar>
    <VideoDetail :video="selectedVideo"></VideoDetail>
    <VideoList :videos="videos"></VideoList>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import axios from 'axios'
const API_KEY = 'AIzaSyD0Oeedax3t5CqF3Fzab87enLJS1pbYbHI'
export default {
  //include properties that
  //customize this component
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  data() {
    return {
      videos: [],
      selectedVideo: {},
    }
  },
  methods: {
    onTermChange(searchTerm) {
      axios
        .get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm,
          },
        })
        .then(response => {
          this.videos = response.data.items
        })
        .catch(err => {
          console.log(err)
        })
    },
    onVideoSelect(video) {
      this.selectedVideo = video
    },
  },
}
</script>

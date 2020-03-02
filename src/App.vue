<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoList :videos="videos"></VideoList>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import axios from 'axios'
const API_KEY = 'AIzaSyD0Oeedax3t5CqF3Fzab87enLJS1pbYbHI'
export default {
  //include properties that
  //customize this component
  name: 'App',
  components: {
    SearchBar,
    VideoList,
  },
  data() {
    return { videos: Array }
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
    },
  },
}
</script>

<template>
<div>
  Hi There!
  <SearchBar @termChange="onTermChange"></SearchBar>
 
</div>
</template>

<script>
import SearchBar from './components/SearchBar'
export default {
  //include properties that 
  //customize this component
  name: 'App',
  components: {
    SearchBar,
  },
  methods: {
    onTermChange(searchTerm) {
      console.log(searchTerm);
    }
  }
}
</script>
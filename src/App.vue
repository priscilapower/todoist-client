<template lang="pug">
navigation-bar
page
</template>

<script>
import NavigationBar from "@/components/Navigation";
import Page from '@/components/Page'

export default {
  name: 'TodoList',
  components: {
    NavigationBar,
    Page
  }
}
</script>

<style>
#app {
  font-family: 'Apple SD Gothic Neo';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 38px;
  margin-bottom: 0px;
}

.v-toast__item {
  background-color: #FFFFFF!important;
  color: #202020!important;
}

</style>

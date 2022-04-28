<template lang="pug">
.page
  main-title
  task
</template>

<script>
import Task from "@/components/Task";
import MainTitle from "@/components/Title";

export default {
  name: "MainPage",
  components: {
    MainTitle,
    Task
  },
};
</script>

<style scoped>
.page {
  margin-top: 38px;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  padding: 34px 54px 54px;
}
</style>

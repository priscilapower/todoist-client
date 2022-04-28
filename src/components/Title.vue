<template lang="pug">
.title-box
  span.title 오늘
  span.subtitle {{currentDate}}
</template>

<script>
import moment from 'moment';

export default {
  name: "MainTitle",
  data(){
    return {
      currentDate: null
    }
  },

  created() {
    moment.locale('ko');
    this.currentDate = moment().format("dd MMM Do");
  }
};
</script>

<style scoped>
.title-box {
  margin-left: 0px;
  margin-right: 0px;
}

.title {
  position: static;

  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
}

.subtitle {
  padding-left: 5px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #808080;
}

</style>

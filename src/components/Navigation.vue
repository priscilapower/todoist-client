<template lang="pug">
header
  nav
    div
      img.icon-menu(src='../assets/icon,menu.png')
    div
      img.icon-home(src='../assets/icon,home.png')
    div(v-show='!mobile')
      .search-bar
        img.icon-search(src='../assets/icon,search.png')
        span.text-search 검색
    div(v-show='mobile')
      .search-bar.search-bar-mobile
        img.icon-search(src='../assets/icon,search.png')
    div
      img.icon-add(src='../assets/icon,add.png')
    div
      img.icon-graph(src='../assets/icon,graph.png')
    .task-number 0/5
    div
      img.icon-info(src='../assets/icon,info.png')
    div
      img.icon-bell(src='../assets/icon,bell.png')
    .icon-user
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      mobile: false,
      windowWidth: null
    };
  },

  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },

  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 515) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
    }
  }
};
</script>

<style scoped>

header {
  background-color: #CB5647;
  position: fixed;
  height: 38px;
  left: 0%;
  right: 0%;
  top: 0px;
}

nav {
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: .5s ease all;
  width: 90%;
  margin: 0 auto;
}

.icon-menu {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 20px;
  top: 7px;
}

.icon-home {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 52px;
  top: 7px;
}

.icon-search {
  position: static;
  width: 24px;
  height: 24px;
  left: 4px;
  top: 2px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 6px;
}

.search-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 0px 2px 4px;

  position: absolute;
  width: 198px;
  height: 28px;
  left: 84px;
  top: 5px;

  background: #D5786C;
  border-radius: 3px;
}

.text-search {
  position: static;
  width: 40px;
  height: 18px;
  left: 34px;
  top: 5px;

  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #FFFFFF;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 6px;
}

.icon-add {
  position: absolute;
  width: 24px;
  height: 24px;
  right: 207px;
  top: 7px;
}

.icon-graph {
  position: absolute;
  width: 24px;
  height: 24px;
  right: 173px;
  top: 7px;
}

.task-number {
  position: absolute;
  width: 19px;
  height: 18px;
  right: 144px;
  top: 11px;

  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #FFFFFF;
}

.icon-info {
  position: absolute;
  width: 24px;
  height: 24px;
  right: 102px;
  top: 7px;
}

.icon-bell {
  position: absolute;
  width: 24px;
  height: 24px;
  right: 66px;
  top: 7px;
}

.icon-user {
  position: absolute;
  width: 28px;
  height: 28px;
  right: 20px;
  top: 5px;

  background: #FFFFFF;
  border: 1px solid #854B9E;
  box-sizing: border-box;
  border-radius: 25px;
}

.search-bar-mobile {
  width: 71px;
}

</style>

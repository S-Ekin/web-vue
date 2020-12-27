<template>
  <div id="app">
    {{ msg }}
    <Text :a="text" />
    <Hello />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"
import Text from "./js/main/index.vue"
import Hello from "./js/main/Hello.vue"
class props {
}
@Options({
  components: {
    Text,
    Hello
  }
})
export default class App extends Vue.with(props) {
  msg = "eera";
  text = "er";
}
</script>

<style lang="scss">
@import "./css/scss/variate";
$headH: 60px;

#app {
  height: 100%;
  display: flex;
}

.left-aside {
  background: #577aaf;
  height: 100%;
}

.app-logo {
  display: flex;
  height: $headH;
  color: white;
  background: #5576aa;
  align-items: center;
  padding-right: 10px;

  .logo {
    flex: 1;
    height: 50px;
    background: url("./assert/imgs/app_logo.svg") no-repeat center;
  }

  .j-menu {
    cursor: pointer;
  }
}

.left-aside.active {
  .logo {
    display: none;
  }
}

.main {
  flex: 1;
  height: 100%;
  overflow: hidden; // 生成BFC 防止子节点大小不受控制

  .main-content {
    background: #fafafb;
    width: 100%;
    height: 100%;
  }
}

.main-header {
  height: $headH;
  box-shadow: $shadow;
}

#content {
  height: calc(100% - #{$headH});
  position: relative;
}
</style>

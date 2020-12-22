<template>
  <div id="app">
    {{ text }}
    <Text />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Text from "./js/main/index.vue"
export default defineComponent({
  components: {
    Text
  },
  data: function () {
    return {
      text: "fsd动阀fsa"
    }
  }
})
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

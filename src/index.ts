import { createApp } from 'vue'
import App from "./App.vue"
import "./css/common/common.scss"
import "./assert/fonts/iconfont.js"
import { router } from "./js/Router"
createApp(App).use(router).mount("#app")

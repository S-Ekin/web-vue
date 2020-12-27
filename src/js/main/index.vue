<template>
  <div>
    as的发案说法--{{ a }}
  </div>
</template>
<script lang="ts">
import { Vue, prop } from "vue-class-component"

class Props {
  a = prop({
    type: String
  })
}
export default class Text extends Vue.with(Props) {

}

</script>

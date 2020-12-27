<template>
  <div>
    as的发案说法--
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component"
    class Props {
        tex!:string;
    }
    @Options({
        watch: {
            val () {
                console.log(12)
            }
        }
    })
    export default class Hello extends Vue.with(Props) {
        val="er"
    }
</script>

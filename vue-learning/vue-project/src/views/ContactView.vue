
<script setup>
import theWelcome from "@/components/TheWelcome.vue";
import {useMouse} from "@/composables/mouse.js";
import {useStorage} from "@/composables/storage.js";
import {onMounted, ref, watch} from "vue";

let textarea = ref(null)
let {x, y} = useMouse();

let text = useStorage('text');

onMounted(() => {
  console.log(textarea.value)
})
</script>


<template>
 <div>x: {{x}}</div>
 <div>y: {{y}}</div>
  <input v-model="text">
  <textarea @keydown.tab.prevent="" ref="textarea"></textarea>
  <the-welcome></the-welcome>
</template>
}
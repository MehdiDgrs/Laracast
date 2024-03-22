
<script setup>
import theWelcome from "@/components/TheWelcome.vue";
import {useMouse} from "@/composables/mouse.js";

let {x, y} = useMouse();

</script>


<template>
 <div>x: {{x}}</div>
 <div>y: {{y}}</div>
  <input v-model="text">

  <the-welcome></the-welcome>
</template>
}
<script setup>
import {Link} from '@inertiajs/vue3'
import Nav from "../shared/Nav.vue";
import { provide } from 'vue'
import Layout from "../shared/Layout.vue";

let {time, name} = defineProps({
    time:String,
    name:String,
})
console.log(page.props)
provide('user', name )

    </script>

<template>
  <Layout >
      <div style="margin-top:1500px">
          {{ time }}

          <Link href="user" preserve-scroll>Refresh :)</Link>
      </div>
  </Layout>

</template>

<style scoped>

</style>
<script>

import Layout from "../shared/Layout.vue";

export default {
    Layout : Layout,
}
</script>

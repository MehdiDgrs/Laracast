

<script setup>
import { Head } from '@inertiajs/vue3';

const {name} = defineProps({name:String})
</script>
<template>
    <Head title="Welcome"></Head>
    Hello World , {{name}}
</template>

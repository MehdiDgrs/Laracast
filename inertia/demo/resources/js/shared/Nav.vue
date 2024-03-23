<script setup>
import { inject } from 'vue'
import { usePage } from '@inertiajs/vue3'

const page = usePage()
let name = inject("user");

</script>
<template>
    <nav class="flex space-x-5">
        <span> Welcome back, {{page.props.auth.user}}</span>
        <Link href="welcome" class=" text-blue-500  ">Welcome</Link>
        <Link href="user" :class="{'text-red-500': $page.url === '/user'}" class=" text-blue-500 ">User</Link>
        <Link href="logout" method="post" :data="{foo:'bar'}" as="button" class=" text-blue-500 ">Logout</Link>
    </nav>
</template>

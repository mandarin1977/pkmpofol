<template>
<AppHeader/>
<main>
    <slot/>
</main>
<AppFooter/>
</template>
<script setup>
import AppFooter from '~/components/common/AppFooter.vue';
import AppHeader from '~/components/common/AppHeader.vue';


</script>
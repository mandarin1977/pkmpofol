<template>
    <mainvisual/>
    <div class="maincontent">
        <mainquick/>
        <appeal/>
        <workview/>
        <ectwork/>
        <career/>
        <contact/>
    </div>
</template>
<script setup>
import contact from '../components/maincompo/contact.vue';
import Career from '../components/maincompo/career.vue';
import Ectwork from '../components/maincompo/ectwork.vue';
import Mainquick from '../components/maincompo/mainquick.vue';
import Mainvisual from '../components/maincompo/mainvisual.vue';
import Workview from '../components/maincompo/workview.vue';
import '../assets/common.css';
import '../assets/scss/main.scss';
import '../assets/component.css';
import Appeal from '~/components/maincompo/appeal.vue';
</script>
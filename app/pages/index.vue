<template>
    <mainvisual/>
    <div class="maincontent">
        <mainquick/>
        <appeal/>
        <numberlist/>
        <selectwrok/>
        <career/>
        <contact/>
    </div>
</template>
<script setup>
import contact from '../components/maincompo/contact.vue';
import Career from '../components/maincompo/career.vue';
import Mainquick from '../components/maincompo/mainquick.vue';
import Mainvisual from '../components/maincompo/mainvisual.vue';

import '../assets/common.css';
import '../assets/scss/main.scss';
import '../assets/component.css';
import Appeal from '~/components/maincompo/appeal.vue';
import Numberlist from '~/components/maincompo/numberlist.vue';
import Selectwrok from '~/components/maincompo/selectwrok.vue';
</script>
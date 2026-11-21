<template>
    <section class="sct mainQuick">
        <div class="inner">
            <article v-for="(mainQuickList) in mainQuickLists">
                <ul>
                    <li>{{mainQuickList.mqTit}}</li>
                </ul>
            </article>
        </div>
    </section>
</template>
<script setup>
const mainQuickLists = [
    {mqTit : 'Figma'},
    {mqTit : 'Photoshop'},
    {mqTit : 'HTML · CSS'},
    {mqTit : 'jQuery'},
    {mqTit : 'WebSquare 5.0'},
    {mqTit : 'Vue 3'},
    {mqTit : 'WordPress'},
    {mqTit : 'Gnuboard'},
    {mqTit : 'Cafe24'},
]
</script>
<style scoped>
.mainQuick{
    padding-top: 2rem;
    min-height: 5.2rem;
}
.mainQuick > .inner{
    justify-content: space-between;
}
.mainQuick .inner article{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
.mainQuick .inner article ul li{
    color: var(--ink-3);
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 1.6rem */
}
</style>
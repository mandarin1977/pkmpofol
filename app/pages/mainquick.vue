<template>
    <section class="sct mainQuick">
        <article v-for="(mainQuickList, idx) in mainQuickLists">
            <ul>
                <li>
                    0{{idx + 1}}
                </li>
                <li>{{mainQuickList.mqTit}}</li>
                <li>{{mainQuickList.mqSct}}</li>
            </ul>
        </article>
    </section>
</template>
<script setup>
const mainQuickLists = [
    {mqTit : '웹디자인', mqSct : '기획 의도를 화면으로 — 메인/서브 시안,이벤트 페이지'},
    {mqTit : '웹퍼블리싱', mqSct : '반응형·웹표준·접근성 고려한 마크업'},
    {mqTit : 'CMS 구축', mqSct : '그누보드·워드프레스·카페24 기반 납품까지'},
    {mqTit : '금융 SI', mqSct : 'WebSquare 5.0 대규모 업무 화면'}
]
</script>
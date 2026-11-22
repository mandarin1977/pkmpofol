<template>
    <section class="sct workSct">
        <div class="inner">
            <div class="selectBoxtit">
                <h2 class="selecth2">
                    Selected Work
                </h2>
                <ul class="selectTab">
                    <li v-for="cate in categories">
                        <button
                        :aria-pressed="act === cate"
                        @click="act = cate"
                        class="btn-style3">
                        {{cate}}
                        </button>
                    </li>
                    <li>
                        <NuxtLink to="/projects" class="btn-style3">
                            +
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <article class="workview">
                <aside class="workFocus" v-if="featuredWork">
                    <div class="sctArea leftArea">
                        <ul>
                            <li class="workfocusSmall">
                                <span class="small1">FEATURED</span>&nbsp;
                                <span class="small2">{{featuredWork.worknum}}</span>
                            </li>
                            <li class="workfocusTit">
                                <h3>{{featuredWork.title}}</h3>
                            </li>
                            <li class="workfocusTxt">
                                {{featuredWork.worktxt}}
                            </li>
                            <li class="workfocusLink">
                                <NuxtLink :to=featuredWork.bindherf class="btn-style4">
                                    더보기
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="sctArea rightArea">
                        <figure>
                            <picture>
                                <img v-bind:src="featuredWork.bindsrc" v-bind:alt="featuredWork.title">
                            </picture>
                        </figure>
                    </div>
                </aside>
                <aside>
                    <ul class="workBento">
                        <li v-for="work in bentoWorks">
                            <article>
                                
                            </article>
                        </li>
                    </ul>
                </aside>
                <p v-if="filtered.length === 0">
                    해당 분야는 작업준비중입니다.
                </p>
            </article>
        </div>
    </section>
</template>
<script setup>
const categories = ['전체', '디자인', '퍼블리싱', 'CMS 구축', '금융 SI' , 'Front', 'ect', '개인작업']
const act = ref('전체')
const works = [
    { id: 1, title: '부산남구육아종합지원센터 UI 개발', categories: ['퍼블리싱'], worknum: '2026', worktxt: '부산남구육아종합지원센터 홈페이지 화면 구축', featured: true, bindsrc: '/noimg.png' , bindherf: '/projects'},
    { id: 2, title: 'NH농협 차세대 계정계 UI 퍼블리싱', categories: ['금융 SI'], worknum: 'FINANCIAL SYSTEM · 2026', worktxt: '복잡한 금융 업무 흐름을 이해하고, WebSquare 기반 화면을 일관된 기준으로 구현했습니다.', featured: true, bindsrc: '/noimg.png', bindherf: '/projects' },
    { id: 3, title: '가온메탈온메탈 홈페이지 구축', categories: ['CMS 구축'], worknum: '2025', worktxt: 'cms기반 울진군체육회 홈페이지 화면 구축', featured: true, bindsrc: '/noimg.png' , bindherf: '/projects'},
    { id: 4, title: '울진군체육회 홈페이지 UI 퍼블리싱', categories: ['퍼블리싱'], worknum: '2024', worktxt: 'cms기반 울진군체육회 홈페이지 화면 구축',featured: false , bindsrc: '/noimg.png' , bindherf: '/projects'},
    { id: 5, title: '이모션가든', categories: ['Front'], worknum: '2024', featured: true , worktxt: '하루 일기 3줄을 적고 감정분석하면 ai가 감정을 분석하고 나서 꽃이 나오는 감정일기앱', bindsrc: '/noimg.png' , bindherf: '/projects'},
    { id: 6, title: 'Vdesk', categories: ['퍼블리싱'], worknum: '2025', featured: false , worktxt: 'Vdesk - 웹 구동 페이지 ui제작', bindsrc: '/noimg.png' , bindherf: '/projects'},
]
const filtered = computed(() =>
    act.value === '전체'
    ? works
    : works.filter(w => w.categories.includes(act.value))
)
const featuredWork = computed(() => filtered.value.find(w => w.featured))
const bentoWorks = computed(() =>
  filtered.value.filter(w => w !== featuredWork.value)
)
</script>
<style scoped>
.inner{flex-direction: column;}
.selectTab{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--space-8);
    flex-shrink: 0;
}
.selectBoxtit {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.selectBoxtit .selecth2{
    color: var(--ink);
    /* ORI v2/h2 */
    font-family: Inter;
    font-size: var(--type-h2);
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 4.4rem */
    letter-spacing: -0.12rem;
}
.workFocus{
    display: flex;
    min-height: 35.5rem;
    padding: var(--space-48) var(--space-40);
    align-items: center;
    gap: var(--space-40);
    border-radius: var(--radius-card);
    background: var(--dark);
}
.sctArea{
    flex: 1;
}
.leftArea ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-32);
    flex-shrink: 0;
}
.workfocusSmall {
    display: flex;
    align-items: center;
    gap: var(--space-12);
}
.workfocusSmall .small1{
    display: flex;
    width: max-content;
    padding: var(--space-8) var(--space-16);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-20);
    flex-shrink: 0;
    border-radius: var(--radius-button);
    background: var(--accent);
    color: var(--ink);
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 1.1375rem */
    letter-spacing: 0.0325rem;
    text-transform: uppercase;
}
.workfocusSmall .small2{
    color: var(--surface);
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 1.1375rem */
    letter-spacing: 0.0325rem;
    text-transform: uppercase;
}
.workfocusTit{
    color: var(--surface);
    font-size: var(--type-statement);
    font-style: normal;
    font-weight: 500;
    line-height: 135%; /* 3.0375rem */
}
.workfocusTxt{
    color: var(--surface);
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 1.6rem */
}
.workfocusTit, .workfocusTxt{
    max-width: 60%;
}
.rightArea *{width: 100%;height: 100%;object-fit: cover;}
</style>
<template>
    <section class="sct workSct">
        <div class="inner">
            <div class="selectBoxtit">
                <h2 class="selecth2">
                    Selected Work
                </h2>
                <ul class="selectTab">
                    <li v-for="cate in categories" :key="cate">
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
                                <span class="small2">{{featuredWork.year}} {{featuredWork.worknum}}</span>
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
                        <li v-for="work in bentoWorks" :key="work.id">
                            <NuxtLink :to="work.bindherf">
                                <ul>
                                    <li>
                                        <figure>
                                            <figcaption>{{work.categories}}</figcaption>
                                            <picture>
                                                <img :src="work.bindsrc">
                                            </picture>
                                        </figure>
                                    </li>
                                    <li>
                                        <h4>{{work.title}}</h4>
                                    </li>
                                    <li>
                                        <p>
                                            {{work.worktxt}}
                                        </p>
                                    </li>
                                    <li>
                                        <ul class="workBottom">
                                            <li>
                                                {{work.year}}
                                            </li>
                                            <li>
                                                자세히 ->
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </NuxtLink>
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
    { id: 1, title: '부산남구육아종합지원센터 UI 개발', categories: ['퍼블리싱'], year:'2026' , worknum: ' · PUBLIC WEBSITE', worktxt: '부산남구육아종합지원센터 홈페이지 화면 구축', featured: true, bindsrc: '/noImg.png' , bindherf: '/projects'},
    { id: 2, title: 'NH농협 차세대 계정계 UI 퍼블리싱', categories: ['금융 SI'], year:'2026', worknum: ' · FINANCIAL SYSTEM', worktxt: '복잡한 금융 업무 흐름을 이해하고, WebSquare 기반 화면을 일관된 기준으로 구현', featured: true, bindsrc: '/noImg.png', bindherf: '/projects' },
    { id: 3, title: '가온메탈온메탈 홈페이지 구축', categories: ['CMS 구축'], year:'2025', worknum: ' · COMPANY WEBSITE', worktxt: 'cms기반 울진군체육회 홈페이지 화면 구축', featured: true, bindsrc: '/noImg.png' , bindherf: '/projects'},
    { id: 4, title: '울진군체육회 홈페이지 UI 퍼블리싱', categories: ['퍼블리싱'], year:'2024', worknum: ' · PUBLIC WEBSITE', worktxt: 'cms기반 울진군체육회 홈페이지 화면 구축',featured: false , bindsrc: '/noImg.png' , bindherf: '/projects'},
    { id: 5, title: '이모션가든 유지보수', categories: ['Front'], year:'2024', worknum: ' · WEB APP', featured: true , worktxt: '하루 일기 3줄을 적고 감정분석하면 ai가 감정을 분석하고 나서 꽃이 나오는 감정일기앱', bindsrc: '/noImg.png' , bindherf: '/projects'},
    { id: 6, title: 'Vdesk', categories: ['퍼블리싱'], year:'2025', worknum: ' · UI SYSTEM', featured: false , worktxt: 'Vdesk - 웹 구동 페이지 ui제작', bindsrc: '/noImg.png' , bindherf: '/projects'},
    { id: 7, title: 'Dr.Cure', categories: ['Front'], year:'2025', worknum: ' · FRONT UI', featured: false , worktxt: '(주)코어트레이더스 자사몰 Dr.Cure cms 퍼블리싱을 통한 구축', bindsrc: '/noImg.png' , bindherf: '/projects'},
    { id: 10,title: '우산재단 병원 홈페이지 이전·복원',categories: ['CMS 구축'],year: '2026',worknum: 'MEDICAL CENTER WEBSITE · 2026',worktxt: '관리 업체 폐업으로 서버 접근이 끊긴 재단 산하 사이트를 복원해 그누보드 기반으로 이전',featured: false,bindsrc: '/noImg.png',bindherf: '/projects',},    { id: 9, title: 'Vdesk', categories: ['퍼블리싱'], year:'2025', worknum: ' · UI SYSTEM', featured:false , worktxt: 'Vdesk - 웹 구동 페이지 ui제작', bindsrc: '/noImg.png' , bindherf: '/projects'},
    { id: 10, title: 'Vdesk', categories: ['퍼블리싱'], year:'2025', worknum: ' · UI SYSTEM', featured: false , worktxt: 'Vdesk - 웹 구동 페이지 ui제작', bindsrc: '/noImg.png' , bindherf: '/projects'},
]
const filtered = computed(() =>
    act.value === '전체'
    ? works
    : works.filter(w => w.categories.includes(act.value))
)
const featuredWork = computed(() => filtered.value.find(w => w.featured))
const bentoWorks = computed(() =>
  filtered.value
  .filter(w => w !== featuredWork.value)
  .slice(0, 6)
)
</script>
<style scoped>
.inner{flex-direction: column;row-gap: 2rem;}
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
.workview{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    row-gap: 2rem;
}
.workFocus{
    display: flex;
    min-height: 35.5rem;
    padding: var(--space-48) var(--space-40);
    gap: var(--space-40);
    border-radius: var(--radius-card);
    background: var(--dark);
    align-items: stretch;
}
.sctArea{
    flex: 1;
}
.leftArea { display: flex; flex-direction: column; justify-content: center; }
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
.rightArea {
  display: flex;
}
.rightArea figure {
  flex: 1;
  min-height: 300px;   /* 이미지 최소 높이 */
  border-radius: var(--radius-image);
  overflow: hidden;
  /* aspect-ratio 삭제 */
}
.rightArea img { display: block; width: 100%; height: 100%; object-fit: cover; }

.workBento {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
}

.workBento > li > a > ul{
    display: flex;
    padding: 1rem;
    min-height: 42.5rem;
    flex-direction: column;
    gap: 1.125rem;
    border-radius: 1.75rem;
    background: #FFF;
}
.workBento > li > a > ul > li h4{
    color: #141619;
    font-size: 1.2em;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.025rem;
}
.workBento > li > a > ul > li > figure{
    width: 100%;
    height: auto;
    aspect-ratio: 237/150;
    border-radius: 1.25rem;
    background: #D6E7F6;
    position: relative;
    clip-path: fill-box;
}
.workBento > li > a > ul > li > figure figcaption{
    position: absolute;
    top: 1rem;
    left: 1rem;
}
.workBento > li > a > ul > li > figure picture *{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
.workBento > li > a > ul > li:nth-child(3){
    min-height: 4.8rem;
}
.workBottom{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
</style>
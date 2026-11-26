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
                <aside class="workList">
                    <ul class="workBento">
                        <li v-for="work in bentoWorks" :key="work.id">
                            <NuxtLink :to="work.bindherf" class="project-card">
                                <figure class="project-card__thumbnail">
                                    <img v-if="work.bindsrc && !work.bindsrc.endsWith('noImg.png')"
                                        :src="work.bindsrc" :alt="work.title" loading="lazy">
                                    <span v-else class="project-card__placeholder" aria-hidden="true">[썸네일]</span>
                                    <figcaption class="project-card__category">{{ work.categories.join(' · ') }}</figcaption>
                                </figure>
                                <div class="project-card__body">
                                    <h4>{{ work.title }}</h4>
                                    <p>{{ work.worktxt }}</p>
                                    <div class="project-card__footer">
                                        <span>{{ work.year }}</span>
                                        <span class="project-card__more">자세히 <span aria-hidden="true">→</span></span>
                                    </div>
                                </div>
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
.workList{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
}
.workBento {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    width: 100%;
}

.workBento > li { min-width: 0; }
.project-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 12px;
    border-radius: 28px;
    background: var(--surface);
    color: var(--ink);
}
.project-card:focus-visible {
    outline: 2px solid var(--ink);
    outline-offset: 4px;
}
.project-card__thumbnail {
    position: relative;
    display: grid;
    place-items: center;
    aspect-ratio: 237 / 150;
    overflow: hidden;
    border-radius: 20px;
    background: #D6E7F6;
}
.project-card__thumbnail img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.project-card__placeholder { color: #5B6571; font-size: 14px; }
.project-card__category {
    position: absolute;
    top: 12px;
    left: 12px;
    right: 12px;
    width: fit-content;
    max-width: calc(100% - 24px);
    padding: 7px 12px;
    border-radius: var(--radius-button);
    background: rgba(255, 255, 255, 0.9);
    font-size: 13px;
    font-weight: 500;
    line-height: 1.4;
}
.project-card__body {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px 8px 8px;
}
.project-card__body h4 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: -0.03em;
    overflow-wrap: anywhere;
}
.project-card__body > p {
    margin-top: 10px;
    margin-bottom: 20px;
    color: #5B6571;
    font-size: 15px;
    line-height: 1.6;
    overflow-wrap: anywhere;
}
.project-card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-top: auto;
    padding-top: 16px;
    border-top: 1px solid #E4E8EC;
    color: #5B6571;
    font-size: 15px;
}
.project-card__more {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--ink);
    font-weight: 500;
}

@media (max-width: 1080px) {
    .workBento {
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    }
}
@media (max-width: 810px) {
    .selectTab{
        flex-wrap: wrap;
        flex-shrink: unset;
    }
}
@media (max-width: 650px) {
    .workFocus{
        flex-direction: column;
    }
    .workfocusTit{
        max-width: none;
    }
}

@media (max-width: 350px) {
    .selectBoxtit{
        width: 100%;
    }
    .workview{
        width: 100%;
    }
    .workFocus{
        width: 100%;
    }
    .workfocusTit h3{
        font-size: 1em;
    }
    .workBento{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }
}
.selectBoxtit, .workview { width: 100%; min-width: 0; }
.selectBoxtit { gap: 20px; }
.selectTab { flex-wrap: wrap; flex-shrink: 1; }
@media (max-width: 1080px) {
    .selectBoxtit { flex-direction: column; align-items: flex-start; }
    .selectTab { justify-content: flex-start; }
}
@media (max-width: 650px) {
    .workfocusTit, .workfocusTxt { max-width: 100%; }
    .workfocusSmall { flex-wrap: wrap; }
}
</style>
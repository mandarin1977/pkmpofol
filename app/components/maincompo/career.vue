<template>
    <section class="sct careerSct">
        <div class="inner">
            <article class="mainBoxtit">
                <p>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                            <path d="M4.33 0V10M0 2.5L8.66 7.5M0 7.5L8.66 2.5" stroke="#111111"/>
                        </svg>
                    </i>
                    <span>
                        CAREER
                    </span>
                    <br>
                    <span>
                        디자인에서 시작해 퍼블리싱,
                        CMS 구축과 금융 SI까지.
                    </span>
                </p>
                <h2>
                    다양한 환경에서 쌓아온 경험.
                    <br>
                    <span>
                       기획과 운영 사이의 연결을 이해합니다.
                    </span>
                </h2>
            </article>
            <article class="fSide rightArea">
                <ul class="careerUl">
                    <li v-for="career in careers">
                       <dl>
                            <dd class="careerDate">
                                {{career.careerDate}}
                            </dd>
                            <dt class="careerTit">
                                <b>{{career.careerTit}}</b>
                                <span v-if="career.careerTit === '소프트보울'">현재</span>
                            </dt>
                            <dd class="careerScript">
                                {{career.careerScript}}
                            </dd>
                       </dl>
                    </li>
                </ul>
            </article>
        </div>
    </section>
</template>
<script setup>
const careers = [
    {careerDate : '2026.09 — 현재' , careerTit :  '소프트보울', careerScript : '웹퍼블리셔 · 웹디자이너 — 공공기관 사이트 유지보수, 디자인 QA'},
    {careerDate : '2026.05 — 2026.09' , careerTit :  '㈜크레아이디', careerScript : 'NH농협 차세대 계정계 WebSquare UI 퍼블리싱'},
    {careerDate : '2025.08 — 2026.05' , careerTit :  '스토리진', careerScript : 'CMS 개발 · 퍼블리싱, SEO/GEO'},
    {careerDate : '2025.03 — 2025.08' , careerTit :  '코어플랫폼', careerScript : '퍼블리싱 및 프론트 일부'},
    {careerDate : '2023.10 — 2024.12' , careerTit :  '부산인터넷방송국', careerScript : '웹디자인 · 웹퍼블리싱'}
]
</script>
<style scoped>
.inner{
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-48);
}
.rightArea{
    width: 100%;;
}
.careerUl > li > dl{
    display: grid;
    grid-template-columns: 20% 30% auto;
    padding: var(--space-32) 0;
    align-items: center;
    gap: var(--layout-gutter);
    border-top: 1px solid var(--line);
}
.careerUl > li > dl .careerDate{
    color: var(--ink-2);
    /* ORI v2/caption */
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 1.1375rem */
    letter-spacing: 0.0325rem;
    text-transform: uppercase;
}
.careerUl > li > dl .careerTit b{
    color: var(--ink);
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 1.6rem */
}
.careerUl > li > dl .careerTit span{
    padding: var(--space-8) var(--space-12);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-0);
    flex-shrink: 0;
    border-radius: var(--radius-button);
    background: var(--accent);
}
.careerUl > li > dl .careerScript{
    color: var(--ink-2);
    /* ORI v2/body */
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 1.6rem */
}
</style>
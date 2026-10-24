<template>
    <section class="sct careerSct">
        <div class="inner">
            <article class="fSide leftArea">
                <div class="mainBoxtit">
                    <p>CAREER</p>
                    <h2>경력</h2>
                </div>
            </article>
            <article class="fSide rightArea">
                <ul class="careerUl">
                    <li v-for="career in careers">
                       <dl>
                            <dd>
                                {{career.careerDate}}
                            </dd>
                            <dd>
                                <dl>
                                    <dt>{{career.careerTit}}</dt>
                                    <dd>{{career.careerScript}}</dd>
                                </dl>
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

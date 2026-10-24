<template>
    <section class="sct workViewSct">
        <div class="inner">
            <div class="top">
                <div class="mainBoxtit">
                    <p>SELECTED WORK</p>
                    <h2>작업</h2>
                </div>
                <ul class="buttonArea">
                    <li>
                        <NuxtLink to="/">
                            전체
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">
                            디자인
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">
                            퍼블리싱
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">
                            CMS 구축
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">
                            기타
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="bottom">
                <article class="workOnArea">
                    <ul>
                        <li class="workLeftArea">
                            <figure>
                                <img src="/noImg.png" alt="나올 이미지">
                            </figure>
                        </li>
                        <li class="workrRightArea">
                            <ul class="">
                                <li class="smtit">FEATURED · 금융 SI · 2026</li>
                                <li class="bigtit"><b>NH농협 차세대 계정계 UI 퍼블리싱</b></li>
                                <li class="worksct">[WebSquare 5.0 기반 대규모 금융 화면 구현 — 맡은 범위, 화면 수, 협업 방식 요약]</li>
                                <li class="tag"><span>WebSquare 5.0</span><span>UI 퍼블리싱</span>대규모 SI<span></span></li>
                                <li class="linkto">
                                    <NuxtLink to="">
                                        보러가기
                                    </NuxtLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </article>
                <article class="">
                    <div v-for="work in works" :key="id">
                        <figure>
                            <img v-bind:src="work.img"  alt="dd">
                        </figure>
                        <ul>
                            <li>
                                {{work.tag}} · {{work.year}}
                            </li>
                            <li>
                                {{work.title}}
                            </li>
                            <li>
                                {{work.txt}}
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
<script setup>

const works = [
    {id: '001',tag: '퍼블리싱', year: '2026', title: '랑랑키즈카페 메인 리뉴얼', txt: '[수영구육아종합지원센터 · 반응형 원페이지]', img: '/noImg.png'},
    {id: '002',tag: 'CMS 구축', year: '2024', title: '울진군체육회 홈페이지', txt: '[디자인 + 퍼블리싱 + CMS]', img: '/noImg.png'},
    {id: '003',tag: '디자인 · 퍼블리싱', year: '2024', title: '2024 주니어 해양컨퍼런스', txt: '[역할 요약]', img: '/noImg.png'},
    {id: '004',tag: '디자인 · 퍼블리싱', year: '2024', title: '거제앵산트레일레이스2024', txt: '[역할 요약]', img: '/noImg.png'},
    {id: '005',tag: '플랫폼 UI', year: '2023', title: 'Xderma 해외 화장품 플랫폼', txt: '[역할 요약]', img: '/noImg.png'},
    {id: '006',tag: '디자인', year: '2024', title: '조광페인트 ESG 카테고리', txt: '[역할 요약]', img: '/noImg.png'}
]
</script>
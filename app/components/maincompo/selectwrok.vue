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
                        >
                        {{cate}}
                        </button>
                    </li>
                    <li>
                        <NuxtLink to="/projects">
                            +
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <article class="workview">
                <aside class="workFocus" v-if="featuredWork">
                    <div class="sctArea leftArea">
                        <ul>
                            <li>
                                <span>FEATURED</span>
                                <span>{{featuredWork.worknum}}</span>
                            </li>
                            <li>
                                <h3>{{featuredWork.title}}</h3>
                            </li>
                            <li>
                                {{featuredWork.worktxt}}
                            </li>
                            <li>
                                <NuxtLink :to=featuredWork.bindherf>
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
                            <figcaption>

                            </figcaption>
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
const categories = ['전체', '디자인', '퍼블리싱', 'CMS 구축', '금융 SI']
const act = ref('전체')
const works = [
    { id: 1, title: '랑랑키즈카페 메인 리뉴얼', categories: ['퍼블리싱'], worknum: '2026', worktxt: 'sfasfsd', featured: true, bindsrc: '/noimg.png' , bindherf: '/projects'},
    { id: 2, title: 'NH농협 차세대 계정계 UI 퍼블리싱', categories: ['금융 SI'], worknum: '2026', worktxt: '복잡한 금융 업무 흐름을 이해하고, WebSquare 기반 화면을 일관된 기준으로 구현했습니다.', featured: true, bindsrc: '/noimg.png', bindherf: '/projects' },
    { id: 3, title: '울진군체육회 홈페이지', categories: ['CMS 구축'], worknum: '2026', worktxt: 'sfasfsd', featured: true, bindsrc: '/noimg.png' , bindherf: '/projects'},
    { id: 4, title: 'sdf 리뉴얼', categories: ['퍼블리싱'], worknum: '2026', featured: false , bindsrc: '/noimg.png' , bindherf: '/projects'},
    { id: 5, title: '랑sdf', categories: ['퍼블리싱'], worknum: '2026', featured: false , bindsrc: '/noimg.png' , bindherf: '/projects'},
    { id: 6, title: '랑랑asdf', categories: ['퍼블리싱'], worknum: '2026', featured: false , bindsrc: '/noimg.png' , bindherf: '/projects'},
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
.selectTab{display: flex;}
.selectBoxtit {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
} 
</style>
<template>
    <p v-if="status === 'pending'">불러오는중...</p>
    <p v-else-if="error">오류 : {{error.message}}</p>

    <article v-else-if="project" class="case">
      <header class="case-head">
        <p class="eyebrow">CASE STUDY · {{project.category}}</p>
        <h2>{{project.title}}</h2>
        <p class="summary">{{project.summary}}</p>
      </header>
      <dl class="case-meta">
        <div>
          <dt>CLIENT</dt>
          <dd>{{project.client}}</dd>
        </div>
        <div>
          <dt>PERIOD</dt>
          <dd>{{project.period}}</dd>
        </div>
        <div>
          <dt>ROLE · 기여도</dt>
          <dd>{{project.role}}</dd>
        </div>
        <div>
          <dt>TOOLS</dt>
          <dd>{{project.tools?.join(' · ') }}</dd>
        </div>
      </dl>

      <a v-if="project.site_url" :href="project.site_url" target="_blank" rel="non">
        라이브 사이트 ↗
      </a>

    <figure v-if="project.detail_image_url" class="case-main">
      <img v-if="project.detail_image_url" :src="project.detail_image_url" :alt="`${project.title}`">
    </figure>
    <section class="case-story">
      <div>
        <p class="eyebrow">01 · 과제</p>
        <h2>무엇이 문제였나</h2>
        <p>{{ project.problem }}</p>
      </div>
      <div>
        <p class="eyebrow">02 · 해결</p>
        <h2>어떻게 풀었나</h2>
        <p>{{ project.solution }}</p>
      </div>     
    </section>
    <!-- 03: 데이터 있을 때만 -->
    <section v-if="project.points?.length" class="case-points">
      <p class="eyebrow">03 · 작업 포인트</p>
      <h2>디자인과 코드에서 신경 쓴 것</h2>
      <ul>
        <li v-for="(point, i) in project.points" :key="i">
          <figure v-if="point.img"><img :src="point.img" alt=""></figure>
          <h3>{{ point.title }}</h3>
          <p>{{ point.desc }}</p>
        </li>
      </ul>
    </section>     
  </article>
  <!-- 이전/다음 -->
  <nav class="case-nav" aria-label="다른 프로젝트">
    <!-- 아래 3번 참고 -->
    <NuxtLink v-if="prev" :to="`/projects/${prev.id}`">
      <span>← PREV</span><strong>{{ prev.title }}</strong>
    </NuxtLink>
    <NuxtLink v-if="next" :to="`/projects/${next.id}`">
      <span>NEXT →</span><strong>{{ next.title }}</strong>
    </NuxtLink>
  </nav>  
</template>
<script setup>
import { createClient } from '@supabase/supabase-js';


const config = useRuntimeConfig()

const route = useRoute()

const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseKey,
)

const {data: project, status, error} = await useAsyncData(
  `project-${route.params.id}`,
  async () => {
    const {data, error} = await supabase
      .from('projects')
      .select('*')
      .eq('id', route.params.id)
      .single()

    if (error) throw new Error(error.message)
    return data
  },
)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage : '프로젝트를 찾을 수 없습니다.' })
}

const {data: siblings} = await useAsyncData('project-siblings' , async () => {
  const {data} = await supabase
    .from('projects')
    .select('id, title')
    .order('year', {ascending: false})
  return data
})

const currentIndex = computed(() =>
  siblings.value?.findIndex(p => String(p.id) === String(route.params.id)) ?? -1
)
const prev = computed(() => siblings.value?.[currentIndex.value - 1])
const next = computed(() => siblings.value?.[currentIndex.value + 1])

</script>
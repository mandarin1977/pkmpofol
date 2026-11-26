<template>
    <p class="case-state" v-if="status === 'pending'">불러오는중...</p>
    <p class="case-state" v-else-if="error">오류 : {{error.message}}</p>

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

      <a class="case-site" v-if="project.site_url" :href="project.site_url" target="_blank" rel="noopener noreferrer">
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
    <NuxtLink class="case-nav-prev" v-if="prev" :to="`/projects/${prev.id}`">
      <span>← PREV</span><strong>{{ prev.title }}</strong>
    </NuxtLink>
    <NuxtLink class="case-nav-next" v-if="next" :to="`/projects/${next.id}`">
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

<style scoped>
.case,
.case-nav,
.case-state {
  --case-line: #d0d0ca;
  --case-muted: #65655f;
  --case-gap: clamp(56px, 7vw, 120px);
  width: min(calc(100% - 40px), 1520px);
  margin-inline: auto;
  color: var(--ink, #222);
  box-sizing: border-box;
}
.case { padding-top: clamp(32px, 4vw, 72px); }
.case-state { padding-block: 48px; }
.case *, .case-nav * { box-sizing: border-box; }
.case h2, .case h3, .case p, .case dl, .case dd,
.case figure, .case ul { margin: 0; }
.case p, .case dd, .case h2, .case h3, .case-nav strong {
  overflow-wrap: anywhere;
}
.case .eyebrow {
  color: var(--case-muted);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.04em;
}
.case-head h2 {
  margin-top: 20px;
  font-size: clamp(32px, 3vw, 52px);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.04em;
}
.case-head .summary {
  max-width: 960px;
  margin-top: 24px;
  color: var(--ink-2, #555);
  font-size: clamp(16px, 1.2vw, 20px);
  line-height: 1.8;
}
.case .case-meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)) minmax(0, 3fr);
  gap: 24px;
  margin-top: 40px;
  padding-block: 20px;
  border-top: 1px solid var(--ink, #222);
  border-bottom: 1px solid var(--case-line);
}
.case-meta > div { min-width: 0; }
.case-meta dt {
  margin-bottom: 8px;
  color: var(--case-muted);
  font-size: 11px;
  line-height: 1.5;
  letter-spacing: 0.04em;
}
.case-meta dd { font-size: 14px; line-height: 1.7; }
.case-site {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  margin-top: 18px;
  padding: 10px 18px;
  border: 1px solid currentColor;
  border-radius: 8px;
  color: inherit;
  font-size: 13px;
  line-height: 1.5;
  text-decoration: none;
}
.case .case-main {
  margin-top: 40px;
  overflow: hidden;
  border: 1px solid var(--case-line);
  border-radius: 12px;
  background: #e3e3df;
}
.case-main img { display: block; width: 100%; height: auto; }
.case-story {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(32px, 5vw, 80px);
  margin-top: var(--case-gap);
  padding: clamp(32px, 4vw, 64px);
  border-block: 1px solid var(--case-line);
  background: #ecece8;
}
.case-story > div { min-width: 0; }
.case-story h2, .case-points > h2 {
  margin-top: 16px;
  font-size: clamp(24px, 2vw, 32px);
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.03em;
}
.case-story h2 + p {
  margin-top: 20px;
  color: var(--ink-2, #555);
  font-size: 15px;
  line-height: 1.8;
  white-space: pre-line;
}
.case-points { margin-top: var(--case-gap); }
.case-points > ul {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-top: 32px;
  padding: 0;
  list-style: none;
}
.case-points > ul > li {
  min-width: 0;
  padding: 20px;
  border: 1px dashed #aaa;
  border-radius: 12px;
}
.case-points figure {
  overflow: hidden;
  border-radius: 8px;
  background: #e3e3df;
}
.case-points figure img { display: block; width: 100%; height: auto; }
.case-points h3 { margin-top: 16px; font-size: 18px; font-weight: 600; line-height: 1.5; }
.case-points h3:first-child { margin-top: 0; }
.case-points h3 + p {
  margin-top: 10px;
  color: var(--ink-2, #555);
  font-size: 14px;
  line-height: 1.8;
  white-space: pre-line;
}
.case-nav {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
  margin-top: var(--case-gap);
  padding-block: 32px;
  border-block: 1px solid var(--case-line);
}
.case-nav:empty { display: none; }
.case-nav > a {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: min(100%, 520px);
  min-width: 0;
  padding: 24px;
  border: 1px dashed #aaa;
  border-radius: 12px;
  color: inherit;
  text-decoration: none;
}
.case-nav span { color: var(--case-muted); font-size: 11px; line-height: 1.5; }
.case-nav strong { font-size: 16px; line-height: 1.6; }
.case-nav-prev { grid-column: 1; }
.case-nav-next { grid-column: 2; justify-self: end; text-align: right; }
.case-site:focus-visible, .case-nav > a:focus-visible {
  outline: 2px solid var(--ink, #222);
  outline-offset: 4px;
}
@media (max-width: 1024px) {
  .case .case-meta { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .case-points > ul { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
  .case-head .summary { margin-top: 16px; }
  .case .case-meta { gap: 24px 16px; margin-top: 28px; }
  .case-story { grid-template-columns: minmax(0, 1fr); gap: 36px; padding: 28px 20px; }
  .case-points > ul { grid-template-columns: minmax(0, 1fr); gap: 16px; margin-top: 24px; }
  .case-nav { gap: 12px; padding-block: 24px; }
  .case-nav > a { padding: 16px; }
  .case-nav strong { font-size: 14px; }
}
</style>

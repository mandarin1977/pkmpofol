<template>
  <section class="projects-page" aria-labelledby="projects-title">
    <header class="projects-head">
      <p class="projects-eyebrow">SELECTED WORK · PROJECTS</p>
      <h1 id="projects-title">웹 프로젝트</h1>
      <p class="projects-intro">디자인과 코드로 완성한 작업들을 소개합니다.</p>
    </header>

    <p v-if="status === 'pending'" class="projects-state" role="status">불러오는 중...</p>
    <p v-else-if="error" class="projects-state" role="alert">오류: {{ error.message }}</p>
    <template v-else-if="projects?.length">
      <div class="projects-toolbar">
        <p>전체 <strong>{{ projects.length }}</strong></p>
        <span>연도순</span>
      </div>
      <ul class="projects-list">
        <li v-for="project in projects" :key="project.id" class="project-item">
          <NuxtLink :to="`/projects/${project.id}`" class="project-card">
            <figure class="project-thumbnail">
              <img v-if="project.image_url && !project.image_url.includes('noImg.png')"
                :src="project.image_url" :alt="project.title" loading="lazy">
              <span v-else class="project-placeholder">이미지 준비중</span>
            </figure>
            <div class="project-body">
              <h2>{{ project.title }}</h2>
              <div class="project-footer">
                <span class="project-year">{{ project.year }}</span>
                <span class="project-more">자세히 <span aria-hidden="true">→</span></span>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </template>
    <p v-else class="projects-state">등록된 프로젝트가 없습니다.</p>
  </section>
</template>
<script setup>
import { createClient } from '@supabase/supabase-js';

const config = useRuntimeConfig()

const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseKey,
)

const {data : projects, status, error} = await useAsyncData(
    'projects-list',
    async () => {
        const {data, error} = await supabase
            .from('projects')
            .select('id, title, year, image_url')
            .order('year', {ascending:false})

        if (error) throw new Error(error.message)

        return data
    },
)
</script>

<style scoped>
.projects-page {
  width: min(calc(100% - clamp(40px, 8vw, 160px)), 1520px);
  margin-inline: auto;
  padding-block: clamp(32px, 4vw, 72px) clamp(64px, 8vw, 128px);
  color: var(--ink, #222);
}
.projects-page * { box-sizing: border-box; }
.projects-page p, .projects-page h1, .projects-page h2,
.projects-page ul, .projects-page figure { margin: 0; }
.projects-eyebrow {
  color: var(--ink-2, #65655f);
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.04em;
}
.projects-head h1 {
  margin-top: 20px;
  font-size: clamp(32px, 3vw, 52px);
  line-height: 1.25;
  letter-spacing: -0.04em;
  font-weight: 700;
}
.projects-head .projects-intro {
  margin-top: 20px;
  color: var(--ink-2, #555);
  font-size: 16px;
  line-height: 1.8;
  word-break: keep-all;
}
.projects-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: clamp(32px, 4vw, 64px);
  padding-block: 20px;
  border-top: 1px solid var(--ink, #222);
  color: var(--ink-2, #65655f);
  font-size: 14px;
}
.projects-toolbar strong { margin-left: 6px; color: var(--ink, #222); }
.projects-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  padding: 0;
  list-style: none;
}
.project-item { min-width: 0; }
.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 12px;
  border-radius: 28px;
  background: var(--surface, #fff);
  color: inherit;
  text-decoration: none;
}
.project-thumbnail {
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 237 / 150;
  overflow: hidden;
  border-radius: 20px;
  background: #d6e7f6;
}
.project-thumbnail img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.project-placeholder { color: #5b6571; font-size: 14px; }
.project-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px 8px 8px;
}
.project-body h2 {
  margin-bottom: 24px;
  font-size: clamp(19px, 1.5vw, 24px);
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.03em;
  word-break: keep-all;
  overflow-wrap: anywhere;
}
.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #e4e8ec;
  font-size: 15px;
  line-height: 1.5;
}
.project-year { color: #5b6571; }
.project-more { display: inline-flex; align-items: center; gap: 10px; font-weight: 500; }
.project-card:focus-visible { outline: 2px solid var(--ink, #222); outline-offset: 4px; }
.projects-state {
  margin-top: 40px !important;
  padding-block: 48px;
  border-block: 1px solid var(--line, #d0d0ca);
  color: var(--ink-2, #65655f);
  line-height: 1.8;
  overflow-wrap: anywhere;
}
@media (max-width: 1024px) {
  .projects-list { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
}
@media (max-width: 640px) {
  .projects-list { grid-template-columns: minmax(0, 1fr); gap: 20px; }
  .projects-head .projects-intro { margin-top: 16px; }
  .projects-toolbar { padding-block: 16px; }
}
</style>

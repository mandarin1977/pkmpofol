<script setup>
import { createClient } from '@supabase/supabase-js'

const config = useRuntimeConfig()

const supabase = createClient(
  config.public.supabaseUrl,
  config.public.supabaseKey,
)

const { data: projects, status, error } = await useAsyncData(
  'supabase-test',
  async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('id, title, description')
      .limit(5)

    if (error) {
      throw new Error(error.message)
    }

    return data
  },
)
</script>

<template>
  <main>
    <h1>Supabase 연결 테스트</h1>

    <p v-if="status === 'pending'">불러오는 중...</p>
    <p v-else-if="error">오류: {{ error.message }}</p>
    <ul v-else-if="projects?.length">
      <li v-for="project in projects" :key="project.id">
        {{ project.title }}
      </li>
        <li v-for="project in projects" :key="project.id">
            {{project.description}}
        </li>
    </ul>
    <p v-else>조회된 프로젝트가 없어.</p>
  </main>
</template>
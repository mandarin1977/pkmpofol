<template>
    <h1>웹 프로젝트</h1>
    <p v-if="status === 'pending'">불러오는중...</p>
    <p v-else-if="error">오류 : {{error.message}}</p>

    <article v-for="project in projects">
          <h2>{{project.title}}</h2>
          <span class="projectYear">{{project.year}}</span>
          <figure class="project-img">
              <img v-if="project.detail_image_url" :src="project.detail_image_url" :alt="project.title">
              <span v-else></span>
          </figure>
          <p v-for="project in projects">
            {{project.content}}
          </p>
    </article>
</template>
<script setup>
import { createClient } from '@supabase/supabase-js';

const config = useRuntimeConfig()

const route = useRoute()

const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseKey,
)

const {data: projects, status, error} = await useAsyncData(
  `projects-list-${route.params.id}`,
  async () => {
    const {data, error} = await supabase
      .from('projects')
      .select('id, title, year, content, detail_image_url, site_url')
      .order('year', {ascending:false})

    if (error) throw new Error(error.message)

    return data
  },
)


</script>
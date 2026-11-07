<template>
    <h1>웹 프로젝트</h1>
    <p v-if="status === 'pending'">불러오는중...</p>
    <p v-else-if="error">오류 : {{error.message}}</p>

    <ul v-else-if="projects?.length" class="projects-list">
        <li v-for="project in projects" :key="project.id" class="project-item">
            <NuxtLink :to="`/projects/${project.id}`">
                <figure class="project-thumnamil">
                    <img v-if="project.image_url" :src="project.image_url" :alt="project.title">
                    <span v-else>이미지 준비중</span>
                </figure>
                <span class="projectYear">{{project.year}}</span>
                <h2>{{project.title}}</h2>
            </NuxtLink>
        </li>
    </ul>
    <p v-else>등록된 프로젝트가 없습니다.</p>
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
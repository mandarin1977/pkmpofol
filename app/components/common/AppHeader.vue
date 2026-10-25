<template>
    <header class="hd">
        <div class="inner">
            <h1>
                <NuxtLink to="/" class="hLogo">
                    <i>
                        <!-- logo img -->
                    </i>
                    <span>
                        PKMPofol
                    </span>
                </NuxtLink>
            </h1>
            <nav class="gnb">
                <ul>
                    <li v-for="menu in menus" aria-label="메인메뉴" :key="menu.path">
                        <NuxtLink :to="menu.path">
                            {{menu.label}}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
            <nav class="utill">
                <ul>
                    <li v-for="utill in utillMenus" aria-label="유틸메뉴" :key="utill.path">
                        <NuxtLink :to="utill.path">
                            {{utill.label}}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script setup>
import './header.scss';

const menus = [
    {label : 'home', path: '/'},
    {label : 'project', path: '/projects'},
    {label : 'blog', path: 'https://blog.example.com', external:true},
    {label : 'contact', path: '/contact'},
]
const utillMenus = [
    {label: 'login', path: '/admin/login'},
    {label: 'adm', path: '/admin'}
]
</script>
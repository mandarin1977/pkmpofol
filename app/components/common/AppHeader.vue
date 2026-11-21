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
                    <!-- <li v-for="utill in utillMenus" aria-label="유틸메뉴" :key="utill.path">
                        <NuxtLink :to="utill.path">
                            {{utill.label}}
                        </NuxtLink>
                    </li> -->
                    <li aria-label="유틸메뉴" >
                        <NuxtLink to="/contact" class="btn-style1">
                            <span>Contact</span>
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                                    <path d="M0.533203 4.53345H9.86654M5.86654 8.53345L9.86654 4.53345L5.86654 0.533447" stroke-width="1.06667" stroke-linecap="round" stroke-linejoin="round" stroke="#111111"/>
                                </svg>
                            </i>
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
    // {label : 'home', path: '/'},
    {label : 'About', path: '/about'},
    {label : 'Project', path: '/projects'},
    {label : 'Career', path:'/career'},
    // {label : 'blog', path: 'https://blog.example.com', external:true},
    // {label : 'contact', path: '/contact'},
]
// const utillMenus = [
//     {label: 'login', path: '/admin/login'},
//     {label: 'adm', path: '/admin'}
// ]
</script>

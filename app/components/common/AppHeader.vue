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
            <nav class="gnb pc">
                <ul>
                    <li v-for="menu in menus" aria-label="메인메뉴" :key="menu.path">
                        <NuxtLink :to="menu.path">
                            {{menu.label}} 
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
            <nav class="utill pc">
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
            <div class="mo">
                <button
                type="button"
                class="mo-btn"
                @click="isOpen = !isOpen"
                :aria-expanded="isOpen"
                aria-controls="mo-menu"
                :aria-label="isOpen ? '메뉴 닫기' : '메뉴 열기'"
                >
                {{ isOpen ? '×' : '=' }}
                </button>
            </div>
            <Teleport to="#teleports">
                <nav class="mo-menu" v-show="isOpen">
                        <ul class="mognb">
                            <li v-for="menu in menus" aria-label="메인메뉴" :key="menu.path">
                                <NuxtLink :to="menu.path">
                                    {{menu.label}} 
                                </NuxtLink>
                            </li>
                        </ul>
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
            </Teleport>
        </div>
    </header>
</template>
<script setup>
import './header.scss';
const isOpen = ref(false)

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


const route = useRoute()
watch(() => route.fullPath, () => {
    isOpen.value = false
})
</script>

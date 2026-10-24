<template>
    <header>
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
        </div>
    </header>
</template>
<script setup>
const menus = [
    {label : 'home', path: '/'},
    {label : 'project', path: '/projects'},
    {label : 'blog', path: 'https://blog.example.com', external:true},
    {label : 'contact', path: '/contact'},
]
</script>
<style>

</style>
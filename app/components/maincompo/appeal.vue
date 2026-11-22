<template>
    <section class="sct mypoint">
        <div class="inner">
            <article class="mainBoxtit">
                <p>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                            <path d="M4.33 0V10M0 2.5L8.66 7.5M0 7.5L8.66 2.5" stroke="#111111"/>
                        </svg>
                    </i>
                    <span>
                        WHAT I DO
                    </span>
                </p>
                <h2>
                    기획 의도를 화면으로,
                    <br>
                    <span>
                        화면을 코드로 끝까지 연결합니다.
                    </span>
                </h2>
                <div class="appealsct">
                    <p>SERVICES / 01—04</p>
                </div>
            </article>
            <article class="appealpointul">
                <ul>
                    <li v-for="cando in candos" :key="id">
                        <dl>
                            <dt class="num">{{cando.num}}</dt>
                            <dd class="img">
                                <img v-bind:src="cando.imgsrc">
                            </dd>
                            <dt class="tit">{{cando.tit}}</dt>
                            <dd class="text">{{cando.text}}</dd>
                        </dl>
                    </li>
                </ul>
            </article>
        </div>
    </section>
</template>
<script setup>
const candos = [
    {id: 1, num:'01', imgsrc:'/noImg.png', tit:'웹디자인', text:'사용자의 흐름을 화면으로 설계하고, 브랜드의 인상을 일관되게 만듭니다.'},
    {id: 2, num:'02', imgsrc:'/noImg.png', tit:'웹디자인', text:'사용자의 흐름을 화면으로 설계하고, 브랜드의 인상을 일관되게 만듭니다.'},
    {id: 3, num:'03', imgsrc:'/noImg.png', tit:'웹디자인', text:'사용자의 흐름을 화면으로 설계하고, 브랜드의 인상을 일관되게 만듭니다.'},
    {id: 4, num:'04', imgsrc:'noImg.png', tit:'웹디자인', text:'사용자의 흐름을 화면으로 설계하고, 브랜드의 인상을 일관되게 만듭니다.'},
]


</script>
<style scoped>
.inner{flex-direction: column;width: 100%;align-items: start;row-gap: 9.95831rem;}
.appealpointul{width: 100%;}
.appealpointul ul{display: grid;grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));gap: 2.4rem;}

</style>
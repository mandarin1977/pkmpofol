<template>
    <section class="sct historynum">
        <div class="inner">
            <article class="mainBoxtit">
                <p>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                            <path d="M4.33 0V10M0 2.5L8.66 7.5M0 7.5L8.66 2.5" stroke="#111111"/>
                        </svg>
                    </i>
                    <span>
                        AT A GLANCE
                    </span>
                </p>
                <h2>
                    경험은 결과로 남깁니다.
                    <br>
                    <span>
                        확인할 수 있는 숫자로 소개합니다.
                    </span>
                </h2>
            </article>
            <article class="numlistul">
                <ul>
                    <li v-for="numberlist in numberlists">
                        <p class="numberTit">
                            <span>[</span>
                            {{numberlist.number}}
                            <span>]</span>
                        </p>
                        <p>
                            {{numberlist.txt}}
                        </p>
                    </li>
                </ul>
            </article>
        </div>
    </section>
</template>
<script setup>
const numberlists = [
    {id:1, number:'100', txt: '납품 사이트'},
    {id:2, number:'200', txt: '수행 프로젝트'},
    {id:3, number:'150', txt: '구현 화면'},
    {id:4, number:'200', txt: '운영·유지보수'},
]
</script>
<style scoped>
.mainBoxtit{
    align-items: end;
    width: 100%;
    text-align: right;
}
.numlistul{
    width: inherit;
}
.numlistul ul{
    margin-top: 9.95831rem;;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
    padding: var(--space-32) 0;
    align-items: center;
    gap: var(--layout-gutter);
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
}
.numlistul ul li{
    flex: 1;
}
.numberTit{
    color: var(--ink);
    /* ORI v2/h2 */
    font-family: Inter;
    font-size: var(--type-h2);
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 4.4rem */
    letter-spacing: -0.12rem;
}
</style>
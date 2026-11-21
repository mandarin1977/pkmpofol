<template>
    <section class="sct mainVisualSct">
        <div class="inner">
            <article class="hero-top">
                <aside class="hero-left">
                    <p class="hero-small">
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                            <path d="M4.33 0V10M0 2.5L8.66 7.5M0 7.5L8.66 2.5" stroke="#111111"/>
                        </svg>
                        </span>
                        <small>WEB DESIGNER · WEB PUBLISHER</small>
                    </p>
                    <h2 class="hero-title">
                        디자인하고, 코드로 끝까지 만듭니다.
                    </h2>
                    <ul class="hero-btn-wrap">
                        <li>
                            <NuxtLink to="/projects" class="btn-style1">
                                <span>작업 보기</span>
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                                        <path d="M0.533203 4.53345H9.86654M5.86654 8.53345L9.86654 4.53345L5.86654 0.533447" stroke-width="1.06667" stroke-linecap="round" stroke-linejoin="round" stroke="#111111"/>
                                    </svg>
                                </i>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/" class="btn-style2">
                                <span>이력서 PDF</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </aside>
                <aside class="hero-right">

                </aside>
            </article>
        </div>
    </section>
</template>
<script>
</script>
<style scoped>
.mainVisualSct{
    display: flex;
    height: 63.4375rem;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-0);
    background: url('/main/hero-bg.png') lightgray 50% 50% / cover no-repeat;
}
.inner{
    justify-content: space-between;
}
.hero-btn-wrap{
    display: flex;
    width: 50rem;
    align-items: center;
    gap: var(--space-12);
}

@media screen and (max-width:1400px) {
    .inner{
        padding-left: 2dvw;
        padding-right: 2dvw;
    }
}
</style>
<template>
    <section class="sct mainVisualSct">
        <div class="inner">
            <article class="hero-top">
                <aside class="hero-left">
                    <div class="hero-txt-wrap">
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
                    </div>
                </aside>
                <aside class="hero-right">
                    <div class="now">
                        <small>
                            NOW · 소프트보울 재직 중
                        </small>
                        <p>
                            [경력 N년+]
                        </p>
                    </div>
                </aside>
            </article>
        </div>
        <article class="hero-article">
            <figure class="hero-bg">
                <img src="/main/hero-bg.png" alt="배경">
            </figure>
            <div class="hero-bgtit">
                ORIFLYING
            </div>
            <figure class="hero-fg">
                <img src="/main/hero-fg.png" alt="산">
            </figure>
            <figure class="hero-duck">
                <img src="/main/hero-duck.png" alt="오리">
            </figure>
        </article>
    </section> 
</template>
<script>
</script>
<style scoped>
.mainVisualSct{
    display: flex;
    margin-left: 1.5dvw;
    margin-right: 1.5dvw;
    aspect-ratio: 1880 / 1015;
    container-type: inline-size;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-0);
    position: relative;
    overflow:clip;
    border-radius: 3.2rem;
}
.inner{
    display: grid;
    grid-template-columns: 1fr;
    height: 70%;
}
.hero-top{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    z-index: 1;
}
.hero-left{
    flex: 1;
    row-gap: 2rem;
}
.hero-txt-wrap{
    display: flex;
    flex-direction: column;
    row-gap: 1.2rem;
}
.hero-small{
    color: var(--ink);
    /* ORI v2/caption */
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 1.1375rem */
    letter-spacing: 0.0325rem;
    text-transform: uppercase;
}
.hero-title{
    color: var(--ink);
    font-size: 2.3em;
    font-style: normal;
    font-weight: 500;
    line-height: 135%; /* 3.0375rem */
}
.hero-btn-wrap{
    display: flex;
    width: 50rem;
    align-items: center;
    gap: var(--space-12);
}

.hero-right{
    flex:1;
    display: flex;
    justify-content: end;
}
.hero-right .now{
    display: flex;
    max-width: 32rem;
    height: max-content;
    padding: var(--space-16) var(--space-20);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-8);
    border-radius: var(--radius-card);
    border: 1px solid var(--surface);
    background: var(--surface);
    backdrop-filter: blur(6px);
}

.hero-article{
    width: 100%;
    height: 100%;
    position: absolute;
    clip-path: border-box;
}

.hero-article img{
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 100%;
}


.hero-bgtit{
    color: rgba(42, 121, 208, 0.50);
    /* ORI v2/hero-display-fitted */
    -webkit-text-stroke-color: #FFF;
    font-family: Inter;
    font-size: 17.4cqi;          /* 245pt ≈ 326px ÷ 1880 */
    -webkit-text-stroke-width: 0.2cqi;
    white-space: nowrap;
    font-style: normal;
    font-weight: 800;
    line-height: 85%; /* 16.7875rem */
    letter-spacing: -3%;
    position: absolute;
    left: 50%;
    bottom: 17%;
    transform: translateX(-50%);
}

@media screen and (max-width:1400px) {
    .inner{
        padding-left: 2dvw;
        padding-right: 2dvw;
    }
}
@media screen and (max-width:768px) {
    .hero-title{
        font-size: 1.5em;
    }
    .hero-top{
        flex-direction: column;
        row-gap: 1em;
    }

}
@media screen and (max-width:650px) {
    .mainVisualSct{
        aspect-ratio: 1880 / 1500;
    }
    .hero-right .now{
        max-width: none;
        width: 100%;
        background: rgba(255, 255, 255, 0.5);
    }

}

@media screen and (max-width:550px){
    .inner{
        height: 100%;
        margin: 0;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }
    .hero-top{width: 100%;}
    .hero-left{width: 100%;}
}
</style>
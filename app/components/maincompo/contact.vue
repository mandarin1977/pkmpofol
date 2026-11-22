<template>
    <section class="sct contactsct">
        <div class="inner">
            <article class="card">
                <aside class="bannerTit">
                    <p>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                                <path d="M4.33 0V10M0 2.5L8.66 7.5M0 7.5L8.66 2.5" stroke="#111111"/>
                            </svg>
                        </i>
                        <span>START A CONVERSATION</span>
                    </p>
                    <h3>
                        Let's fly<br>
                        together.
                    </h3>
                </aside>
                <ul class="contact-bottom">
                    <li class="contact-input">
                        <div class="inputwr">
                            <input type="text">
                            <label for=""></label>
                        </div>
                        <button class="btn-style1 inputsbmint">
                            <span>메일 보내기</span>
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                                    <path d="M0.533203 4.53345H9.86654M5.86654 8.53345L9.86654 4.53345L5.86654 0.533447" stroke-width="1.06667" stroke-linecap="round" stroke-linejoin="round" stroke="#111111"/>
                                </svg>
                            </i>
                        </button>
                    </li>
                    <li>
                        <NuxtLink to="/" class="btn-style2">github Link</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="btn-style2">이력서 PDF</NuxtLink>
                    </li>
                </ul>
            </article>
        </div>
    </section>
</template>
<script setup>
</script>
<style scoped>
.contactsct{
    margin-left: 1.5dvw;
    margin-right: 1.5dvw;
    padding-top: 2dvw;
    padding-bottom: 2dvw;
    background: url('/main/contact-photo.png') lightgray 50% / 100% 100% no-repeat;
    border-radius: var(--radius-section);
}
.card{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.bannerTit{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-32);
}
.bannerTit h3{
    color: var(--ink);
    font-size: var(--type-contact-display);
    font-style: normal;
    font-weight: 600;
    line-height: 85%; /* 15.0875rem */
    letter-spacing: -0.8875rem;    
}
.contact-bottom{
    display: flex;
    flex-wrap: wrap;
    padding-top: 6rem;
}
.contact-bottom .contact-input{
    position: relative;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    padding: 1rem .5rem;
    border-radius: 3rem;
}
.contact-bottom .contact-input .inputwr{
    width: calc(100% - 150px);
    height: 100%;
}
.contact-bottom .contact-input .inputwr input{
    width: 100%;
    height: 100%;
    padding-left: 1rem;
    border-radius: 3rem;
}
.contact-bottom li:nth-child(2){
    margin-left: auto;
    margin-right: 1rem;
}
</style>
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
                <ul>
                    <li>
                        <input type="text">
                        <label for=""></label>
                        <button class="btn-style1">
                            <span>메일 보내기</span>
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                                    <path d="M0.533203 4.53345H9.86654M5.86654 8.53345L9.86654 4.53345L5.86654 0.533447" stroke-width="1.06667" stroke-linecap="round" stroke-linejoin="round" stroke="#111111"/>
                                </svg>
                            </i>
                        </button>
                    </li>
                    <li>
                        <NumxtLink to="">github Link</NumxtLink>
                    </li>
                    <li>
                        <NumxtLink to="">이력서 PDF</NumxtLink>
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
    background: blanchedalmond;
    border-radius: var(--radius-section);
}
.card{
    display: flex;
    flex-direction: column;
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
</style>
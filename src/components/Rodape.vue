<template>
    <footer class="rodape paragrafo">
        Desenvolvido por Eduardo Rodrigues | 2024
        <a href="https://github.com/EduardoPSRodrigues" target="_blank">
            <img src="/public/imagens/redesSociais/github.png" alt="GitHub" class="rodape paragrafo">
        </a>
        <a href="https://www.linkedin.com/in/eduardo-rodrigues-a1a0792a4/" target="_blank">
            <img src="/public/imagens/redesSociais/linkedin.png" alt="LinkedIn" class="rodape paragrafo">
        </a>
    </footer>
</template>

<style scoped>
.rodape {
    background: var(--verde-escuro, #263A29);
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 1300px) {
    .rodape {
        padding: 1.5rem 3.75rem;
    }
}

@media only screen and (max-width: 767px) {
    .rodape {
        padding: 1.5rem;
    }
}
</style>
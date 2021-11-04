<template>
     <footer class="footer">
        <p>&copy; 2021 Clayton Garcia & Andre Gustavo, Br.</p>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    .footer {
    font: normal;
    font-family: 'Comfortaa', cursive;
    font-size: 0.6rem;
    display: flex;
    justify-content: center;
    text-align: center;
    position: fixed;
    bottom: 0px;
    color: var(--color8);
    width: 100%;
}

@media screen and (max-width: 800px) {
    .footer {
        font-size: 0.4rem;
        display: flex;
        justify-content: center;
        text-align: center;
        position: sticky;
        bottom: 0px;
        color: var(--color8);
        width: 100%;
    }
}

</style>

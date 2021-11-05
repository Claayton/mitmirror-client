<template>
    <header id="header-main">
        <div id="header-container">
            <h1 id="logo">
                <router-link to="/">MitMirroR</router-link>
            </h1>
            <div class="navbar-main">
                <ul>
                    <li>
                        <router-link to="/profile">Profile</router-link>
                    </li>
                    <li>
                        <router-link to="/register">Register</router-link>
                    </li>
                    <li>
                        <router-link to="/about">About</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>

export default {
   name: "Navbar",
}
</script>

<style scoped>
    #header-main {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: sticky;
        top:0;
        background-color: #171718;
        width: 100%;
        height: 50px;
    }

    #header-container {
        display: flex;
        width: 100%;
        }

    #header-container #logo a {
        font-family: 'Fjalla One', sans-serif;
        text-decoration: none;
        color: var(--color4);
        text-shadow: 1px 1px 1px #000;
        text-align: flex-start;
        font-size: 1.8rem;
        padding: 5px;
        user-select: none;
    }

    #header-container .navbar-main ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        padding: 15px 5px;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 2);
    }

    #header-container .navbar-main ul li {
        display: inline;
    }

    #header-container .navbar-main > ul li a {
        color: var(--color8);
        padding: 14px 10px;
        text-decoration: none;
        font-weight: bold;
        transition: all 300ms ease; /*Tempinho de transição quando passa o mouse no link (animação)*/
    }

    #header-container .navbar-main ul li a:hover {
        background-color: transparent;
        color: var(--color4);
    }
</style>

<template>
    <div class="column">
        <ImageProfile />
        <h2>{{ userName }}</h2>
        <h4>@{{ userUserName }}</h4>
        <h5>5/10</h5>
        <div class="btn-container">
            <button class="btn" @click="ActionSignOut">Disconect</button>
        </div>
    </div>
</template>

<script>

import ImageProfile from './ImageProfile.vue'
import { mapState, mapActions } from 'vuex'

export default {
    name: "ColumnProfile",
    components: {
        ImageProfile
    },
    computed: {
        ...mapState({
            userName: state => state.auth.user.name,
            userUserName: state => state.auth.user.username,
        })
    },
    methods: {
        ...mapActions('auth', ['ActionSignOut'])
    },
    mounted() {
        console.log(this.userUsername)
    }
}

</script>

<style scoped>
    .column {
        background: var(--color7);
        width: 100%;
        height: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        color: white;
    }

    .btn-container {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .btn {
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        height: 50px;
        border-radius: 5px;
        margin: 1rem 0 0.5rem 0;
        font-size: 1.2rem;
        font-weight: bolder;
        outline: none;
        border: none;
        background-image: linear-gradient(to right,var(--color2), var(--color5));
        cursor: pointer;
        color: #eee;
        text-transform: uppercase;
        font-family: 'Comfortaa', cursive;
        background-size: 200%;
        transition: .5s;
    }

    .btn:hover {
        background-image: linear-gradient(to right,var(--color2), var(--color5), var(--color5));
        color: #fff;
    }

</style>

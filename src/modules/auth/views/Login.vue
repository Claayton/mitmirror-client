<template>

    <div class="login">
        <div class="login-container">
            <div class="img">
                <img src="/img/mirror.png" alt="MitMirror-Logo">
            </div>
            <LoginForm />
        </div>
    </div>

</template>

<script>

import LoginForm from '../components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style scoped>

.login-container {
    height: 90vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.img {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.img img {
    width: 420px;
    user-select: none;
}

@media screen and (max-width: 1000px) {
    .img img {
        width: 400px;
    }
}

@media screen and (max-width: 800px) {
    .img {
        display: none;
    }

    .login-container {
        display: flex;
        justify-content: center;
        width: 97vw;
        height: 89vh;
        grid-template-columns: 1fr;
    }
}

</style>

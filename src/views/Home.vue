<template>
  <div class="home">
    <div class="home-container">
      <div class="img">
        <img src="/img/mirror.png" alt="MitMirror-Logo">
      </div>
      <LoginForm />
    </div>
  </div>
</template>

<script>

import LoginForm from '../components/home/LoginForm.vue'

export default {
  name: 'Home',
  components: {
    LoginForm
  }
}

</script>

<style scoped>

  .home-container {
    width: 100vw;
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

    .home-container {
        width: 97vw;
        height: 89vh;
        grid-template-columns: 1fr;
    }
  }

</style>

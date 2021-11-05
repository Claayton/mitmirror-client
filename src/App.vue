<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>

// import {  mapState } from 'vuex'

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  // computed: {
  //   ...mapState({
  //     user: state => state.userData
  //   })
  // },
}
</script>

<style>
  @charset 'UTF8';
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Staatliches&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

:root {
    --color1: #5021FA;
    --color2: #1D27DE;
    --color3: #2B6CF5;
    --color4: #1D8DDE;
    --color5: #21D8FA;
    --color6: #292a2d;
    --color7: #101011;
    --color8: #eee;
}

* {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
}

body {
    font-family: 'Poppins', sans-serif;
    background: var(--color6);
    width: 100%;
    height: auto;
}
</style>

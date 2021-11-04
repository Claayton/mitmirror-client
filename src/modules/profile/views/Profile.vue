<template>
  <div v-if="isActive" class="profile">
    <div class="column-container">
      <ColumnProfile class="column-profile" />
    </div>
    <div class="column-main-container">
      <ColumnMain class="column-main"/>
    </div>
    <div class="column-container">
      <ColumnAdd class="column-add"/>
    </div>
  </div>
  <div v-else>
    <p style="color: white;">
      Faça login ou cadastre-se para acessar a página de perfil!
      <button>
        <router-link to="/">MitMirroR</router-link>
      </button>
    </p>
    
  </div>
</template>


<script>

import ColumnProfile from '../components/ColumnProfile.vue'
import ColumnMain from '../components/ColumnMain.vue'
import ColumnAdd from '../components/ColumnAdd.vue'
import { mapState } from 'vuex'

export default {
  name: "Profile",
  components: {
    ColumnProfile,
    ColumnMain,
    ColumnAdd
  },
  computed: {
    ...mapState({
      isActive: state => state.isActive
    })
  },
  methods: {
  },
}
</script>

<style scoped>

  .profile {
    width: 100%;
    height: 90vh;
    display: flex;
    align-content: center;
    justify-content: space-between;
  }

  .column-container {
    height: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .column-profile, .column-add {
    width: 230px;
    height: 89vh;
    border-radius: 12px;
  }

  .column-main-container {
    width: 90%;
    height: auto;
    padding: 10px;
    display: flex;
  }

  .column-main {
    width: 100%;
    height: 89vh;
    border-radius: 12px;
  }

  h2 {
    color: white;
  }

</style>

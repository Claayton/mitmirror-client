<template>
  <div class="register">
    <RegisterForm />
  </div>
</template>

<script>

import RegisterForm from '../components/RegisterForm.vue'

export default {
  name: "Register",
  components: {
    RegisterForm
  },
  methods: {
    focusFunc: function(classFocus) {
            let inputFocus = document.querySelector(classFocus);
            inputFocus.classList.add('focus');
        },
        blurFunc: function(classFocus, idInput){
            let inputFocus = document.querySelector(classFocus);
            let inputBlur = document.querySelector(idInput);
            if (inputBlur.value == '') {
            inputFocus.classList.remove('focus');
            }
        },
  }
}
</script>

<style scoped>
  .register {
    height: 90vh;
  }
</style>

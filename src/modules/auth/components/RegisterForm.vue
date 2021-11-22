<template>
  <div class="register-container">
    <form id="register-form" name="sign-in">
      <h1>register</h1>
      <div class="notfound-container">
        <p id="notfound">incorrect credentials!</p>
      </div>
      <div class="input-name-container">
        <div class="input-first-name">
          <div id="label">
            <label for="first-name">FirstName</label>
            <input @focus="focusFunc('.input-first-name')" @blur="blurFunc(' .input-first-name', '#first-name')" type="text" class="first-name" id="first-name" autocomplete="off" >
          </div>
        </div>
        <div class="input-last-name">
          <label for="last-name">LastName</label>
          <input @focus="focusFunc('.input-last-name')" @blur="blurFunc('.input-last-name', '#last-name')" autocomplete="off" type="text" class="last-name" id="last-name">
        </div>
      </div>
      <div class="input-div one">
        <label for="username">Username</label>
        <input @focus="focusFunc('.one')" @blur="blurFunc('.one', '#username')" type="text" class="username" id="username" autocomplete="off">
      </div>
      <div class="input-div two">
        <label for="email">Email</label>
        <input @focus="focusFunc('.two')" @blur="blurFunc('.two', '#email')" type="email" class="email" id="email" autocomplete="off">
      </div>
      <div class="input-div three">
        <label for="password">Password</label>
        <input @focus="focusFunc('.three')" @blur="blurFunc('.three', '#password')" type="password" class="password" id="password" autocomplete="off">
      </div>
      <div class="input-div four">
        <label for="confirm-password">Confirm Password</label>
        <input @focus="focusFunc('.four')" @blur="blurFunc('.four', '#confirm-password')" type="password" class="confirm-password" id="confirm-password" autocomplete="off">
      </div>
      <input type="submit" class="btn" value="sign in">
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
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
  
  .register-container {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  form {
    box-sizing: content-box;
    width: 60%;
    padding: 20px 30px;
    border-radius: 10px;
    background-color: #4041449b;
  }

  h1 {
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Comfortaa', cursive;
    color: #999;
    margin-top: 20px;
  }

  .notfound-container {
    display: flex;
    justify-content: center;
    position: relative;
    padding: 20px;
  }

  form #notfound {
    color: rgba(238, 238, 238, 0.582);
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    display: none;
    position: absolute;
    top: 0;

    background: hsla(0, 100%, 50%, 0.294)0000;
    border-radius: 5px;
    transition: .3s;
    padding: 0 40px;
  }

  form label {
    cursor: text;
    font-size: 1.3rem;
    font-family: 'Comfortaa', cursive;
    text-align: start;
    width: 100%;
    margin: 6px;
    position: absolute;
    left: 0;
    top: 20%;
    color: #999;
    transition: .3s;
    user-select: none;
  }

  input {
    background: transparent;
    border: transparent;
    width: 100%;
    padding-left: 10px;
    margin-top: 10px;
    font-size: 1.5rem;
    color: #eee;
  }

  input:focus {
    outline: none
  }

  .input-name-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .input-first-name,
  .input-last-name,
  .input-div {
    position: relative;
    margin: 10px;
    border-bottom: 1px solid #eee;
    transition: .3s;
  }

  .input-first-name:after,
  .input-last-name:after,
  .input-first-name:before,
  .input-last-name:before,
  .input-div:after,
  .input-div:before {
    content: '';
    position: absolute;
    bottom: 0px;
    width: 0;
    height: 1px;
    background-color: var(--color4);
    transition: .3s;
  }

  .input-first-name:after,
  .input-last-name:after,
  .input-div:after {
    right: 50%;
  }

  .input-first-name:before,
  .input-last-name:before,
  .input-div:before {
    left: 50%;
  }

  .input-first-name.focus,
  .input-last-name.focus,
  .input-div.focus {
    border-bottom: 1px solid transparent;
  }

  .input-first-name.focus label,
  .input-last-name.focus label,
  .input-div.focus label {
    top: 0px;
    left: 0px;
    font-size: 13px;
    transform: translateY(-9px);
  }

  .input-first-name.focus:after,
  .input-last-name.focus:after,
  .input-first-name.focus:before,
  .input-last-name.focus:before,
  .input-div.focus:after,
  .input-div.focus:before {
    width: 50%;
  }

  .input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: none;
    outline: none;
    background: none;
    padding: 0.5rem 0.7rem;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #eee;
  }

  .btn {
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

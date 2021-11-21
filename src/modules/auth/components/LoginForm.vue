<template>
    <div class="login-container">
        <form action="#" id="loginForm" name="sign-up"  @submit="validateForm">
            <img class="avatar" src="img/profile.svg" alt="">
            <div class="notfound-container">
                <p id="notfound">incorrect credentials!</p>
            </div>
            <div class="input-div one">
                <div class="i">
                    <IconEmail />
                </div>
                <div id="label">
                    <h5>Email</h5>
                    <input @focus="focusFunc('.one')" @blur="blurFunc('.one', '#email')" type="email" class="input" id="email" autocomplete="off" v-model="form.email">
                </div>
            </div>
            <div class="input-div two">
                <div class="i">
                    <IconPassword />
                </div>
                <div id="label">
                    <h5>Password</h5>
                    <input @focus="focusFunc('.two')" @blur="blurFunc('.two', '#password')" type="password" class="input" id="password" v-model="form.password">
                </div>
            </div>
            <div class="link check">
                <div class="checkbox">
                    <input type="checkbox" v-model="form.keepSigned"><strong> Keep me signed in</strong>
                </div>
                <router-link to="/login/forgetpassword">Forgot Password?</router-link>
            </div>
            <input type="submit" class="btn" value="sign in">
            <div class="loading">
                <img id="loading" src="img/loading.gif" alt="">
            </div>
            <div class="link register">
                <router-link to="/register">Create an account!</router-link>
            </div>                    
        </form>
    </div>
</template>

<script>

// import axios from 'axios';
import IconEmail from './icons/IconEmail.vue'
import IconPassword from './icons/IconPassword.vue'
import { mapActions } from 'vuex'

export default {
    name: "LoginForm",
    data() {
        return {
            form: {
                email: '',
                password: '',
                keepSigned: false
            }
        }
    },
    // computed: {
    //     isActiveUser() {
    //         return this.$store.state.isActive
    //     },
    // },
    components: {
        IconEmail,
        IconPassword
    },
    methods: {
        ...mapActions('auth', ['ActionDoLogin']),

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

        validateForm(e) {

            e.preventDefault();

            const emailInput = document.querySelector('#email');
            const passwordInput = document.querySelector('#password');
           
            const icons = document.querySelectorAll('.i svg');
            const labels = document.querySelectorAll('h5');
            const register = document.querySelector('#notfound')

            if (this.email == '' && this.password == '') {
                    
                console.log(`ta serto ${this.email}, ${this.password}`)
                emailInput.blur()
                register.style = 'display: block;'
                register.textContent = 'please, fill out the fields!'
                icons.forEach (icon => {
                    icon.style = 'color: hsla(0, 100%, 50%, 0.294);';
                })
                labels.forEach (label => {
                    label.style = 'color: hsla(0, 100%, 50%, 0.294);';
                })
                setTimeout(() => {
                    emailInput.focus()
                    icons.forEach (icon => {
                        icon.style = 'color: #bbbbbb;';
                    })
                    labels.forEach (label => {
                        label.style = 'color: #eee;';
                    })
                }, 500);
                setTimeout(() => {
                    register.style = 'display: none;'
                    register.textContent = 'incorrect credentials!'
                }, 4000);
            } else if (this.email == '' ) {
                console.log(`ta serto ${this.email}, ${this.password}`)
                emailInput.blur()
                register.style = 'display: block;'
                register.textContent = 'please, fill out the fields!'
                icons[0].style = 'color: hsla(0, 100%, 50%, 0.294);';
                labels[0].style = 'color: hsla(0, 100%, 50%, 0.294);';

                setTimeout(() => {
                    emailInput.focus()
                    icons[0].style = 'color: #bbbbbb;';
                    labels[0].style = 'color: #eee;';
                }, 500);
                setTimeout(() => {
                    register.style = 'display: none;'
                    register.textContent = 'incorrect credentials!'
                }, 4000);
            } else if (this.password == '') {
                console.log(`ta serto ${this.email}, ${this.password}`)
                passwordInput.blur()
                register.style = 'display: block;'
                register.textContent = 'please, fill out the fields!'
                icons[1].style = 'color: hsla(0, 100%, 50%, 0.294);';
                labels[1].style = 'color: hsla(0, 100%, 50%, 0.294);';

                setTimeout(() => {
                    passwordInput.focus()
                    icons[1].style = 'color: #bbbbbb;';
                    labels[1].style = 'color: #eee;';
                }, 500);
                setTimeout(() => {
                    register.style = 'display: none;'
                    register.textContent = 'incorrect credentials!'
                }, 4000);
            } else {
                this.submitForm()
            }
        },
        async submitForm() {

            const loading = document.querySelector('.loading');
            const icons = document.querySelectorAll('.i svg');
            const labels = document.querySelectorAll('h5');
            const register = document.querySelector('#notfound')
            const emailInput = document.querySelector('#email');
            const passwordInput = document.querySelector('#password');

            loading.style.display = "flex";

            try{

                await this.ActionDoLogin(this.form)
                this.$router.push({ name: 'profile' })
                loading.style.display = "none"

            } catch (error) {

                console.log(`Erro no LoginForm: ${error}`)
                if (error == 'Error: Request failed with status code 403' ||
                error == 'Error: Request failed with status code 401') {
                    this.form.email = ''
                    this.form.password = ''
                    icons.forEach (icon => {
                        icon.style = 'color: hsla(0, 100%, 50%, 0.294);';
                    });
                    labels.forEach (label => {
                        label.style = 'color: hsla(0, 100%, 50%, 0.294);';
                    });
                    loading.style.display = "none"
                    register.style.display = "block"
                    setTimeout(() => {
                        icons.forEach (icon => {
                            icon.style = 'color: #bbbbbb;';
                        })
                        labels.forEach (label => {
                            label.style = 'color: #eee;';
                        })                
                        passwordInput.focus()
                        passwordInput.blur()
                        emailInput.focus()
                    }, 500);
                    setTimeout(() => {
                        register.style.display = "none"
                    }, 4000);
                } else if (error == 'Error: Request failed with status code 500') {
                    this.submitForm()
                }
            }
        }
    }
}

</script>

<style scoped>

    .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    form {
        box-sizing: content-box;
        width: 360px;
        padding: 20px 30px;
        border-radius: 10px;
        background-color: #4041449b;
    }

    .avatar {
        width:100px;
        user-select: none;
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

    form h5 {
        font-size: 2.9rem;
        color: #eee;
        font-family: 'Comfortaa', cursive;
        margin: 4px;
    }

    .input-div {
        position: relative;
        display: grid;
        grid-template-columns: 7% 93%;
        margin: 25px 0;
        padding: 1px 0;
        border-bottom: 2px solid #eee;
    }

    .input-div:after .input-div:before {
        content: '';
        position: absolute;
        bottom: -2px;
        width: 0;
        height: 2px;
        background-color: #1D27DE;
        transition: .3s;
    }

    .input-dev:after {
        right: 50%;
    }

    .input-dev:before {
        left: 50%;
    }

    .input-div.focus .i svg {
        color: var(--color4);
    }

    .input-div.focus div h5 {
        top: 0px;
        font-size: 13px;
        transform: translateY(-9px);
    }

    .input-div.focus:after, .input-div.focus:before {
        width: 50%;
    }

    .input-div.one {
        margin-top: 0;
    }

    .input-div.two {
        margin-bottom: 4px;
    }

    .i {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .i svg {
        color: #bbbbbb;
        transition: .3s;
    }

    .input-div > div {
        position: relative;
        height: 45px;
    }

    .input-div > div h5 {
        position: absolute;
        left: 10px;
        top: 20%;

        color: #999;
        font-size: 20px;
        transition: .3s;
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

    .link {
        display: flex;
        justify-content: space-between;
    }

    .check {
        font-family: 'Comfortaa', cursive;
        color: #999;
        font-size: 0.9rem;
        transition: .3s;
        margin-top: 10px;
    }

    a {
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        color: #999;
        font-size: 0.9rem;
        transition: .3s;
        margin-top: -5px;
    }

    a:hover {
        color: var(--color4);
    }

    .btn {
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

    .loading {
        height: auto;
        display: none;
        justify-content: center;
        align-items: flex-start
    }

    #loading {
        margin-top: 25px;
        position: absolute;
        width:100px;
        user-select: none;
        display: block;
    }

    .register {
        justify-content: center;
        padding-top: 5px;
    }

    @media screen and (max-width: 1000px) {

        form {
            width: 290px;
        }

        form h2 {
            font-size: 2.4rem;
            margin: 8px 0;
        }

        a, .check {
            font-size: 0.8rem;
        }

        form #notfound {
            font-size: 0.8rem;
        }
    }

    @media screen and (max-width: 800px) {

        .login-container {
            justify-content: center;
        }

        form #notfound {
            font-size: 0.8rem;
        }
    }
</style>
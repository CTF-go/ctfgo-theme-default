<template>
    <div class="auth-container">
        <Navbar />
        <div class="auth-form">
            <div class="auth-box-header">
                <h1>Sign in to CTFgo</h1>
            </div>
            <div class="auth-box">
                <vs-input v-model="authForm.username" label-placeholder="Username or email address">
                </vs-input>
                <vs-input v-model="authForm.password" label-placeholder="Password" type="password">
                </vs-input>
                <div class="flex">
                    <vs-checkbox v-model="remember">Remember me</vs-checkbox>
                    <vs-button @click="routerTo('forgotpassword')" transparent :active="active == 0">Forgot Password?</vs-button>
                </div>
                <div class="auth-box-footer">
                    <vs-button block>Sign In</vs-button>

                    <vs-button @click="routerTo('signup')" size="small" transparent :active="active == 0">New Here? Create New Account</vs-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    name: 'Signin',
    components: {
        Navbar
    },
    data:() => ({
        authForm: {
            username: '',
            password: ''
        },
        remember:'',
        hasVisiblePassword: false

    }),
      methods: {
          routerTo(target){
            if(target=='forgotpassword' && this.$router.history.current.path!=='/forgotpassword'){
                this.$router.push('/forgotpassword')
            }
            else if(target=='signup' && this.$router.history.current.path!=='/signup'){
                this.$router.push('/signup')
            }
            else if(target=='home' && this.$router.history.current.path!=='/'){
                this.$router.push('/')
            }
        }
      }

    }
</script>


<style lang="scss">
.flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        font-size: .8rem;
        opacity: .7;
    };
    .vs-checkbox-label{
        font-size: .8rem;
    }
}
.auth-box-footer{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width:100%;
    .vs-button{
        margin: 5px;
    }
}
.auth-box .vs-input{
    margin-top: 6px;
}
.vs-input-content{
    margin: 10px;
}
.vs-input-content label{
    font-size: 2px;
    color: #8c8c8c;
}
.vs-input-content input{
    width: 100%;
}
.auth-container{
    background-color:#FAFAFA;
    height: 100%;
    width: 100%;
}
.auth-form{
    width: 400px;
    max-width: 90%;
    max-height: 90%;
    margin: 0 auto;

    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
}
.auth-box-header{
    width: 100% auto;
    color: var(--color-text-primary);
    text-align: center;
    text-shadow: none;
    padding: 6px;
    background-color: initial;
}
.auth-box-header h1 {
    font-size: 24px;
    font-weight: 300;
    letter-spacing: -.5px;
}
.auth-box{
    background-color: #FFFFFF;
    width: 100% auto;
    max-width: 100%;
    padding: 12px;
    border-radius:5px;
    box-shadow:#8c8c8c;
}
</style>
<template>
    <div class="center examplex">
      <vs-navbar color="#24292e" text-white square center-collapsed v-model="active">
        <template #left>
          <img src="../assets/logo.png" alt="">
        </template>
        <vs-navbar-item @click="pushRouter('Home')" :active="active == 'Home'" id="Home">
          Home
        </vs-navbar-item>
        <vs-navbar-item @click="pushRouter('Users')" :active="active == 'Users'" id="Users">
          Users
        </vs-navbar-item>
        <vs-navbar-item @click="pushRouter('ScoreBoard')" :active="active == 'ScoreBoard'" id="ScoreBoard">
          ScoreBoard
        </vs-navbar-item>
        <vs-navbar-item @click="pushRouter('Challenges')" :active="active == 'Challenges'" id="Challenges">
          Challenges
        </vs-navbar-item>
        <template #right>
          <vs-button @click="SigninActive=!SigninActive" color="#fff" border>Login</vs-button>
        </template>
      </vs-navbar>
          <div class="center">
            <vs-dialog blur v-model="SigninActive">
                <template #header>
                    <h4 class="not-margin">
                        Welcome to <b>CTFgo</b>
                    </h4>
                </template>

                <div class="con-form">
                <vs-input v-model="email" placeholder="Email"></vs-input>
                <vs-input type="password" v-model="password" placeholder="Password"></vs-input>
                <div class="flex">
                    <vs-checkbox v-model="remember">Remember me</vs-checkbox>
                    <vs-button transparent :active="SignupActive == 1" @click="SignupActive = 1">
                        Forgot Password?
                    </vs-button>
                </div>
                </div>

                <template #footer>
                <div class="footer-dialog">
                    <vs-button block>
                        Sign In
                    </vs-button>
                    <div class="new">
                        <vs-button transparent :active="SignupActive == 1" @click="SignupActive = 1">
                            New Here? Create New Account
                        </vs-button>
                    </div>
                </div>
                </template>
            </vs-dialog>
        </div>
    </div>
  </template>
<script>

export default {
    name: 'Navbar',
    data:() => ({
        signinForm: {
            username: '',
            password: ''
        },
        signupForm: {
            username: '',
            usermail: '',
            authcode: '',
            password: '',
            checkPassword: '',
        },
        active: 'Home',
        SigninActive: false,
        rememberme: false,
    }),
    methods: {
        pushRouter(adress){
            if(adress=='Home'){
                this.$router.push('/home')
            }else if(adress=='Notifications'){
                this.$router.push('/notifications')
            }else if(adress=='Users'){
                this.$router.push('/users')
            }else if(adress=='ScoreBoard'){
                this.$router.push('/scoreboard')
            }else if(adress=='Challenges'){
                this.$router.push('/challenges')
            }
        }
    }
}
</script>

<style scoped>
.vs-navbar img{
    height: 25px;
}
</style>

<style lang="stylus">
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
    .con-form
      width 100%
      .flex
        display flex
        align-items center
        justify-content space-between
        a
          font-size .8rem
          opacity .7
          &:hover
            opacity 1
      .vs-checkbox-label
        font-size .8rem
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
</style>

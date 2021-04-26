<template>
    <div class="center examplex">
      <vs-navbar color="#24292e" text-white square center-collapsed v-model="active">
        <template #left>
          <img src="../assets/logo.png" alt="">
        </template>
        <vs-navbar-item @click="pushRouter('Home')" :active="active == '/home'" id="/home">
          Home
        </vs-navbar-item>
        <vs-navbar-item @click="pushRouter('Notices')" :active="active == '/notices'" id="/notices">
          Notices
        </vs-navbar-item>
        <vs-navbar-item @click="pushRouter('Users')" :active="active == '/users'" id="/users">
          Users
        </vs-navbar-item>
        <vs-navbar-item @click="pushRouter('ScoreBoard')" :active="active == '/scoreboard'" id="/scoreboard">
          ScoreBoard
        </vs-navbar-item>
        <vs-navbar-item @click="pushRouter('Challenges')" :active="active == '/challenges'" id="/challenges">
          Challenges
        </vs-navbar-item>


        <template #right>
            <div v-if="username!==undefined && username!==''">
              <!--  <vs-button color="#fff" flat >Hi, {{ username }}</vs-button>-->
                <menu-dropdown/>

            </div>
            <div v-if="username==undefined || username==''">
                <vs-button @click="signinForm.active =! signinForm.active" color="#fff" border>Login</vs-button>
            </div>
        </template>

      </vs-navbar>
          <div class="center">

            <vs-dialog blur v-model="signinForm.active">
<!-- Sign In Form -->
                <template #header>
                    <h4 class="not-margin">
                        Welcome to <b>CTFgo</b>
                    </h4>
                </template>
                <div class="con-form">
                <vs-input v-model="signinForm.submit.username" placeholder="Username or email address"></vs-input>
                <vs-input v-model="signinForm.submit.password" placeholder="Password" type="password" ></vs-input>
                  <div class="flex">
                      <vs-checkbox v-model="rememberme">Remember me</vs-checkbox>
                      <vs-button transparent :active="forgotForm.active == 1" @click="forgotForm.active =! forgotForm.active">
                          Forgot Password?
                      </vs-button>
                  </div>
                </div>

                <template #footer>
                <div class="footer-dialog">
                    <vs-button @click="signin()" block>
                        Sign In
                    </vs-button>
                    <div class="new">
                        <vs-button transparent :active="signupForm.active == 1" @click="signupForm.active =! signupForm.active">
                            New Here? Create New Account
                        </vs-button>
                    </div>
                </div>
                </template>
<!-- End Sign In Form -->

<!-- Sign Up Form -->
                <vs-dialog blur v-model="signupForm.active">
                  <template #header>
                      <h4 class="not-margin">
                          Create Account to Register
                      </h4>
                  </template>
                  <div class="con-form">
                    <vs-input v-model="signupForm.submit.email" placeholder="Email"></vs-input>
                    <vs-input v-model="signupForm.submit.username" placeholder="Username"></vs-input>
                    <vs-input v-model="signupForm.submit.password" type="password" placeholder="Password"></vs-input>
                  </div>
                  <template #footer>
                    <div class="footer-dialog">
                        <vs-button @click="signup()" block>
                            Sign Up
                        </vs-button>
                    </div>
                  </template>
                </vs-dialog>
<!-- End Sign Up Form -->

<!--  Forgot Password Form -->
                <vs-dialog blur v-model="forgotForm.active">
                  <template #header>
                      <h4 class="not-margin">
                          Find Password
                      </h4>
                  </template>
                  <div class="con-form">
                    <vs-input v-model="forgotForm.email" placeholder="Email"></vs-input>
                    <vs-input type="password" v-model="forgotForm.password" placeholder="Password"></vs-input>
                  </div>
                  <template #footer>
                    <div class="footer-dialog">
                        <vs-button block>
                            Confirm
                        </vs-button>
                    </div>
                  </template>
                </vs-dialog>
<!-- End Forgot Password Form -->

            </vs-dialog>
        </div>
    </div>
  </template>

<script>
import MenuDropdown from "@/components/DropMenu.vue";

export default {
    name: 'Navbar',
    components: {
      MenuDropdown
    },
    data:() => ({
      username: 'admin',
      signinForm: {
        active: false,
        submit:{
          username: '',
          password: ''
        }
      },
      signupForm: {
        active: false,
        authcode: '',
        checkPassword: '',
        submit: {
          email: '',
          username: '',
          password: ''
        }
      },
      forgotForm: {
        active: false,
        usermail: '',
        authcode: '',
        mailcode: ''
      },
      active: '/home',
      rememberme: false
    }),
    methods: {
        pushRouter(adress){
            if(adress=='Home'){
                this.$router.push('/home')
            }else if(adress=='Notices'){
                this.$router.push('/notices')
            }else if(adress=='Users'){
                this.$router.push('/users')
            }else if(adress=='ScoreBoard'){
                this.$router.push('/scoreboard')
            }else if(adress=='Challenges'){
                this.$router.push('/challenges')
            }
        },
        async signin(){
          const {data: result} = await this.$http.post('/login', this.signinForm.submit)
            if (result.code == 200){
              console.log('Success')
              this.openNotification('🥳 Success!', 'Hi, '+result.username+'. Welcome to CTFgo~')
              this.username = result.username
              this.signinForm.active = false
            }else{
              this.openNotification('👎 Login failed!', 'Plese check your <strong>username</strong> or <strong>password</strong>.')
            };
        },
        async signup(){
          const {data: result} = await this.$http.post('/register', this.signupForm.submit)
            if (result.code == 200){
              console.log('注册成功')
            }else{
              console.log('注册失败')
          };
        },
        openNotification(title, text) {
          const noti = this.$vs.notification({
            position: 'top-center',
            title,
            text
          })
        }
    },
    created(){
      this.active = window.location.pathname
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

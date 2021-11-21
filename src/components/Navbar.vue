<template>
    <div class="center examplex">
      <vs-navbar color="#24292e" text-white square center-collapsed v-model="active">
        <template #left><img src="../assets/logo.png" alt=""></template>
        <vs-navbar-item @click="pushRouter('/home')" :active="active == '/home'" id="/home">
          Home
        </vs-navbar-item>
        <vs-navbar-item @click="pushRouter('/notices')" :active="active == '/notices'" id="/notices">
          Notices
        </vs-navbar-item>
        <vs-navbar-item @click="pushRouter('/scoreboard')" :active="active == '/scoreboard'" id="/scoreboard">
          Scoreboard
        </vs-navbar-item>
        <vs-navbar-group>
          Challenges
          <template #items>
            <vs-navbar-item 
              :key="i" :data="category" v-for="(category, i) in challengeCategories"
              @click="pushRouter('/challenges/'+category)"
              :active="subActive == category" id="category"
            >
              {{ category.toUpperCase() }}
            </vs-navbar-item>
          </template>
        </vs-navbar-group>

        <vs-navbar-item v-if="admin" @click="pushRouter('/dashboard')" :active="active == '/dashboard'" id="/dashboard">
          Dashboard
        </vs-navbar-item>

        <template #right>
            <div v-if="username==undefined || username==''">
                <vs-button @click="loginForm.active =! loginForm.active" color="#fff" border>Login</vs-button>
            </div>

            <vs-button v-else @click="showDropMenu()" color="#fff" flat >Hi, {{ username }}</vs-button>
            
            <div class="menu__items">
                <ul v-if="toggleDropMenu">
                  <button @click="pushRouter('/profile')">Profile</button>
                  <!--<button @click="pushRouter('/team')">Team</button>-->
                  <button @click="pushRouter('/settings')">Settings</button>
                  <div role="none" class="dropdown-divider"></div>
                  <button @click="logout()">Log out</button>
                </ul>
            </div>

        </template>

      </vs-navbar>
          <div class="center">

            <vs-dialog blur v-model="loginForm.active">
<!-- Sign In Form -->
                <template #header>
                    <h4 class="not-margin">
                        Welcome to <b>CTFgo</b>
                    </h4>
                </template>
                <div class="con-form">
                <vs-input v-model="loginForm.submit.username" placeholder="Username or email address"></vs-input>
                <vs-input v-model="loginForm.submit.password" placeholder="Password" type="password" ></vs-input>
                  <div class="flex">
                      <vs-checkbox v-model="loginForm.submit.remember">Remember me</vs-checkbox>
                      <vs-button transparent :active="forgotForm.active == 1" @click="forgotForm.active =! forgotForm.active">
                          Forgot Password?
                      </vs-button>
                  </div>
                </div>

                <template #footer>
                <div class="footer-dialog">
                    <vs-button @click="signin()" block>
                        Log In
                    </vs-button>
                    <div class="new">
                        <vs-button transparent :active="signupForm.active == 1" @click="loadSignupForm()">
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
                          Create Account
                      </h4>
                  </template>
                  <div class="con-form">
                    <vs-input v-model="signupForm.submit.email" placeholder="Email">
                        <template v-if="validEmail" #message-success>
                            Email Valid
                        </template>
                        <template v-if="!validEmail && signupForm.submit.email !== ''" #message-danger>
                            Email Invalid
                        </template>
                    </vs-input>
                    <vs-input v-model="signupForm.submit.username" placeholder="Username">
                        <template v-if="this.signupForm.submit.username.length<=10 && signupForm.submit.username !== ''" #message-success>
                            Username Valid
                        </template>
                        <template v-if="this.signupForm.submit.username.length>10 && signupForm.submit.username !== ''" #message-danger>
                            Username is too long
                        </template>
                    </vs-input>
                    <vs-input v-model="signupForm.submit.password" type="password" placeholder="Password">
                        <template v-if="signupForm.submit.password.length<=20 && this.signupForm.submit.password.length>=6" #message-success>
                            Password Valid
                        </template>
                        <template v-if="signupForm.submit.password.length>20 && signupForm.submit.password !== ''" #message-danger>
                            Password is too long
                        </template>
                        <template v-if="signupForm.submit.password.length<6 && signupForm.submit.password !== ''" #message-warn>
                            Password is too short
                        </template>
                    </vs-input>
                    <vs-input v-model="signupForm.checkPassword" type="password" placeholder="Confirm Password">
                        <template v-if="signupForm.checkPassword===signupForm.submit.password && signupForm.checkPassword !== ''" #message-success>
                            Confirm Password Valid
                        </template>
                        <template v-if="signupForm.checkPassword!==signupForm.submit.password && signupForm.checkPassword !== ''" #message-danger>
                            The two passwords are not same
                        </template>
                    </vs-input>
                    <div style="width:300px;">
                        <div style="float:left; width: 160px;" >
                            <vs-input style="width:160px;" v-model="signupForm.submit.solution" placeholder="Captcha">
                            </vs-input>
                        </div>
                      <div class="authcode-img" style="margin-right:0; float:right; width:100px;"><img v-bind:src="signupForm.image" @click="getCaptchaID()" style="width:100px;height:50px;" alt="验证码图片"></div>
                    </div>
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
                  <div><h2>爬，密码都能忘？💩</h2></div>
                  <!--
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
                   -->
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
      challengeCategories:['web', 'pwn', 'reverse', 'crypto', 'misc'],
      username: '',
      toggleDropMenu: false,
      admin: false,
      active: '/home',
      subActive: '',
      loginForm: {
        active: false,
        submit:{
          remember: false,
          username: '',
          password: ''
        }
      },
      signupForm: {
        active: false,
        checkPassword: '',
        image: '',
        submit: {
          email: '',
          captchaid: '',
          solution: '',
          username: '',
          password: '',
        }
      },
      forgotForm: {
        active: false,
        usermail: '',
        authcode: '',
        mailcode: ''
      }
    }),
    computed: {
        validEmail() {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.signupForm.submit.email)
        }
    },
    methods: {
        pushRouter(adress){
          if (adress != window.location.pathname){
            this.$router.push(adress)
          }
        },
        showDropMenu() {
          document.addEventListener('click', this.hideDropMenu)
        },
        hideDropMenu(e) {
          this.toggleDropMenu = !this.toggleDropMenu
          if(!this.toggleDropMenu){
              document.removeEventListener('click', this.hideDropMenu)
          }
        },
        async logout(){
          this.username = ''
          const {data: result} = await this.$http.get('/logout')
          console.log(result.code)
          if(result.code == 200){
            this.openNotification('🥳 退出成功')
          }else{
            this.openNotification('👎 退出失败')
          }
        },
        loadSignupForm(){
          this.signupForm.active =! this.signupForm.active
          this.getCaptchaID()
        },
        async getCaptchaID(){
          const {data: result} = await this.$http.get('/captcha')
          if (result.code == 200){
            this.signupForm.image = 'data:image/png;base64,'+result.data
            this.signupForm.submit.captchaid = result.id
          }
        },
        async signin(){
          console.log(this.loginForm)
            if (this.loginForm.submit.username=='' || this.loginForm.submit.password==''){
                this.openNotification('👎 用户名和密码不能为空')
                return
            }
            const {data: result} = await this.$http.post('/login', this.loginForm.submit)
            if (result.code == 200){
                this.openNotification('🥳 Success!', 'Hi, '+result.username+'. Welcome to CTFgo~')
                this.username = result.username
                this.admin = result.role
                this.loginForm.active = false
            }else{
              this.openNotification('👎 Login failed!', 'Plese check your <strong>username</strong> or <strong>password</strong>.')
            };
        },
        async signup(){
          if (this.signupForm.submit.email == ''){
            this.openNotification('👎 邮箱不能为空')
            return
          }else if(this.signupForm.submit.username == ''){
            this.openNotification('👎 用户名不能为空')
            return
          }else if(this.signupForm.submit.password == ''){
            this.openNotification('👎 密码不能为空')
            return
          }else if(this.signupForm.checkPassword == ''){
            this.openNotification('👎 请输入确认密码')
            return
          }else if(this.signupForm.submit.solution == ''){
            this.openNotification('👎 验证码不能为空')
            return
          }
          const {data: result} = await this.$http.post('/register', this.signupForm.submit)
            if (result.code == 200){
              this.openNotification('🥳 Congratulations～ Registration success!')
            }else if (result.code == 1000){
              this.openNotification('用户名重复')
            }else if (result.code == 1001){
              this.openNotification('邮箱重复')
            }else if (result.code == 1002){
              this.openNotification('验证码错误')
            } else{
              this.openNotification('注册失败')
            };
        },
        openNotification(title, text) {
          const noti = this.$vs.notification({
            position: 'top-center',
            title,
            text
          })
        },
        async isSignedIn() {
          const {data: result} = await this.$http.get('/user/session');
          console.log(result);
        }
    },
    created(){
      this.active = window.location.pathname;
      this.isSignedIn();
    }
}
</script>

<style scoped>
.vs-navbar img{
    height: 25px;
}
.authcode-img{
  height: 40px;
  width: 60px;
  border-radius: 5px;
  border-color: black;
}
.authcode-form{
  display: flex;
  width: 25%;
}
.authcode-form input{
 width: 100px;
}
.dropdown-divider{
  display: block;
  height: 0;
  margin: 8px 0;
  border-top: 1px solid #e1e4e8;
}
.menu__items {
  background: #fff;
  position: absolute;
  right: 10px;
  top: 44px;
  z-index: 2;
}

ul {
  width: 140px;
  list-style-type: none;
  box-sizing: border-box;
  margin: 1px auto;
  text-align: center;
  padding-left: 0;
  z-index: 2;
  box-shadow: 1px 1px 7px gray;
  padding-bottom: 8px;
}
ul button {
  color: #24292E;
  font-size: 14px;
  line-height: 1.5;
  display: block;
  text-overflow: ellipsis;
  padding: 4px 8px 4px 16px;
  width: 100%;
  max-width: 100%;
  border: none;
  background: #fff;
}
ul button:hover{
  font-weight: 600;
  background: #BDBEC0;
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

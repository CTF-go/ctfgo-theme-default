<template>
    <div class="center examplex">
      <vs-navbar color="#24292e" text-white square center-collapsed v-model="active">
        <template #left><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyCAMAAAAuj2TTAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJnUExURQAAAP///////////////////////////////////////////////////////////////+T///b8//////////////////////n///P7/P///////////////////////////////////////////3fU5f////////////////////////////////////////b7//////////////////////////////////////////////////////////////////////////////////////////f//////////////////////////////////////////////////////////////////////////9Xs/G/O52vR6P///////////////////////////////////////////////////////////////////////////////////////////////////6bg6nPN5rbo8P///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2az/3PQ5/L7/HLT5O75/Oz4/Pj8/f////////////////////////////////////////////////n8/fv9//X8/WXM56Lj71PH5/b8/fv9/cDq9PL5/Pb7/W/R5NPv95zh6+r4+/D5/G3a2q7j8tfx+dbx/83r9dvz+fP7/P39//H6/OH1+vz9/9/1+vT7/PP8/Pf8/f///3ZCd6UAAADMdFJOUwDC3fdJA+RoadPh9gT+ltIQAg/r51TK4g3gin6TqeqBGjQSDgEevkSHYC8jrGP9cgfzzHH7CWoGPJ7Rz3xWORubl0tI1donBacfE+lnQfDXTsPBHbUqZM7c3w0QIbkuZbYlWYCkFUM/O3jYHqD0+nk+Fsi6+O4MHxDmpVwYLFCLka4pNrSrbjNbde2MbMax4wtduyFNLaE4WPEDIN8dzMzOX4aPCoTHIPK97DB229vLIB8gz85ixuQnhxqi/gdSvRMah93d0MzczNjP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" alt="LOGO"></template>
        <vs-navbar-item @click="pushRouter('/home')" :active="active == '/home'" id="/home">
          Home
        </vs-navbar-item>
        <vs-navbar-item @click="pushRouter('/notices')" :active="active == '/notices'" id="/notices">
          Notices
        </vs-navbar-item>
        <vs-navbar-item @click="pushRouter('/scoreboard')" :active="active == '/scoreboard'" id="/scoreboard">
          Scoreboard
        </vs-navbar-item>

        <vs-navbar-group v-if="username">
          Challenges
          <template #items>
            <vs-navbar-item 
              :key="i" :data="category" v-for="(category, i) in categories"
              @click="pushRouter('/challenges/'+category)"
              :active="active == category" v-bind:id="category"
            >
              {{ category.toUpperCase() }}
            </vs-navbar-item>
          </template>
        </vs-navbar-group>

        <vs-navbar-item  v-else @click="pushRouter('/challenges/please%20login')" :active="active == '/challenges'" id="/challenges">
          Challenges
        </vs-navbar-item>

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
                  <!--<button @click="pushRouter('/settings')">Settings</button>-->
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
                <vs-input v-model="loginForm.submit.username" placeholder="Team name or email address"></vs-input>
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
                          Create Team
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
                    <vs-input v-model="signupForm.submit.username" placeholder="Team name">
                        <template v-if="this.signupForm.submit.username.length<=10 && signupForm.submit.username !== ''" #message-success>
                            Team name Valid
                        </template>
                        <template v-if="this.signupForm.submit.username.length>10 && signupForm.submit.username !== ''" #message-danger>
                            Team name is too long
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
                          Forgot Password
                      </h4>
                  </template>
                  <div>
                    <h2>密码都能忘？💩（联系管理员修改密码）</h2>
                    <p>QQ1: 912309920; QQ2: 1175078221</p>
                  </div>
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
      categories: ["test"],
      username: '1',
      isStarted: false,
      toggleDropMenu: false,
      admin: false,
      active: '/home',
      loginForm: {
        active: false,
        submit:{ remember: false, username: '', password: ''}
      },
      signupForm: {
        active: false,
        checkPassword: '',
        image: '',
        submit: { email: '', captchaid: '', solution: '', username: '', password: '' }
      },
      forgotForm: {
        active: false,
        submit: { usermail: '', authcode: '', mailcode: '' }
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
            this.$router.push(adress);
            if (adress.indexOf("challenges") != -1){
              this.reloadChallenge();
            }
          }
        },
        reloadChallenge() {
          this.$emit('reloadChallenge');
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
          const {data: result} = await this.$http.get('/user/logout')
          if(result.code == 200){
            this.openNotification('🥳 退出成功')
          }else{
            this.openNotification('😰 退出失败')
          }
        },
        loadSignupForm(){
          this.signupForm.active =! this.signupForm.active
          this.getCaptchaID()
        },
        async getCaptchaID(){
          const {data: result} = await this.$http.get('/captcha')
          if (result.code == 200){
            this.signupForm.image = 'data:image/png;base64,'+result.data.b64;
            this.signupForm.submit.captchaid = result.data.id;
          }
        },
        async signin(){
            if (this.loginForm.submit.username=='' || this.loginForm.submit.password==''){
                this.openNotification('😨 用户名和密码不能为空')
                return
            }
            const {data: result} = await this.$http.post('/login', this.loginForm.submit)

            if (result.code == 200){
                this.openNotification('🥳 Success!', 'Hi, '+result.data.username+'. Welcome to CTFgo~')
                this.username = result.data.username;
                this.admin = result.data.role;
                this.loginForm.active = false;
                this.getCategories();
            }else{
              this.openNotification('😵 Login failed!', 'Plese check your <strong>username</strong> or <strong>password</strong>.')
            };
        },
        async signup(){
          if (this.signupForm.submit.email == ''){
            this.openNotification('👿 邮箱不能为空')
            return
          }else if(this.signupForm.submit.username == ''){
            this.openNotification('👿 用户名不能为空')
            return
          }else if(this.signupForm.submit.password == ''){
            this.openNotification('👿 密码不能为空')
            return
          }else if(this.signupForm.checkPassword == ''){
            this.openNotification('👿 请输入确认密码')
            return
          }else if(this.signupForm.submit.solution == ''){
            this.openNotification('👿 验证码不能为空')
            return
          }
          const {data: result} = await this.$http.post('/register', this.signupForm.submit)
            if (result.code == 200){
              this.openNotification('🥳 Congratulations~ Registration success!')
              this.signupForm.active = false;
            }else if (result.code == 4002){
              this.openNotification('用户名重复')
              this.getCaptchaID()
            }else if (result.code == 4003){
              this.openNotification('邮箱重复')
              this.getCaptchaID()
            }else if (result.code == 4001){
              this.openNotification('验证码错误')
              this.getCaptchaID()
            } else{
              this.openNotification('注册失败')
              this.getCaptchaID()
            };
        },
        openNotification(title, text) {
          const noti = this.$vs.notification({
            position: 'top-center', title, text
          })
        },
        async isSignedIn() {
          const {data: result} = await this.$http.get('/user/session');
          if (result.code == 200){
            this.username = result.data.username;
            this.admin = result.data.role;
            this.getCategories();
          }
        },
        async getCategories() {
          const {data: result} = await this.$http.get('/user/categories');
          if (result.code == 200){this.categories = result.data;}
        },
    },
    mounted(){
      this.active = window.location.pathname;
      this.isSignedIn();
    },
    created(){
      this.active = window.location.pathname;
      if (this.active == "/dashboard" && !this.admin){
        this.pushRouter('/home')
      }
      if ((this.active == "/profile") && (!this.username) ){
        this.pushRouter('/home')
      }
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

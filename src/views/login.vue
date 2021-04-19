<template>
    <div class="login-container">
        <div class="auth-form">
            <div class="login-box-header">
                <h1 class>Sign in to CTFgo</h1>
            </div>
            <div class="login-box">
                <el-form style="padding:0" :model="loginForm" :rules="rules" ref="loginForm">
                    <el-form-item label="Username or email address" prop="username">
                        <el-input v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="Password" prop="password">
                        <el-button type="text" size="mini">Forgot password?</el-button>
                        <el-input v-model="loginForm.password" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="text" class="register-button">Create an account</el-button>
                        <el-button type="primary" @click="submitForm('loginForm')" class="sigin-button" size="smaill" plain>Sign in</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'Login',
    data() {
        var checkUsername = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else {
                callback();
            }
        };
        var checkPassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
      return {
        labelPosition: 'top',
        loginForm: {
          username: 'Leon',
          password: '123456'
        },
        rules: {
          username: [
            { validator: checkUsername, trigger: 'blur' }
          ],
          password: [
            { validator: checkPassword, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    console.log(this.loginForm)
                    const {data: result} = await this.$http.post('/login', this.loginForm)
                    console.log(result)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.login-container .el-form-item {
    text-align: right;
}


.sigin-button{
    position: absolute;
    right: 0;
}
.register-button{
    position: absolute;
    left: 0;
}

.login-container{
    background-color:#FAFAFA;
    height: 100%;
}

.auth-form{
    width: 340px;
    max-width: 100%;
    height: 250px;
    max-height: 100%;
    margin: 10 auto;
    padding-right: 16px!important;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
}

.login-box-header{
    margin-bottom: 15px;
    color: var(--color-text-primary);
    text-align: center;
    text-shadow: none;
    background-color: initial;
    border: 0;
}

.login-box-header h1 {
    font-size: 24px;
    font-weight: 300;
    letter-spacing: -.5px;
}
.login-box{
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius:3px;
    padding:2%;
    border: 1px solid;
    border-color: #cecece;
}
.login-box .el-form-item label {
    float: none;
    display: inline-block;
    text-align: left;
    padding: 0 0 1px 0;
}
</style>

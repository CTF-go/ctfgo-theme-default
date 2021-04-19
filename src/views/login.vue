<template>
    <div class="login-container">
    <div class="auth-form">
        <div class="login-box-header">
            <h1 class>Sign in to CTFgo</h1>
        </div>
        <div class="login-box">
            <el-form :label-position="top" style="padding:0" :model="formLabelAlign">
                <el-form-item>
                    <a class="el-form-item_a">Username</a>
                    <el-input v-model="formLabelAlign.username"></el-input>
                </el-form-item>
                <el-form-item>
                    <a class="el-form-item_a">Password</a>
                    <el-input v-model="formLabelAlign.password"></el-input>
                </el-form-item>
                <el-form-item>
                    
                    <el-button  type="primary" class="sigin-button" size="smaill" plain>Sign in</el-button>
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
      return {
        formLabelAlign: {
          username: '',
          password: ''
        }
      };
    }

}
</script>
<style lang="scss" scoped>
.sigin-button{
    position: absolute;
    right: 0;
}
.el-form-item_a{
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 30px;
    padding: 0 2px 0 0;
    box-sizing: border-box;
}
.login-container{
    background-color:#FAFAFA;
    height: 100%;
}

.auth-form{
    width: 340px;
    max-width: 100%;
    height: 240px;
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
}
</style>

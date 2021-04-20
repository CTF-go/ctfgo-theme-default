<template>
    <div class="auth-container">
    <Navbar />
        <div class="auth-form">
            <div class="auth-box-header">
                <h1 class>Sign in to CTFgo</h1>
            </div>
            <div class="auth-box">

            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default{
    name: 'Signin',
    components: {
        Navbar
    },
    data(){
        return {
            
            authForm: {
                username: 'Leon',
                password: '123456'
            },
        }
    }
}
</script>

<style scoped>
.auth-container{
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
.auth-box-header{
    margin-bottom: 15px;
    color: var(--color-text-primary);
    text-align: center;
    text-shadow: none;
    background-color: initial;
    border: 0;
}
.auth-box-header h1 {
    font-size: 24px;
    font-weight: 300;
    letter-spacing: -.5px;
}
</style>
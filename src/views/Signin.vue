<template>
    <div class="auth-container">
        <Navbar />
        <div class="auth-form">
            <div class="auth-box-header">
                <h1>Sign in to CTFgo</h1>
            </div>
            <div class="auth-box">
                
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
            username: 'Leon',
            password: '123456'
        },
        value: '',
        hasVisiblePassword: false

    }),
    computed: {
        getProgress() {
          let progress = 0

          // at least one number

          if (/\d/.test(this.value)) {
            progress += 20
          }

          // at least one capital letter

          if (/(.*[A-Z].*)/.test(this.value)) {
            progress += 20
          }

          // at menons a lowercase

          if (/(.*[a-z].*)/.test(this.value)) {
            progress += 20
          }

          // more than 5 digits

          if (this.value.length >= 6) {
            progress += 20
          }

          // at least one special character

          if (/[^A-Za-z0-9]/.test(this.value)) {
            progress += 20
          }

          return progress
        }
      }
    }
</script>


<style scoped>
.auth-container{
    background-color:#FAFAFA;
    height: 100%;
    width: 100%;
}
.auth-form{
    width: 640px;
    max-width: 90%;
    height: 550px;
    max-height: 90%;
    margin: 0 auto;
    border: 1px solid;
    border-color: #d51a1a;

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

    border: 1px solid;
    border-color: #1d1717;
}
.auth-box-header h1 {
    font-size: 24px;
    font-weight: 300;
    letter-spacing: -.5px;
}
.auth-box{
    background-color: initial;
    width: 100% auto;
    max-width: 100%;

    padding: 6px;

    border-radius:3px;
    border: 1px solid;
    border-color: #1d1717;
}
</style>
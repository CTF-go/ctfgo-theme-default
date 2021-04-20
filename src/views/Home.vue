<template>
    <div class="homepage">
        <Navbar v-bind:username='username' />
        <div class="title-box">
            <h1>A Golang CTF Platform</h1>
            <h2>with high concurrency, security, and low hardware requirements.</h2>
        </div>
        
    </div>
    
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  data() {
    return {
        username: ''
    }
  }
}
</script>
<style scoped>
.title-box{
    height:400px;
    width:720px;
    max-width: 90%;
    border: 1px solid;
    padding: 10px;
    border-color:#4baad3;
    box-shadow: 15px 10px 10px #4baad3;
    position: absolute;
    right: 40%;
    top: 50%;
    transform: translate(0,-50%);
}
h1{
    color: rgb(0, 0, 0);
    font-size: 4rem;
    font-weight: 800 !important;
}
h2{
    color: rgb(0, 0, 0);
    font-weight: 800 !important;
}
</style>
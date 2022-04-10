<template>
  <div class="home">
    <!-- <div class="header-notification">
      <p>test</p>
    </div> -->

    <div class="logo">
      <h1> 
        <vue-typer text='Welcome to' :erase-on-complete='true' type-delay='100' :repeat='0' pre-erase-delay='1000' erase-delay='100'></vue-typer>
        <vue-typer text='CTFgo' :repeat='0' pre-type-delay='2500' type-delay='180'></vue-typer>
      </h1>
      <!-- <img src="../assets/ctfgo-logo-long.png" alt="Logo of CTFgo" /> -->
    </div>
  </div>
</template>
<script>
import { VueTyper } from 'vue-typer'
export default {
    name: 'Home',
    components: {VueTyper},
    data:() => ({
      team: true,
    }),
}
</script>

<style scoped>
.home {
  margin-top: 44px;
}
.home .logo img {
  width: 1000px;
  max-width: 90%;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.home .logo h1 {
  width: 700px;
  
  max-width: 90%;
  font-size: 100px;
  position: absolute;
  text-align: center;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.header-notification {
    top: 45px;
    width: 100%;
    position: absolute;
    padding-left: 20px;
    height: 40px;
    background: #eef2f5;
    z-index: 10;
    display: flex;
    align-items: center;
    overflow: hidden;
    transition: all .3s ease;
}
* {
    left: 0;
    box-sizing: border-box!important;
    outline: none;
    -webkit-tap-highlight-color: transparent;
}
</style>
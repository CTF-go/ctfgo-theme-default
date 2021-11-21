<template>
  <div class="home">
    <div class="header-notification">
      <p>test</p>
    </div>

    <div class="logo">
      <img src="../assets/ctfgo-logo-long.png" alt="Logo of CTFgo" />
    </div>
  </div>
</template>
<script>
export default {
    name: 'Home',
    data:() => ({
        team: true,
    })
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
.header-notification {
    top: 45px;
    width: 100%;
    position: absolute;
    padding-left: 20px;
    height: 40px;
    background: #eef2f5;
    z-index: 10000;
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
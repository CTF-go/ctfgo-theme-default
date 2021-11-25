<template>
  <div>
    <Navbar @reloadChallenge="reloadChallenge" />
    <router-view ref="challengeFuncContainer" />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
    name: 'Index',
    components: { Navbar, Footer },
    methods: {
      reloadChallenge(){
        this.$refs.challengeFuncContainer.reload();
      }
    }
}
</script>

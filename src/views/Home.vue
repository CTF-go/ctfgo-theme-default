<template>
    <div class="homepage">
        <Navbar v-bind:username=username />
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
</style>
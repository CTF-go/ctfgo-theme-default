<template>
  <div class="index">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'Index',
  components: { Navbar }
}
</script>

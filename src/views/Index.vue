<template>
  <div>
    <Navbar/>
    <router-view/>
    
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
    name: 'Index',
    components: { Navbar, Footer }
}
</script>

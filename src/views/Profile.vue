<template>
  <div>
    <Navbar/>
        <h1>hello world</h1>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
    name: 'Profile',
    components: { Navbar, Footer }
}
</script>
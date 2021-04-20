<template>
    <vs-navbar color="#4baad3" text-white square center-collapsed v-model="active">
        <template #left>
            <img src="../assets/logos/navbar-logo.png" alt="">
        </template>
        <vs-navbar-item :active="active == 'guide'" id="guide">
            Home
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'docs'" id="docs">
            Users
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'components'" id="components">
            Scoreboard
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'license'" id="license">
            Challenges
        </vs-navbar-item>
        <template #right>
            <div v-if="username!==undefined && username!==''">
                <vs-button color="#fff" flat >Hi, {{ username }}</vs-button>
            </div>
            <div v-if="username==undefined || username==''">
                <vs-button @click="routerTo('signin')" color="#fff" flat >Sign in</vs-button>
            </div>
            <div v-if="username==undefined || username==''">
                <vs-button @click="routerTo('signup')" color="#fff" border >Sign up</vs-button>
            </div>
        </template>
      </vs-navbar>
</template>
<script>

export default {
    name: 'Navbar',
    props: {
        username:String,
    },
    data:() => ({
        active: 'Navbar'
    }),
    
    methods: {
        routerTo(target){
            if(target=='signin' && this.$router.history.current.path!=='/signin'){
                this.$router.push('/signin')
            }
            else if(target=='signup' && this.$router.history.current.path!=='/signup'){
                this.$router.push('/signup')
            }
        }
    }
}
</script>
<style scoped>
.vs-navbar img {
    max-height: 25px;
}
</style>
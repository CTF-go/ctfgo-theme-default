<template>
    <div class="hidden">
      <vs-sidebar
        v-model="active"
        open
        >
        <template #logo>
          <!-- ...img logo -->
        </template>
        <vs-sidebar-item id="home">
          <template #icon>
            <i class="fas fa-home"></i>
          </template>
          Home
        </vs-sidebar-item>
        <vs-sidebar-item id="notices">
          <template #icon>
            <i class="fas fa-bell"></i>
          </template>
          Notices
        </vs-sidebar-item>
        <vs-sidebar-item id="Music">
          <template #icon>
            <i class="fas fa-user-friends"></i>
          </template>
          Users
        </vs-sidebar-item>
        <vs-sidebar-item id="donate">
          <template #icon>
            <i class="fas fa-cubes"></i>
          </template>
          Challenges
        </vs-sidebar-item>
        <vs-sidebar-item id="drink">
          <template #icon>
            <i class="fas fa-flag"></i>
          </template>
          Submissions
        </vs-sidebar-item>
        <vs-sidebar-item id="shopping">
          <template #icon>
            <i class="fas fa-cogs"></i>
          </template>
          Config
        </vs-sidebar-item>
      </vs-sidebar>
    </div>
</template>
<script>
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
export default {
  components: { faAddressCard},
    data:() => ({
        active: 'home',
    })
}
</script>
<style scoped>

.vs-sidebar-content{
    margin-top: 44px;
    height: 100%;
}

</style>

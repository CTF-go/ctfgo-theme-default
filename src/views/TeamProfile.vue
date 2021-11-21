<template>
    <div class="profile">
        <h1>Profile</h1>
        <a>username: </a><br>
        <a>username: </a><br>

    </div>
</template>

<script>
export default {
    name: 'Profile',
    data:() => ({
        username: 'admin',
    }),
}
</script>
<style scoped>
.profile{
    margin-top: 84px;
}
h1 {
  color: #24292e;
  font-size: 5rem;
  font-weight: normal;
  line-height: 48px;
  margin: 0 0 50px;
  text-align: center;
  text-shadow: 1px 1px 2px #082b34;
  user-select: none;
}
</style>

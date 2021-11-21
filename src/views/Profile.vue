<template>
    <div class="profile">
        <h1>Profile</h1>
        <a>token: {{token}}</a><br>
        <a>country: {{country}}</a><br>
        <a>score: {{score}}</a><br>
        <a>username: {{username}}</a><br>
        <a>email: {{email}}</a><br>

    </div>
</template>

<script>
export default {
    name: 'Profile',
    data:() => ({
        token: '24be9ccff4467de283b9c58fb3127970',
        country: "cn",
        id: 2,
        score: 100,
        username: 'admin',
        email: 'admin@qq.com',
        score: 100,
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

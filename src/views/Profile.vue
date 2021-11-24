<template>
  <div class="profile">
    <h1>{{ username }}</h1>
    <h2>{{ score }} points</h2>


      <vs-button style="display:block;margin:0 auto" @click="copyToken" flat success animation-type="vertical">
          Token: {{ token }} <template #animate> Copy </template>
      </vs-button>
      <br>
      <vs-button style="display:block;margin:0 auto" flat success animation-type="vertical">
          Email: {{ email }}
      </vs-button>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data: () => ({
    token: "24be9ccff4467de283b9c58fb3127970",
    id: 2,
    score: 100,
    username: "admin",
    email: "admin@qq.com",
    score: 100,
  }),
  methods: {
    copyToken() {
      console.log("click")
      const input = document.createElement("input");
      document.body.appendChild(input);
      input.setAttribute("value", this.token);
      input.select();
      if (document.execCommand("copy")) {
        document.execCommand("copy");
      }
      document.body.removeChild(input);
    },
  },
};
</script>

<style scoped>
.profile {
  margin-top: 84px;
  text-align: center;
}
.button-token{
  position: absolute;
  left: 50%;
}
.button-email{
  position: absolute;
  left: 50%;
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

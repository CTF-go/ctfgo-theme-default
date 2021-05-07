<template>
  <div>
    <vs-button @click="show()" color="#fff" flat >Hi, {{ username }}</vs-button>
    <div class="menu__items">
        <ul v-if="toggle">
          <button @click="pushRouter('/profile')">Profile</button>
          <button>Team</button>
          <button>Settings</button>
          <div role="none" class="dropdown-divider"></div>
          <button>Sign out</button>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    username: {type: String, default: 'Not Found'}
  },
  data() {
    return {
      toggle: false
    };
  },
  methods: {
    show() {
      document.addEventListener('click', this.hideMenu)
    },
    pushRouter(adress){
        if (adress != window.location.pathname){
            this.$router.push(adress)
        }
    },
    hideMenu (e) {
      this.toggle = !this.toggle
      if(!this.toggle){
          document.removeEventListener('click', this.hideMenu)
      }
    }
  }
};
</script>

<style scoped>
.dropdown-divider{
  display: block;
  height: 0;
  margin: 8px 0;
  border-top: 1px solid #e1e4e8;
}
.menu__items {
  background: #fff;
  position: absolute;
  right: 10px;
  top: 44px;
  z-index: 2;
}

ul {
  width: 140px;
  list-style-type: none;
  box-sizing: border-box;
  margin: 1px auto;
  text-align: center;
  padding-left: 0;
  z-index: 2;
  box-shadow: 1px 1px 7px gray;
  padding-bottom: 8px;
}
ul button {
  color: #24292E;
  font-size: 14px;
  line-height: 1.5;
  display: block;
  text-overflow: ellipsis;
  padding: 4px 8px 4px 16px;
  width: 100%;
  max-width: 100%;
  border: none;
  background: #fff;
}
ul button:hover{
  font-weight: 600;
  background: #BDBEC0;
}
</style>

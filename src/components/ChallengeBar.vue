<template>
    <div class="categories">
        <ul>
            <button v-for="item in categories" v-bind:key="item"> {{ item }} </button>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    categories: {
        type: Array,
        default: function () {return ['Web', 'Re', 'Pwn', 'Crypto', 'Misc']}
    }

  },
  data() {
    return {
      toggle: false,
    };
  }
};
</script>

<style scoped>

.categories {
    display: block;
    
    position: absolute;
    left: 10px;
    top: 244px;
    z-index: 2;
}

ul {
    background: #fff;
    width: 140px;
    border-radius: 10px;
    list-style-type: none;
    box-sizing: border-box;
    margin: 1px auto;
    text-align: center;
    padding-left: 0;
    z-index: 2;
    box-shadow: 1px 1px 7px gray;
}

ul button {
    border-radius: 10px;
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

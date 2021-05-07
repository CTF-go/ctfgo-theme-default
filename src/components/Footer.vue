<template>
    <footer class="footer">
        <a>Copyright © 2021 CTFgo Development Team</a>
    </footer>
</template>

<script>
export default {
    name:'Footer'
}
</script>


<style scoped>
.footer{
    width: 100%;
    height: 44px;
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    margin-top: 400;
    display: block;
    text-align: center;
}
.footer a{
    color: #999999;
}
</style>
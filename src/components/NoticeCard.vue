<template>
    <vs-alert shadow>
        <template #title>
            {{ notice.title }}
        </template>
            <p v-html="notice.content"></p>
            <div class="created-time">{{ notice.created_at }}</div>
    </vs-alert>
</template>

<script>
export default {
    props: {
        notice:{
            title: '',
            content: '',
            created_at: '2006-01-02 15:04:05'
        }
    }
}
</script>
<style scoped>
.created-time{
    position: absolute;
    color: #BDBEC0;
    padding: 10px;
    right: 0;
}
</style>

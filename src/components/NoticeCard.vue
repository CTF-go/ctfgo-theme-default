<template>
    <vs-alert shadow>
        <template #title>
            {{ title }}
        </template>
            {{ message }}
            <div class="created-time">{{ created_time }}</div>
    </vs-alert>
</template>

<script>
export default {
    props: {
        title: {type: String, default: 'Hi, there'},
        message: {type: String, default: 'This is a default message.'},
        created_time: {type: String, default: '2006-01-02 15:04:05'}
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

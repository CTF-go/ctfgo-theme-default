<template>
    <vs-alert shadow>
        <template #title>
            {{ title }}
        </template>
            {{ message }}
    </vs-alert>
</template>

<script>
export default {
    props: {
        title: {type: String, default: 'Vuesax Framework'},
        message: {type: String, default: 'Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b> created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a Unique and pleasant style, Vuesax is created from scratch and designed for all types of developed from the frontend lover to the backend that wants to easily create your visual approach to the end user'}
    }
}
</script>

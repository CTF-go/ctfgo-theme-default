<template>
    <div class="notices">
        <div class="notices-box">
            <NoticeCard/>
            <NoticeCard/>
            <NoticeCard/>
            <NoticeCard/>
            <NoticeCard/>
            <NoticeCard/>
            <NoticeCard/>
        </div>
    </div>
</template>

<script>
import NoticeCard from '../components/NoticeCard'

export default {
    components: { NoticeCard }
}
</script>


<style scoped>
.notices{
    margin-top: 44px;
}
.notices-box{
    width: 760px;
    margin-top: 50px;
    max-width: 90%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
}
.notices-box .vs-alert{
    margin: 20px;
}
</style>

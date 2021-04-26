<template>
    <div class="notices">
        <h1>Notices</h1>
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
    margin-top: 84px;
}
.notices-box{
    width: 760px;
    max-width: 90%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
}
.notices-box .vs-alert{
    margin: 20px;
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

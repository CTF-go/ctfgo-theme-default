<template>
    <div class="notices">
        <h1>Notices</h1>
        <div class="notices-box">
            <div :key="i" :data="notice" v-for="(notice, i) in Math.min(5, notices.length-(page-1)*5)">
                <NoticeCard :notice="notices[(page-1)*5 + i]"/>
            </div>
            <template>
                <vs-pagination v-model="page" :length="Math.max(Math.ceil(notices.length/5), 1)" />
            </template>
        </div>
    </div>
</template>

<script>
import NoticeCard from '../components/NoticeCard'

export default {
    data:() => ({
        page: 1,
        notices: [
            {
                title: "Hi, there",
                content: "This is a default message.",
                created_at: "2006-01-02 15:04:05"
            }
        ]
    }),
    components: { NoticeCard },
    methods: {
        timestampToTime(timestamp){
            var d = new Date();
            var localOffset = -d.getTimezoneOffset()*60; // 获取当前时区与GMT的时间差，单位由分钟转换成秒
            var timeZone = localOffset>0 ? ' UTC+':' UTC'
            timeZone += localOffset/3600;
            timestamp += localOffset;
            var date = new Date(timestamp * 1000);
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var D = date.getDate() + ' ';
            var h = date.getHours() + ':';
            var m = date.getMinutes() + ':';
            var s = date.getSeconds();
            return Y + M + D + h + m + s + timeZone;
	    },
        async getNotices(){
            const {data: result} = await this.$http.get('/notice/all')
            if(result.code == 200){
                this.notices = result.data;
                this.notices.reverse();
                for (let i=0; i < this.notices.length; i++){
                    this.notices[i].created_at = this.timestampToTime(this.notices[i].created_at);
                }
            }
      }
    },
    created(){
        this.getNotices()
    }
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

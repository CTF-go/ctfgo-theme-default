<template>
    <div class="challengecard">
        <vs-button flat :active="isSolved == true" @click="active =! active">
            <div class="challenge">
                <h2 v-if="name.length>30">
                    <marquee><span>{{ name }}</span></marquee>
                </h2>
                <h2 v-else> {{ name }} </h2>
                <p>{{ score }}</p>
            </div>
        </vs-button>

        <vs-dialog width="500px" scroll v-model="active">

            <template #header>
                <h3 class="not-margin"> {{ name }} </h3>   
                <vs-button v-if="hints[0].length > 0" @click="active3=!active3" shadow transparent>
                    Hint
                </vs-button>
                
            </template>
            <div class="con-content">
                <p class="not-margin" v-html="description"></p>
                <br>
                <vs-row v-if="attachment[0].length > 0">
                    <vs-col :key=i :data=j v-for="(i,j) in attachment" vs-type="flex" vs-justify="center" vs-align="center" w="3">
                         <a style="text-decoration:none" :href="i" target="_blank"> 
                         <vs-button style="display:block;margin:0 auto" flat primary> Attachment {{j+1}} </vs-button>
                        </a>
                    </vs-col>
                </vs-row>
                <vs-input v-model="flag" placeholder="NCTF{.*}"></vs-input>
            </div>

            <template #footer>
            <div class="con-form" >
                <div class="flex">
                    <vs-button @click="getSolves" shadow transparent>
                        Solves: {{ solverCount }}
                    </vs-button>
                    <vs-button v-if="!isSolved" @click="submitFlag" transparent>
                        Submit
                    </vs-button>
                    <vs-button v-else @click="active=false" disabled transparent>
                        Submit
                    </vs-button>
                </div>
            </div>
             
                <div class="con-footer">
                    <vs-dialog scroll auto-width overflow-hidden v-model="active2">
                        <div class="con-content center">
                            <vs-table>
                                <template #thead>
                                    <vs-tr>
                                        <vs-th> Number </vs-th>
                                        <vs-th> Name </vs-th>
                                        <vs-th> Time </vs-th> 
                                    </vs-tr>
                                </template>
                                <template #tbody>
                                    <vs-tr :key="i" :data="tr" v-for="(tr, i) in solves" >
                                        <vs-td> {{ i+1 }} </vs-td>
                                        <vs-td> {{ tr.username }} </vs-td>
                                        <vs-td> {{ tr.time }} </vs-td>
                                    </vs-tr>
                                </template>
                            </vs-table>
                        </div>
                    </vs-dialog>
                    
                    <vs-dialog scroll auto-width overflow-hidden v-model="active3">
                        <div class="con-content">
                            <a :key="ii" :data="jj" v-for="(ii,jj) in hints" ><br> Hint {{jj+1}}: {{ ii }} <br> </a>
                        </div>
                    </vs-dialog>

                </div>
            </template>
        </vs-dialog>
    </div>
</template>

<script>
export default {
    props: {
        id: {type: Number, default: 1},
        name: {type: String, default: 'Challenge Name'},
        score: {type: Number, default: 1000},
        description: {type:String, default: 'More information of a challenge...'},
        isSolved: {type: Boolean, default: false},
        solverCount: {type: Number, default: 0},
        attachment: [],
        hints: []
    },
    data: function (){
        return {
            active: false,
            active2: false,
            active3: false,
            search: '',
            flag: '',
            solves: [
                { username: 'test1', time: '2021-11-23 16:34', submitted_at: 1622649485 },
            ]
        }
    },
    methods: {
        timestampToTime(timestamp){
            var d = new Date();
            var localOffset = -d.getTimezoneOffset()*60;
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
        async submitFlag(){
            this.active = false;
            const {data: result} = await this.$http.post('/user/submitflag', {"cid": this.id, "flag": this.flag});
            if (result.code == 200){
                this.openNotification('🥳 Congratulations～ Correct flag!');
                this.$emit('reloadChallenges')
            }else if(result.code == 400){
                this.openNotification('😅 Wrong flag!');
            }
        },
        async getSolves(){
            this.active2 = true;
            const {data: result} = await this.$http.get('/user/solves/cid/'+this.id);
            if (result.code == 200){
                this.solves = result.data;
                for (var i = 0; i < this.solves.length; i++) {
                    this.solves.time = this.timestampToTime(this.solves.submitted_at);
                }
            }
        },
        openNotification(title, text) {
          const noti = this.$vs.notification({
            position: 'top-center', title, text
          })
        },
    }

}
</script>


<style scoped>
.challengecard button{
  width: 90%;
  height: 140px;
}
.challenge h2{
  font-size: 20px;
}
</style>

<style lang="stylus">
  getColor(vsColor, alpha = 1)
      unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
  getVar(var)
      unquote("var(--vs-"+var+")")
  .con-footer
    display flex
    align-items center
    justify-content flex-end
    .vs-button
      margin 0px
      .vs-button__content
        padding 10px 30px
      ~ .vs-button
        margin-left 10px
  .not-margin
    margin 0px
    font-weight normal
    padding 10px
    padding-bottom 0px
  .con-content
    width 100%
    p
      font-size .8rem
      padding 0px 10px
    .vs-checkbox-label
      font-size .8rem
    .vs-input-parent
      width 100%
    .vs-input-content
      margin 10px 0px
      width calc(100%)
      .vs-input
        width 100%
  .footer-dialog
    display flex
    align-items center
    justify-content center
    flex-direction column
    width calc(100%)
    .new
      margin 0px
      margin-top 20px
      padding: 0px
      font-size .7rem
      a
        color getColor('primary') !important
        margin-left 6px
        &:hover
          text-decoration underline
    .vs-button
      margin 0px
</style>


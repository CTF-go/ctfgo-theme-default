<template>
    <div class="profile">
        <h1>{{ username }}</h1>
        <h2 style="text-align:center">Score: {{ score }}, Ranking: {{ ranking }}</h2>
        <vs-button style="display:block;margin:0 auto" @click="copyToken" flat success animation-type="vertical">
            Token: {{ token }} <template #animate> Copy </template>
        </vs-button>

        <div class="profile-table" v-if="status==0"> 
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3"></vs-col>
                <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="3">
                    <vs-radio v-model="picked" val="1"> NJUPT </vs-radio>
                </vs-col>
                <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="3">
                    <vs-radio v-model="picked" val="2"> Others </vs-radio>
                </vs-col>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3"></vs-col>
            </vs-row>
            <br>
        
            <vs-table v-if="picked==1">
                <template #thead>
                    <vs-tr> 
                        <vs-th> Member </vs-th> <vs-th> Name </vs-th> <vs-th> Student ID </vs-th> <vs-th> QQ/TEL </vs-th>
                    </vs-tr>
                </template>

                <template #tbody>
                    <vs-tr :key="i" v-for="(tr, i) in studentInfo" :data="tr">
                        <vs-td> {{ i.substring(7) }} </vs-td>
                        <vs-td edit @click="edit = tr, editProp = 'username', editActive = true"> {{ tr.username }} </vs-td>
                        <vs-td edit @click="edit = tr, editProp = 'student_id', editActive = true"> {{ tr.student_id }} </vs-td>
                        <vs-td edit @click="edit = tr, editProp = 'qq', editActive = true"> {{ tr.qq }} </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
      
            <vs-table v-if="picked==2">
                <template #thead>
                    <vs-tr> 
                        <vs-th> Member </vs-th> <vs-th> Nickname </vs-th> <vs-th> Email </vs-th> <vs-th> QQ/TEL </vs-th>
                    </vs-tr>
                </template>

                <template #tbody>
                    <vs-tr :key="i" v-for="(tr, i) in othersInfo" :data="tr">
                        <vs-td> {{ i.substring(6) }} </vs-td>
                        <vs-td edit @click="edit = tr, editProp = 'username', editActive2 = true"> {{ tr.username }} </vs-td>
                        <vs-td edit @click="edit = tr, editProp = 'email', editActive2 = true"> {{ tr.email }} </vs-td>
                        <vs-td edit @click="edit = tr, editProp = 'qq', editActive2 = true"> {{ tr.qq }} </vs-td>
                    </vs-tr>
                </template>
            </vs-table>

            <vs-button style="display:block;margin:0 auto" flat @click="checkInfo"> Submit </vs-button> <br>
            <vs-switch @click="getSolvedChallenges" v-model="activeChallenges">
                <template #off>
                    Show solved challenges
                </template>
                <template #on>
                    Hidden solved challenges
                </template>
            </vs-switch>

            <vs-dialog auto-width v-model="editActive">
                <template #header> Change {{ renameStudent[editProp] }} </template>
                <vs-input @keypress.enter="editActive = false" v-if="editProp == 'username'" v-model="edit[editProp]" />
                <vs-input @keypress.enter="editActive = false" v-if="editProp == 'student_id'" v-model="edit[editProp]" />
                <vs-input @keypress.enter="editActive = false" v-if="editProp == 'qq'" v-model="edit[editProp]" />
            </vs-dialog>

            <vs-dialog auto-width v-model="editActive2">
                <template #header> Change {{ renameOthers[editProp] }} </template>
                <vs-input @keypress.enter="editActive2 = false" v-if="editProp == 'username'" v-model="edit[editProp]" />
                <vs-input @keypress.enter="editActive2 = false" v-if="editProp == 'email'" v-model="edit[editProp]" />
                <vs-input @keypress.enter="editActive2 = false" v-if="editProp == 'qq'" v-model="edit[editProp]" />
            </vs-dialog>

            <vs-dialog auto-width v-model="active">
                <template #header> Notice </template>
                <p> You cannot change it after submission. Please check carefully and confirm the submission? </p>
                <vs-button style="display:block;margin:0 auto" @click="submitInfo" transparent> OK </vs-button>
            </vs-dialog>
        </div>
        
        <div class="profile-table" v-if="status!=0"> 
            <vs-table>
                <template #thead>
                    <vs-tr> 
                        <vs-th> Member </vs-th> 
                        <vs-th> {{ status == 1 ? "Name":  "Nickname"}} </vs-th> 
                        <vs-th> {{ status == 1 ? "Student ID":  "Email"}} </vs-th> 
                        <vs-th> QQ/TEL </vs-th>
                    </vs-tr>
                </template>
                <template #tbody>
                    <vs-tr :key="i" v-for="(tr, i) in selfInfo" :data="tr">
                        <vs-td> {{ i+1 }} </vs-td> <vs-td> {{ tr.username }} </vs-td> <vs-td> {{ tr.id_email }} </vs-td> <vs-td> {{ tr.qq }} </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
            <br><br>
            <vs-switch @click="getSolvedChallenges" v-model="activeChallenges">
                <template #off>
                    Show solved challenges
                </template>
                <template #on>
                    Hidden solved challenges
                </template>
            </vs-switch>
        </div>

        <vs-dialog scroll auto-width overflow-hidden v-model="activeChallenges">
            <div class="con-content center">
                <vs-table>
                    <template #thead>
                        <vs-tr>
                            <vs-th> Challenge </vs-th>
                            <vs-th> Score </vs-th>
                            <vs-th  width="200px"> Time </vs-th> 
                        </vs-tr>
                    </template>
                    <template #tbody>
                        <vs-tr :key="i" :data="tr" v-for="(tr, i) in solved_challenges" >
                            <vs-td> {{ tr.challenge_name }} </vs-td>
                            <vs-td> {{ tr.score }} </vs-td>
                            <vs-td> {{ timestampToTime(tr.submitted_at) }} </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </div>
        </vs-dialog>
    </div>
</template>

<script>
export default {
  name: "Profile",
  data: () => ({
    token: "",
    id: 2,
    isNJUPTStudent: true,
    picked: 1,
    username: "_",
    status: 0,
    email: "",
    score: null,
    ranking: null,
    active: false,
    editActive: false,
    editActive2: false,
    activeChallenges: false,
    edit: null,
    editProp: {},
    renameStudent:{"username":"Name","student_id":"Student ID","qq":"QQ/TEL"},
    renameOthers: {"username":"Nickname","email":"Email","qq":"QQ/TEL"},
    studentInfo: {
      "student1":{"username": "","student_id": "","qq": "",},
      "student2":{"username": "","student_id": "","qq": "",},
      "student3":{"username": "","student_id": "","qq": "",},
      "student4":{"username": "","student_id": "","qq": "",}
    },
    othersInfo: {
      "others1":{"username": "","email": "","qq": "",},
      "others2":{"username": "","email": "","qq": "",},
      "others3":{"username": "","email": "","qq": "",},
      "others4":{"username": "","email": "","qq": "",}
    },
    selfInfo: [
        {"username": "cccccs","id_email": "23s23ss@qq.com","qq": "4545454544"},
        {"username": "x2xs","id_email": "ass22@dd.com","qq": "2222222"}
    ],
    solved_challenges: [
    ]
  }),
    methods: {
        timestampToTime(timestamp){
            var d = new Date();
            var localOffset = -d.getTimezoneOffset()*60; // 获取当前时区与GMT的时间差，单位由分钟转换成秒
            var timeZone = localOffset>0 ? ' UTC+':' UTC'
            timeZone += localOffset/3600;
            // timestamp += localOffset;
            var date = new Date(timestamp * 1000);
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var D = date.getDate() + ' ';
            var h = date.getHours() + ':';
            var m = date.getMinutes() + ':';
            var s = date.getSeconds();
            return Y + M + D + h + m + s + timeZone;
	    },
        copyToken() {
            console.log("click")
            const input = document.createElement("input");
            document.body.appendChild(input);
            input.setAttribute("value", this.token);
            input.select();
            if (document.execCommand("copy")) {
                document.execCommand("copy");
            }
            document.body.removeChild(input);
        },
        async getSolvedChallenges(){
            if (this.activeChallenges) { return; }
            const {data: result} = await this.$http.get('/user/solves/self');
            if (result.code == 200){
                this.solved_challenges = result.data;
            }
        },
        async getSession() {
            const {data: result} = await this.$http.get('/user/session');
            if (result.code == 200){
                this.username = result.data.username;
                this.token = result.data.token;
            }
        },
        async getScore() {
            const {data: result} = await this.$http.get('/user/score/self');
            if (result.code == 200){
                this.ranking = result.data.rank;
                this.score = result.data.score;
            }
        },
        async getStatus() {
            const {data: result} = await this.$http.get('/user/info/submit/self');
            if (result.code == 200){
                this.status = result.status;
                if (this.status != 0) { this.selfInfo = result.data; }
            }
        },
        openNotification(title, text) {
            const noti = this.$vs.notification({
                position: 'top-center', title, text
            })
        },
        checkInfo() {
            if (this.picked==1){
                if (this.checkStudent()){this.active=1;}
            }else{
                if (this.checkOthers()){this.active=1;}
            }
        },
        submitInfo(){
            this.active = false;
            if (this.picked==1){this.submitStudent();}
            else               {this.submitOthers();}
        },

        checkStudent() {
            var studentArray = [[this.studentInfo['student1'].username.length, this.studentInfo['student1'].student_id.length, this.studentInfo['student1'].qq.length],
                                [this.studentInfo['student2'].username.length, this.studentInfo['student2'].student_id.length, this.studentInfo['student2'].qq.length],
                                [this.studentInfo['student3'].username.length, this.studentInfo['student3'].student_id.length, this.studentInfo['student3'].qq.length],
                                [this.studentInfo['student4'].username.length, this.studentInfo['student4'].student_id.length, this.studentInfo['student4'].qq.length]];
            var beforeLine = 0;
            for (var i = 0; i < studentArray.length; i++) {
                if (Math.min(...studentArray[i]) > 0){ // 一行所有空都填满
                if (i == 0 || beforeLine == 1){
                    beforeLine = 1;
                } else {
                    this.openNotification("Don't leave a blank line in the middle");
                    return false;
                }
                } else if (Math.max(...studentArray[i]) == 0){ // 一行所有空都没填
                if (i == 0) {
                    this.openNotification("Please fill in the table");
                    return false;
                }
                beforeLine = 0;
                } else {
                this.openNotification("Student"+(i+1)+": Information is incomplete");
                return false;
                }
            }
            return true;
        },
    checkOthers() {
      var othersArray = [[this.othersInfo['others1'].username.length, this.othersInfo['others1'].email.length, this.othersInfo['others1'].qq.length],
                         [this.othersInfo['others2'].username.length, this.othersInfo['others2'].email.length, this.othersInfo['others2'].qq.length],
                         [this.othersInfo['others3'].username.length, this.othersInfo['others3'].email.length, this.othersInfo['others3'].qq.length],
                         [this.othersInfo['others4'].username.length, this.othersInfo['others4'].email.length, this.othersInfo['others4'].qq.length]];
      var beforeLine = 0;
      for (var i = 0; i < othersArray.length; i++) {
        if (Math.min(...othersArray[i]) > 0){ // 一行所有空都填满
          if (i == 0 || beforeLine == 1){
            beforeLine = 1;
          } else {
            this.openNotification("Don't leave a blank line in the middle");
            return false;
          }
        } else if (Math.max(...othersArray[i]) == 0){ // 一行所有空都没填
          if (i == 0) {
            this.openNotification("Please fill in the table");
            return false;
          }
          beforeLine = 0;
        } else {
          this.openNotification("Member"+(i+1)+": Information is incomplete");
          return false;
        }
      }
      return true;
    },
    async submitStudent() {
      const {data: result} = await this.$http.post('/user/submit/studentinfo', this.studentInfo);
      if (result.code == 200){
        this.openNotification("Information updated successfully");
        this.getStatus();
      }else if (result.code == 2000){
        this.openNotification("Student1: Information is incomplete");
      }else if (result.code == 2001){
        this.openNotification("Student1: Incorrect format");
      }else if (result.code == 2002){
        this.openNotification("Student2: Incorrect format");
      }else if (result.code == 2003){
        this.openNotification("Student3: Incorrect format");
      }else if (result.code == 2004){
        this.openNotification("Student4: Incorrect format");
      }else if (result.code == 2010){
        this.openNotification("Student ID or QQ/TEL is occupied");
      }
    },

    async submitOthers() {
      const {data: result} = await this.$http.post('/user/submit/othersinfo', this.othersInfo);
      if (result.code == 200){
        this.openNotification("Information updated successfully");
        this.getStatus();
      }else if (result.code == 2000){
        this.openNotification("Member1: Information is incomplete");
      }else if (result.code == 2001){
        this.openNotification("Member1: Incorrect format");
      }else if (result.code == 2002){
        this.openNotification("Member2: Incorrect format");
      }else if (result.code == 2003){
        this.openNotification("Member3: Incorrect format");
      }else if (result.code == 2004){
        this.openNotification("Member4: Incorrect format");
      }else if (result.code == 2010){
        this.openNotification("Email or QQ/TEL is occupied");
      }
    }
  },
  created(){
      this.getSession();
      this.getScore();
      this.getStatus();
  }
};
</script>

<style scoped>
.profile {
  margin-top: 84px;
}
.profile-table{
  margin-top: 20px;
  position: absolute;
  left: 30%;
  width: 40%;
}
.button-token{
  position: absolute;
  left: 50%;
}
.button-email{
  position: absolute;
  left: 50%;
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

<template>
<div class="scoreboard">
    <h1>Scoreboard</h1>
    <div class="scoreboard-chart">
        <LineChart :chartData="chartData" :options="options"></LineChart>
    </div>
    <div class="users">
        <vs-table>
            <template #header>
                <vs-input v-model="search" border placeholder="Search" />
            </template>

            <template #thead>
                <vs-tr>
                    <vs-th sort @click="users = $vs.sortData($event, users, 'ranking')">Ranking</vs-th>
                    <vs-th>Team</vs-th>
                    <vs-th>Score</vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr :key="i" :data="tr" v-for="(tr, i) in $vs.getPage($vs.getSearch(users, search), page, max)" >
                    <vs-td> {{ tr.ranking }} </vs-td>
                    <vs-td> {{ tr.username }} </vs-td>
                    <vs-td> {{ tr.score }} </vs-td>
                </vs-tr>
            </template>
            <template #footer>
                <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(users, search), max)" />
            </template>
        </vs-table>
    </div>
</div>
</template>

<script>
import LineChart from "../components/LineChart.vue";
export default {
  components: {
    LineChart,
  },
  data() {
    return {
        search: '',
        page: 1,
        max: 10,
        users: [
            {
                "ranking": 1,
                "username": "Bob",
                "score": 1002,
                /*"Affiliation": "X1cT34m",*/
            },
            {
                "ranking": 2,
                "username": "Alice",
                "score": 1000,
                /*"Affiliation": "X1cT34m",*/
            }
        ],
        chartData: {
            labels: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
            datasets: [
                {
                    data: [20, 300, 330, 1330, 1825, 2635, 2950, 3660],
                },
                {
                    
                    label: "Leonsec",
                    borderCapStyle: "square",
                    fill: false,
                    backgroundColor: 'rgb(75, 192, 192)',
                    borderColor: 'rgb(75, 192, 192)',
                    data: [20, 30, 130, 1200, 1825, 3635, 3750, 3850],
                }
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    };
  },
  methods:{
      async getUsersData(){
          const {data: result} = await this.$http.get('/scores/all');
          this.users = result['data'];
          for (var i = 0; i < this.users.length; i++){
              if (i == 0) {this.users[i].ranking = 1;}
              else if (this.users[i].score == this.users[i-1].score) {this.users[i].ranking = this.users[i-1].ranking;}
              else {this.users[i].ranking = this.users[i-1].ranking + 1;}
          }
      }
  },
    mounted:function(){
        this.getUsersData();//需要触发的函数
    }
};
</script>

<style scoped>
.users{
    /*background-color: #007779;*/
    top: 600px;
    width: 800px;
    position: absolute;
    left: 50%;
    max-width: 90%;
    transform: translate(-50%);
    padding: 10px;
}
.scoreboard {
  margin-top: 84px;
}
.scoreboard-chart {
  width: 760px;
  max-width: 90%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
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

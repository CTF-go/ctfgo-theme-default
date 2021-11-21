<template>
<div class="scoreboard">
    <h1>Scoreboard</h1>
    <div class="scoreboard-chart">
        <LineChart :chartData="chartData" :options="options"></LineChart>
    </div>
    <div class="users">
        <vs-table>
            <template #thead>
                <vs-tr>
                    <vs-th>Ranking</vs-th>
                    <vs-th>Username</vs-th>
                    <vs-th>Score</vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr
                    :key="i"
                    v-for="(tr, i) in $vs.getPage(users, page, max)"
                    :data="tr"
                >
                    <vs-td>{{ (page-1)*max+i+1 }}</vs-td>

                    <vs-td>
                        {{ tr.username }}
                    </vs-td>
                    <vs-td>{{ tr.score }}</vs-td>
                </vs-tr>
            </template>
            <template #footer>
                <vs-pagination v-model="page" :length="$vs.getLength(users, max)" />
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
        page: 1,
        max: 2,
        users: [
            {
                "username": "Bob",
                "score": 1000,
                /*"Affiliation": "X1cT34m",*/
            },
            {
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
          const {data: result} = await this.$http.get('/scores/all')
          this.users = result['data']
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

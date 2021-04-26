<template>
  <div class="scoreboard">
    <h1>Score Board</h1>
    <div class="scoreboard-chart">
      <LineChart :chartData="chartData" :options="options"></LineChart>
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
      chartData: {
        labels: ["AREA01", "ATT05", "COR01", "DOTA2"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: [360, 190, 245, 420],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>

<style scoped>
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

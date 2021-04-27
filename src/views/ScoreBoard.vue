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
        labels: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
        datasets: [
          {
            data: [0, 300, 330, 1330, 1825, 2635, 2950, 3660],
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

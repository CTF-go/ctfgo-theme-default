<template>
  <div>
    <LineExample :chartData="chartData" :options="options"></LineExample>
  </div>
</template>


<script>
import LineExample from '../components/LineExample.vue'

export default {
  components: {
    LineExample
  },
  data () {
    return {
      chartData: {
        labels: ['AREA01', 'ATT05', 'COR01', 'DOTA2'],
        datasets: [
          {
            backgroundColor: [
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16'
            ],
            data: [360, 190, 245, 420]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }

}
</script>

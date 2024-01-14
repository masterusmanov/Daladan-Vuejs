<template>
  <div class="container mt-5">
      <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'LineChart',
  components: { Line },
  data() {
      return {
          chartData: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                  {
                      label: 'Hammasi shu diagrammada',
                      backgroundColor: '#25B679',
                      data: [0, 40, 39, 10, 40, 39, 60, 80],
                      tension: 0.4,
                      pointRadius: 8,
                  }
              ]
          },
          chartOptions: {
              responsive: true
          }
      }
  }
}
</script>
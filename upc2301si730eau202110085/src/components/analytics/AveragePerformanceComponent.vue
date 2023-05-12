<template>
  <div class="center-card" role="region" aria-label="Performance Summary">
    <h1 class="center" role="heading" aria-level="1">{{ $t('averagePerformance') }}</h1>
    <div class="center">
      <h2 role="heading" aria-level="2">{{ $t('volts') }}</h2>
      <p role="text">{{ averageVolts.toFixed(2) }}</p>
      <h2 role="heading" aria-level="2">{{ $t('watts') }}</h2>
      <p role="text">{{ averageWatts.toFixed(2) }}</p>
      <h2 role="heading" aria-level="2">{{ $t('hp') }}</h2>
      <p role="text">{{ averageHp.toFixed(2) }}</p>
    </div>
  </div>
</template>

<script>
import HeathService from '../../services/healthCheckService.js'
export default {
  name: 'AveragePerformance',
  data() {
    return {
      healthChecks: [],
      averageVolts: 0,
      averageWatts: 0,
      averageHp: 0
    }
  },
  mounted() {
    this.getHealthChecks()
  },
  methods: {
    getHealthChecks() {
      HeathService.getList()
        .then((response) => {
          this.healthChecks = response

          let numberOfData = 0
          this.healthChecks.forEach((healthCheck) => {
            if (healthCheck.hp !== 0) {
              numberOfData++
              this.averageVolts += healthCheck.volts
              this.averageWatts += healthCheck.watts
              this.averageHp += healthCheck.hp
            }
          })

          if (numberOfData > 0) {
            this.averageVolts /= numberOfData
            this.averageWatts /= numberOfData
            this.averageHp /= numberOfData
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>

<style scoped>
.center-card {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  width: 30%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
}

.center {
  text-align: center;
  padding: 10px 5px;
}
</style>

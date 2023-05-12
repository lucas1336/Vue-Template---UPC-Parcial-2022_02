<template>
  <div class="card">
    <pv-dataTable
      v-model:filters="filters"
      filterDisplay="row"
      :globalFilterFields="[
        'id',
        'treadmillId',
        'serialNumber',
        'centerName',
        'date',
        'time',
        'volts',
        'watts',
        'hp'
      ]"
      :value="heathChecks"
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      paginator
      tableStyle="min-width: 50rem"
    >
      <pv-column
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
        sortable
      >
      </pv-column>
    </pv-dataTable>
  </div>
</template>

<script>
import centerService from '../../services/centerService.js'
import healthCheckService from '../../services/healthCheckService.js'
import treadmillService from '../../services/treadmillService.js'
export default {
  name: 'TableData',
  data() {
    return {
      heathChecks: [],
      treadMills: [],
      columns: null,
      filters: {}
    }
  },
  created() {
    this.columns = [
      { field: 'id', header: 'Record Id' },
      { field: 'treadmillId', header: 'Treadmill Id' },
      { field: 'serialNumber', header: 'Serial Number' },
      { field: 'centerName', header: 'Center Name' },
      { field: 'date', header: 'Date' },
      { field: 'time', header: 'Time' },
      { field: 'volts', header: 'Volts' },
      { field: 'watts', header: 'Watts' },
      { field: 'hp', header: 'Hp' }
    ]
    this.getTreadmills().then(() => {
      this.getHealthChecks()
    })
  },
  methods: {
    async getTreadmills() {
      return treadmillService
        .getList()
        .then((response) => {
          this.treadMills = response
          this.treadMills.forEach((treadmill) => {
            centerService
              .getItem(treadmill.centerId)
              .then((response) => {
                treadmill.centerId = response.name
              })
              .catch((error) => {
                console.log(error)
              })
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getHealthChecks() {
      healthCheckService
        .getList()
        .then((response) => {
          this.heathChecks = response
          // add the field centername
          this.heathChecks.forEach((healthCheck) => {
            this.treadMills.forEach((treadmill) => {
              if (healthCheck.treadmillId === treadmill.id) {
                healthCheck.serialNumber = treadmill.serialNumber
                healthCheck.centerName = treadmill.centerId
              }
              healthCheck.date = healthCheck.year + '-' + healthCheck.month + '-' + healthCheck.day
              healthCheck.time =
                healthCheck.hour + ':' + healthCheck.minutes + ':' + healthCheck.seconds
            })
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped></style>

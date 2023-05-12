<template>
  <div class="border">
    <div>
      <h1>Table 2</h1>
    </div>
    <div class="justify-content-center">
      <pv-dataTable
        v-model:filters="filters"
        :value="healthChecks"
        style="max-width: 100rem"
        :rows="10"
        dataKey="id"
        filterDisplay="row"
        paginator
      >
        <template #header>
          <div class="flex justify-content-end">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <pv-inputText v-model="filters['global'].value" placeholder="Keyword Search" />
            </span>
          </div>
        </template>
        <template #empty> No customers found. </template>
        <pv-column field="id" header="Record Id" sortable> </pv-column>
        <pv-column field="treadmillId" header="Treadmill Id" sortable> </pv-column>
        <pv-column field="serialNumber" header="Serial Number" sortable> </pv-column>
        <pv-column field="centerName" header="Center Name" sortable> </pv-column>
        <pv-column field="date" header="Date" sortable> </pv-column>
        <pv-column field="time" header="Time" sortable> </pv-column>
        <pv-column field="volts" header="Volts" sortable> </pv-column>
        <pv-column field="watts" header="Watts" sortable> </pv-column>
        <pv-column field="hp" header="Hp" sortable> </pv-column>
      </pv-dataTable>
    </div>
  </div>
</template>

<script>
import healthCheckService from '../../services/healthCheckService.js'
import centerService from '../../services/centerService.js'
import treadmillService from '../../services/treadmillService.js'
export default {
  name: 'Table2',
  data() {
    return {
      healthChecks: [],
      filters: {
        global: {
          value: ''
        }
      }
    }
  },
  created() {
    this.initFilters()
  },
  mounted() {
    this.getHealthChecks()
  },
  methods: {
    initFilters() {
      this.filters = {
        global: {
          value: ''
        }
      }
    },
    getHealthChecks() {
      healthCheckService
        .getList()
        .then((response) => {
          this.healthChecks = response
          this.healthChecks.forEach((healthCheck) => {
            treadmillService
              .getItem(healthCheck.treadmillId)
              .then((response) => {
                healthCheck.serialNumber = response.serialNumber
                centerService
                  .getItem(response.centerId)
                  .then((response) => {
                    healthCheck.centerName = response.name
                  })
                  .catch((error) => {
                    console.log(error)
                  })
              })
              .catch((error) => {
                console.log(error)
              })
            healthCheck.date = healthCheck.year + '-' + healthCheck.month + '-' + healthCheck.day
            healthCheck.time =
              healthCheck.hour + ':' + healthCheck.minutes + ':' + healthCheck.seconds
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.justify-content-center {
  display: flex;
  justify-content: center;
  margin: 4rem 0;
}
</style>

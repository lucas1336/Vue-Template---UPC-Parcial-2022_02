<template>
  <div class="center">
    <h1>Table View</h1>
    <Table2 />
  </div>
</template>

<script setup>
import Table2 from '../components/analytics/Table2Component.vue'
</script>

<script>
export default {
  name: 'TableView'
}
</script>

<style scoped>
.center {
  align-items: center;
  text-align: center;
}
</style>

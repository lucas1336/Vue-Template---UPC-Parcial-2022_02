<template>
  <TabView role="navigation" aria-label="TechnoGym TechnoRun Analytics">
    <pv-toolbar
      :pt="{
        root: {
          style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' }
        }
      }"
      role="toolbar"
    >
      <template #start>
        <h3 class="text-white">TechnoGym TechnoRun Analytics</h3>
      </template>
      <template #end>
        <router-link to="/home" class="margin-right">
          <pv-button role="button">{{ $t('home') }}</pv-button>
        </router-link>
        <router-link to="/analytics/health-checks" class="margin-right">
          <pv-button role="button">{{ $t('healthChecks') }}</pv-button>
        </router-link>
        <router-link to="/table">
          <pv-button role="button">Table</pv-button>
        </router-link>
      </template>
    </pv-toolbar>
  </TabView>
</template>

<script>
export default {
  name: 'ToolbarComponent'
}
</script>

<style scoped>
.text-white {
  color: white;
  margin-left: 10px;
}

.margin-right {
  margin-right: 10px;
}
</style>

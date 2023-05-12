<template>
  <TabView>
    <Toolbar
      :pt="{
        root: {
          style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' }
        }
      }"
    >
      <template #start>
        <h3 class="text-white">Toolbar</h3>
      </template>
      <template #end>
        <router-link to="/home">
          <Button icon="pi pi-home" class="round"></Button>
        </router-link>
      </template>
    </Toolbar>
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

.round {
  border-radius: 50%;
}
</style>

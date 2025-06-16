<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Dashboad from './Pages/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>

<style>
/* グローバルスタイルはここ */
</style>

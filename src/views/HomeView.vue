<template>
  <div class="home">
    <div>home</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <VuexCounter />
    <ToDo />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import VuexCounter from '@/components/VuexCounter.vue'
import ToDo from '@/components/ToDo.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    VuexCounter,
    ToDo,
  }
}
</script>

<style scoped>

.home {
  border: solid 2px green;
}
</style>

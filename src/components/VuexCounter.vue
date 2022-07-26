<template>
  <div class="box">
    <div class="title">{{ this.$store.state.count }}</div>
    <button class="butt" v-on:click="increment">++</button>
  </div>
</template>



<script>
export default {
  name: "VuexCounter",
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>



<style>
</style>
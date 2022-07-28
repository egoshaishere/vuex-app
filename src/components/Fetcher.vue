<template>
  <div>
    <div class="box">
      <div class="title">{{ data }}</div>
      <button class="butt" v-on:click="actionC">get Data</button>
    </div>
    <div class="box">
      <div class="title">{{ otherData }}</div>
      <button class="butt" v-on:click="actionD">get other Data</button>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Fetcher",
  computed: mapState(["data", "otherData"]),
  methods: {
    ...mapActions(["actionC", "actionD"])
  }
};
</script>

<style>
</style>
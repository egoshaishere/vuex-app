<template>
  <div class="box">
    <div class="title">{{ count }}</div>
    <button class="butt" v-on:click="increment">++</button>
    <button class="butt" v-on:click="decrement">--</button>

    <input type="text" v-model="by.amount" />
    <button class="butt" v-on:click="incBy">by++</button>
    <button class="butt" v-on:click="decBy">by--</button>

    <button class="butt" v-on:click="incAction">action++</button>
    <button class="butt" v-on:click="incDelay">actionDelay++</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "VuexCounter",
  data() {
    return {
      by: { amount: 100 },
      localVal: 135,
    };
  },
  computed: mapState(["count"]),
  methods: {
    ...mapMutations(['increment', 'decrement', 'incrementBy', 'decrementBy']),
    incBy() {
      this.incrementBy(parseInt(this.by.amount, 10))
    },
    decBy(){
      this.decrementBy(parseInt(this.by.amount, 10))
    },
    incAction(){
      this.$store.dispatch('incrementACTION')
    },
    incDelay(){
      this.$store.dispatch('incrementDelay')
    }
  },

  // methods: {
  //   increment() {
  //     this.$store.commit("increment");
  //     console.log(this.$store.state.count);
  //   },
  //   incrementBy() {
  //     this.$store.commit('incrementBy', this.by.amount);
  //   },
  //   decrement() {
  //     this.$store.commit("decrement");
  //     console.log(this.$store.state.count);
  //   },
  //   decrementBy() {
  //     this.$store.commit("decrementBy", this.by.amount);
  //   },
  // },
};
</script>

<style>
</style>



<!-- <template>
//кривовато конечно нужно передать все через мап мутэйшенс
  <div class="box">
    <div class="title">{{ count }}</div>
    <button class="butt" v-on:click="increment">++</button>
    <button class="butt" v-on:click="decrement">--</button>

    <input type="text" v-model="by.amount" />
    <button class="butt" v-on:click="incrementBy">by++</button>
    <button class="butt" v-on:click="decrementBy">by--</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "VuexCounter",
  data() {
    return {
      by: { amount: 100 },
      localVal: 135,
    };
  },
  computed: mapState(["count"]),
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
    incrementBy() {
      this.$store.commit('incrementBy', this.by.amount);
    },
    decrement() {
      this.$store.commit("decrement");
      console.log(this.$store.state.count);
    },
    decrementBy() {
      this.$store.commit("decrementBy", this.by.amount);
    },
  },
};
</script>

<style>
</style> -->

<!-- <template>
  вот тут уже неплохо, в данном темплейте 2 варианта призыва переменных из стор внутри мапстэйт
  <div class="box">
    <div class="title">{{ count }}</div>
    <button class="butt" v-on:click="increment">++</button>
    <div>{{countPlusLocalState}}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "VuexCounter",
  data() {
    return {
      localVal: 135,
    };
  },
  computed: mapState({



    //2 следующих строчки эквиваленты друг другу
    // countAlias: 'count',
    count: (state) => state.count,



    countPlusLocalState(state) {
      return state.count + this.localVal;
    },
  }),
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>
<style>
</style> -->


<!-- <template>
лучше но можно бысвтрее с помощью mapState
  <div class="box">
    <div class="title">{{ count }}</div>
    <button class="butt" v-on:click="increment">++</button>
  </div>
</template>

<script>
export default {
  name: "VuexCounter",
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>

<style>
</style> -->


<!-- <template>
  bad style or not??? все работает и без компутед!!!
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
</style> -->

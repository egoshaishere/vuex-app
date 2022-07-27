<template>
  <div class="container">
    <div class="todo">
      <div>{{ doneTodosCount }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "ToDo",
  //можно просто вернуть в виде строк названия геттеров
  computed: mapGetters(["doneTodos", "doneTodosCount", "getTodoById"]),
  // computed: {
  //   doneTodosCount() {
  //     return this.$store.getters.doneTodosCount;
  //   },
  // },
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
}
.todo {
  margin: 30px;
  border: 2px solid pink;
  border-radius: 30px;

  width: 300px;

  /* display: flex;
  flex-direction: column; */
}
</style>

<!-- https://scrimba.com/learn/vuex/retrieve-data-from-vuex-store-with-getters-c2Be7TB -->
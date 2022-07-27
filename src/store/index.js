import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    incrementBy(state, payload) {
      state.count += payload
    },
    decrement(state){
      state.count--
    },
    decrementBy(state, payload) {
      state.count -= payload
    }
  },
  actions: {
    // можно короче используя деструктуризацию
    // increment(context) {
    //   context.commit('increment');
    // },
    // короче с использованием дестируктуризации     increment ({ commit }) {commit('increment')},
    incrementACTION ({ commit }) {
      commit('increment')
    },
    incrementDelay({ commit }){
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  modules: {
  }
})




// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     count: 0,
//     todos: [
//       { id: 1, text: '...', done: true },
//       { id: 2, text: '...', done: false },
//     ]
//   },
//   getters: {
//     doneTodos: state => {
//       return state.todos.filter(todo => todo.done);
//     },
//     doneTodosCount: (state, getters) => {
//       return getters.doneTodos.length
//     },
//     getTodoById: (state) => (id) => {
//       return state.todos.find(todo => todo.id === id)
//     }
//   },
//   mutations: {
//     increment(state) {
//       state.count++
//     },
//     incrementBy(state, n) {
//       state.count += n
//   }
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

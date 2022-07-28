import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getData() {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => console.log(json))
    .then(json => {
      return json
    })
}



const getOtherData = () => {
  let result = undefined
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
  return 'lololololo'
}





export default new Vuex.Store({
  state: {
    count: 0,
    justValue: 123,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
    ],
    data: {},
    otherData: ""

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
    decrement(state) {
      state.count--
    },
    decrementBy(state, payload) {
      state.count -= payload
    },
    someMutation(state) {
      state.justValue = state.justValue * 2
    },
    someOtherMutation(state) {
      state.justValue = state.justValue * 1000
    },
    gotData(state, payload) {
      console.log('mutation - gotData')
      console.log("payload", payload)
      state.data = payload
    },
    gotOtherData(state, payload) {
      state.otherData = payload
    }
  },
  actions: {
    // можно короче используя деструктуризацию
    // increment(context) {
    //   context.commit('increment');
    // },
    // короче с использованием дестируктуризации     increment ({ commit }) {commit('increment')},
    incrementACTION({ commit }) {
      commit('increment')
    },
    incrementDelay({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    actionA({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('someMutation')
          resolve()
        }, 1550)
      })
    },
    actionB({ dispatch, commit }) {
      return dispatch('actionA').then(() => {
        commit('someOtherMutation')
      })
    },
    async actionC({ commit }) {
      commit('gotData', await getData())
    },
    async actionD({ dispatch, commit }) {
      await dispatch('actionС') // дожидаемся завершения действия `actionC`
      commit('gotOtherData', await getOtherData())
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

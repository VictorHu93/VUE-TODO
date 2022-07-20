import Vue from 'vue'
import Vuex from 'vuex'

import Localbase from 'localbase'
let db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [
      // { id: 1, titulo: "Ir ao mercado", concluido: false  },
      // { id: 2, titulo: "Estudar vue.js", concluido: false },
    ]
  },
  mutations: {
    buscaTarefas(state){
      db.collection('tarefas').get().then(tarefasDB => {
        state.tarefas = tarefasDB
      })
    },

    adicionaTarefa(state, titulo,) {

      db.collection('tarefas').add({
        id: new Date().getTime(),
        titulo,
        concluido: false
      
      })
      
      // if (titulo) {
      //   state.tarefas.push({
      //     id: new Date().getTime(),
      //     titulo,
      //     concluido: false

      //   })
      // }
    },
    // removeTarefa(state, id){
    // state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    // },

    concluiTarefa(state, tarefaId){
      state.tarefas = 
      state.tarefas.map(tarefa => {
        if (tarefa.id === tarefaId) {
          tarefa.concluido = !tarefa.concluido
        }

        return tarefa
      })
    },
    // editaTarefa(state, novaTarefa){
    //   // let tarefa = state.tarefas.filter(tarefa => tarefa.id ==   novaTarefa.id)[0] 
    //   // tarefa.titulo = novaTarefa.titulo;

    //   db.collection('tarefas').doc({ id: novaTarefa.id }).update({
    //     titulo: novaTarefa.titulo
    //   })
    // },
  },
  actions: {
   async adicionaTarefa({commit}, titulo){
     await commit('adicionaTarefa', titulo)
     await commit('buscaTarefas')
    },
    editaTarefa({commit}, novaTarefa){
      db.collection('tarefas').doc({ id: novaTarefa.id }).update({
        titulo: novaTarefa.titulo
      }).then(() => {
        commit('buscaTarefas')
      });
    },
    removeTarefa({commit}, id){
      db.collection('tarefas').doc({ id }).delete().then(() => {
        commit('buscaTarefas')
      })
    }
  },
  modules: {
  },
});

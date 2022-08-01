import db from "@/services/localbase"

export default {
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
    }
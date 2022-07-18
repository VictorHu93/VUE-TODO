<template>
  <div class="pa-7 grey darken-4 text-no-wrap" >
    <v-row class="text-center" justify="center">
    <v-col cols="12" sm="6" md="6" >
      <v-text-field 
      dark
      v-model="campoInput"
      label="Add a task" 
      placeholder="" 
      filled rounded dense 
      @keyup.enter="handleAddTarefa"
      >
      </v-text-field>
    </v-col>
    </v-row>

    <v-list flat subheader class="grey darken-4">
      <v-subheader></v-subheader>
      <v-list-item-group  multiple active-class="">

        <div v-for="tarefa, index in $store.state.tarefas" :key="index">
          <Tarefa :tarefa="tarefa" />
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import Tarefa from '../components/tarefas/Tarefa.vue'


export default {
  name: 'HomePersonal',
  components: {
    Tarefa
  },
  data() {
    return {
      campoInput: null,
    }
  },
  methods:{
    handleAddTarefa(){
      this.$store.commit('adicionaTarefa', this.campoInput)
        this.campoInput = null;
      }
    }
  }
</script>



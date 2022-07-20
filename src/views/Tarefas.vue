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
    <ListaDeTarefas />
  </div>
</template>

<script>
import ListaDeTarefas from '@/components/tarefas/ListaDeTarefas.vue'


export default {
  name: 'HomePersonal',
  components: {
    ListaDeTarefas
},
  data() {
    return {
      campoInput: null,
    }
  },
  created(){
    this.$store.commit('buscaTarefas')
  },
  methods:{
    handleAddTarefa(){
      // this.$store.commit('adicionaTarefa', this.campoInput)
      this.$store.dispatch('adicionaTarefa', this.campoInput)
        this.campoInput = null;
      }
    }
  }
</script>



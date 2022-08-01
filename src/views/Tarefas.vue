<template>
  <div>
    <InputTarefa />
    <ListaDeTarefas />
    <div
    v-if="!$store.state.tarefas.length"
    class="mt-16 animate__animated animate__bounceInUp"
    >
      <center>
      <v-icon
      size="100"
      color="white"
      >
        mdi-check
      </v-icon>
      <div class="text-h5 white--text">
        {{$t('message.Nenhuma_Tarefa')}}
      </div>

      </center>
    </div>
  </div>
</template>

<script>
import ListaDeTarefas from '@/components/tarefas/ListaDeTarefas.vue'
import InputTarefa from '@/components/InputTarefa.vue'

export default {
  name: 'HomePersonal',
  components: {
    ListaDeTarefas,
    InputTarefa

},
  created(){
    this.$store.commit('buscaTarefas')
  },
  }
</script>



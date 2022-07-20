<template>
<v-row class="text-center " justify="center" >
    <v-col cols="12" md="6" sm="6">   
      <div class="rounded pink">
    <v-list-item dark
    @click="concluiTarefa(tarefa.id)"
    >
          <template v-slot:default="{}">
            <v-list-item-action>
              <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content  >
              <v-list-item-title 
              :class="{'text-decoration-line-through':tarefa.concluido}"
              >{{tarefa.titulo}}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
          <!-- <v-btn icon
          @click.stop="handleRemoveTarefa(tarefa.id)"
          >
            <v-icon color="white">mdi-trash-can</v-icon>
          </v-btn> -->
          <TarefaMenu 
          :tarefa="tarefa"
          />
        </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
</v-col>
</v-row>
</template>

<script>
import TarefaMenu from "./TarefaMenu.vue"

export default {
  components: {TarefaMenu},
  name: 'TarafaList',
  props:['tarefa'],
  methods:{
    handleRemoveTarefa(id){
      this.$store.commit('removeTarefa', id)

    },
    concluiTarefa(id){
      this.$store.commit('concluiTarefa', id)
    },
  }
}
</script>

<style scoped>

</style>
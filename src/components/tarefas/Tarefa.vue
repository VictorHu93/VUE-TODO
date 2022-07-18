<template>
<v-row class="text-center " justify="center" >
    <v-col cols="12" md="6" sm="6">   
      <div class="grey darken-3 rounded">
    <v-list-item dark
    :class="{'grey darken-3 rounded':tarefa.concluido}"
    @click="tarefa.concluido = !tarefa.concluido"
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
          <v-btn icon
          @click.stop="handleRemoveTarefa(tarefa.id)"
          >
            <v-icon color="white">mdi-trash-can</v-icon>
          </v-btn>
        </v-list-item-action>
          </template>
        </v-list-item>
      </div>
</v-col>
</v-row>
</template>

<script>
export default {
  name: 'TarafaList',
  props:['taref'],
  methods:{
    handleRemoveTarefa(id){
      this.$store.commit('removeTarefa', id)

    }
  }
}
</script>

<style scoped>

</style>
<template>
<div class="pa-7 grey darken-4 text-no-wrap" >
    <v-row class="text-center" justify="center">
    <v-col cols="12" sm="6" md="6" >
      <v-text-field 
      dark
      v-model="campoInput"
      :label= "$t('message.Escreva_a_Tarefa')" 
      placeholder="" 
      filled rounded dense 
      @keyup.enter="handleAddTarefa"
      >
      </v-text-field>
    </v-col>
    </v-row>

</div>
</template>

<script>
export default {
      data() {
    return {
      campoInput: null,
    }
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

<style>

</style>
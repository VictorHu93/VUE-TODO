<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="290">
            <v-card>
                <v-card-title class="text-h5">
                    {{ $t('message.Editar') }}
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="mt-2">{{$t('message.titulo')}}</v-card-text>

                <v-text-field class="px-3" label="" outlined v-model="titulo"
                ></v-text-field>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="$emit('fechaModal')">
                        {{$t('message.Cancelar')}}
                    </v-btn>
                    <v-btn color="green darken-1" text @click="handleEditar()">
                        {{$t('message.Editar')}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props:['tarefa'],
    data() {
        return {
            dialog: true,
            titulo: null
        }
    },
    created(){
        this.titulo = this.tarefa.titulo
    },
    methods:{
        handleEditar(){
            let novaTarefa = {
                titulo : this.titulo,
                id: this.tarefa.id
            }
            this.$store.dispatch('editaTarefa', novaTarefa);
            this.$emit('fechaModal');
        }
    }
}
</script>
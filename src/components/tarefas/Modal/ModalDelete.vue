<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="290">
            <v-card>
                <v-card-title class="text-h5">
                    {{$t('message.Excluir')}}
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="mt-2">{{$t('message.certeza')}}</v-card-text>
                
            
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="$emit('fechaModal')">
                        {{$t('message.Cancelar')}}
                    </v-btn>
                    <v-btn color="green darken-1" text @click="handleDeleta()">
                        {{$t('message.Excluir')}}
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
        }
    },
    methods:{
        handleDeleta(){
            this.$store.dispatch('removeTarefa', this.tarefa.id);
            this.$emit('fechaModal');
        }
    }
}
</script>
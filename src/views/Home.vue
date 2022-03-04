<template>
    <v-content class="mx-6">
        <v-card>
                <v-toolbar class="primary" dense dark>
                    <v-toolbar-title 
                        class="font-weight-medium"
                    >
                        <v-icon class="mr-2 pb-1">mdi-face-woman-shimmer-outline</v-icon>
                        Customers
                    </v-toolbar-title>
                    <v-spacer/>
                    <v-btn 
                        icon small
                        class="white mr-0"
                    >
                        <v-icon color="primary">mdi-plus</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text class="pa-4 py-8 pb-0">
                    <v-form ref="formSearch">
                        <label class="font-weight-bold black--text body-2">Buscador</label>
                        <v-row class="mt-3">
                            <v-col class="row" cols="12" md="5">
                                <v-text-field 
                                    dense outlined
                                    v-model="params.search"
                                    :rules="[rules.min_3]"
                                    placeholder="Ingresa nombre o celular"
                                    clearable
                                    @click:clear="clear"
                                >
                                </v-text-field>
                                <v-btn 
                                    :icon="$vuetify.breakpoint.mobile"
                                    class="ml-4 yellow"
                                    @click.prevent="load" 
                                    :disabled="isBtnActive"
                                >
                                    <v-icon :class="$vuetify.breakpoint.mobile?'':'mr-2'">mdi-plus</v-icon>
                                    <span v-if="!$vuetify.breakpoint.mobile">Buscar</span>
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-divider class="mb-6"/>
                    </v-form>
                </v-card-text>
                <v-card-text class="pa-4 py-8 pt-0">
                        <span class="body-2 black--text font-weight-bold">
                            Resultados de la busqueda
                        </span>
                        <div v-if="overlay">
                             <v-row class="justify-center">
                                <v-progress-circular
                                    :size="50"
                                    :width="5"
                                    color="primary"
                                    indeterminate
                                />
                            </v-row>
                            <v-row class="justify-center mt-6">
                                <span class="black--text">Cargando resultados...</span>
                            </v-row>
                        </div>
                        <v-row class="ma-0 pa-0 mt-3" v-if="!overlay && customers.data.length>0">
                            <v-spacer/>
                            <v-pagination
                                v-model="params.page"
                                class="ma-0 pa-0"
                                :total-visible="customers.per_page"
                                :length="customers.last_page"
                            />
                        </v-row>
                        <v-row v-if=" !overlay && customers.data.length > 0 ">
                            <v-col 
                                class="ma-0 pa-0 mb-3 pa-1"
                                cols="12" md="4" 
                                v-for="(customer, indexC) in customers.data" 
                                :key="indexC"
                            >
                                <v-card>
                                    <v-toolbar
                                        dark class="gray"
                                    >
                                        <v-toolbar-title class="ma-0 pa-0">
                                            <span class="text-truncate text-uppercase text-decoration-underline">
                                                {{customer.name}}
                                            </span>
                                            <br>
                                            <span class="text-truncate" v-if="customer.email">
                                                {{customer.email}}
                                            </span>
                                        </v-toolbar-title>
                                    </v-toolbar>
                                    <v-card-text>
                                        <v-row>
                                            <v-col cols="6" class="black--text">
                                                <span class="row justify-center">Celular</span>
                                                <span 
                                                    class="row justify-center" 
                                                    v-if="customer.cellphone_format"
                                                >
                                                    {{customer.cellphone_format}}
                                                    <v-icon 
                                                        v-if="customer.cliente_repetido"
                                                        class="ml-2" color="green"
                                                    >
                                                        mdi-check-circle
                                                    </v-icon>
                                                    <v-icon 
                                                        v-if="customer.verified_cellphone"
                                                        class="ml-2" color="danger"
                                                    >
                                                        mdi-alert
                                                    </v-icon>
                                                </span>
                                                <span 
                                                    class="row justify-center"
                                                    v-else
                                                >
                                                    N/D
                                                </span>
                                            </v-col>
                                            <v-col cols="6" class="black--text">
                                                <span class="row justify-center">Ticket más alto</span>
                                                <span 
                                                    v-if="customer.highest_ticket_amount != '0.00'"
                                                    class="row justify-center"
                                                >
                                                    {{customer.highest_ticket_amount_format}}
                                                </span>
                                                <span 
                                                    v-else
                                                    class="row justify-center"
                                                >
                                                    N/D
                                                </span>
                                            </v-col>
                                        </v-row>
                                        <v-divider class="my-4"/>
                                        <v-row>
                                            <v-col cols="6" class="black--text">
                                                <span class="row justify-center">Periodo sin compra</span>
                                                <span class="row justify-center">
                                                    {{customer.period_without_purchase_human_format}}
                                                </span>
                                            </v-col>
                                            <v-col cols="6" class="black--text">
                                                <span class="row justify-center">Último contacto</span>
                                                <span class="row justify-center" v-if="customer.last_contact">
                                                    <v-icon 
                                                        color="yellow" 
                                                        class="mr-2"
                                                        v-if="customer.last_contact.last_contact_diff_months<=2"
                                                    >
                                                        mdi-alert-octagon
                                                    </v-icon>
                                                    {{customer.last_contact.last_contact_human_format}}
                                                </span>
                                                <span 
                                                    class="row justify-center"
                                                    v-else
                                                >
                                                    N/D
                                                </span>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row 
                            class="mt-6"
                            v-if="!overlay && customers.data.length==0"
                        >
                            <span class="black--text">Sin resultados...</span>
                        </v-row>
                </v-card-text>
        </v-card>
    </v-content>
</template>
<script>
    import { mapState } from 'vuex';
    export default{
        name: 'Home',
        data: () => ({
            isBtnActive: true,
            isSearch: true,
            params: {
                page: 1, 
                search: null,
                only_search: 0
            },
            
        }),
        computed:{
            ...mapState({
                rules: state => state.orkestra.rules,
                customers: state => state.orkestra.customers,
                overlay: state => state.orkestra.overlay,
            })
        },
        watch: {
            'params.search': function(newval){
                
                if ( this.$refs.formSearch.validate() && newval != null ) {
                    this.isBtnActive = false;
                    this.params.only_search = 1;
                    return;
                }
                
                this.isBtnActive = true;
                this.params.only_search = 0;
            },
            'params.page': function(){
                this.load()
            }
        },

        beforeMount(){
            this.load();
        },
        methods:{
            async clear(){
                this.isBtnActive = true;
                this.params.search = null;
                this.params.only_search = 0;
                this.$refs.formSearch.resetValidation();
                this.load();
            },
            load(){
                if ( this.params.search != null && this.params.search != '') {
                    this.params.only_search = 1;
                }

                this.$store.dispatch('orkestra/getCustomers', this.params);
            },
        }
    }
</script>
<style>
    .row, .col, .col-md-5{
        padding: 0px;
        margin: 0px;
    }
</style>
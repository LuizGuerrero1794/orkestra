<template>
    <v-app>
        <Navbar/>
        <v-main>
            <v-container fluid style="max-width: 100%">
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import Navbar from '@/components/Navbar.vue';

    export default {
        name: 'Full',
        components: {
            Navbar,
        },
        data: () => ({

        }),
        computed:{
           
        },
        beforeMount(){
            
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@300&display=swap');
    
    .raleway{
        font-family: "Raleway";
        font-style: normal;
    }
</style>
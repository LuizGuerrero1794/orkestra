<template>
    <v-app-bar dense :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary" dark>
        <v-app-bar-nav-icon 
            class="mr-2"
            @click.stop="$store.state.administracion.mini = !$store.state.administracion.mini"
        />
        <!-- LOGO CMDB Y TITULO -->
        <!--<v-img 
            max-width="200px"
            src='/img/orkestra-logo.png'
        />-->
        <v-spacer/>
        <MenuProfile />
    </v-app-bar>
</template>
<script>
    import MenuProfile from '@/components/MenuProfile';
    export default{
        components:{
            MenuProfile
        }
    }
</script>
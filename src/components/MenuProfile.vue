<template>
    <v-menu :close-on-content-click="false" :nudge-width="100" offset-y>
        <template v-slot:activator="{ on, attrs }">
            <v-avatar class="mx-3" v-bind="attrs" v-on="on">
                <v-icon large>mdi-account-circle</v-icon>
            </v-avatar>
        </template>
        <v-list>
            <v-list-item dense>
                <v-list-item-title>
                    Cerrar Sesión
                </v-list-item-title>
                <v-list-item-icon>
                    <v-icon color="danger">mdi-power</v-icon>
                </v-list-item-icon>
            </v-list-item>
        </v-list>
    </v-menu>
</template>
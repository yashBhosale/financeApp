<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <!-- The sidebar with the shelf -->
      <v-list dense>
        <v-list-tile @click="hello">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="hello">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <!-- The toolbar at the top - houses the hamburger menu and the word "application" -->
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>

    <!-- The actual body - here I'm instantating a DatabaseTable from ./components/DatabaseTable.js -->
    <v-content>
      <DatabaseTable/>
    </v-content>
    
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import DatabaseTable from './components/DatabaseTable'
// vue syntax looks weird and arcane at first but it's easy once you grow accustomed to it. 
// The main issue that I've had with it is that sometimes i forget what I'm supposed to write as  
// a normal function versus as a lambda function.  
  export default {
    name: 'App',
    components: {
        DatabaseTable
    },
    data :() =>{
        return {
          drawer: false
        }
    },
    props: {
      source: String
    },
    methods:{
      hello: function() {
        alert("hello!");
      }
    }
  }
</script>

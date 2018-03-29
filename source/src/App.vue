<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-items>
        <v-btn large to="/">{{title}}</v-btn>
      </v-toolbar-items>
      <v-btn style="display:none;" flat to="/sandbox">Sandbox</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="true"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-card>
        <v-toolbar>
          <v-toolbar-title>Power Options</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-icon>fitness_center</v-icon>
        </v-toolbar>
        <v-list>
          <v-list-tile @click="onDisplayRawData">
            <v-list-tile-action>
              <v-icon>visibility</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Display Raw Data</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="onOverwriteData">
            <v-list-tile-action>
              <v-icon>border_color</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Overwrite Data</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="onClearCache">
            <v-list-tile-action>
              <v-icon color="red">power_settings_new</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Clear Cache</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>

    <v-dialog v-model="purgeDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">WARNING!</v-card-title>
        <v-card-text>Are you sure you want to delete your data? This action is irreversible!</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click.native="purgeDialog = false">No way!</v-btn>
          <v-btn color="red darken-1" flat @click.native="onPurgeData">Sure</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="showDataDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Raw Data</v-card-title>
        <v-card-text>{{$store.getters['trialGroups/displayData']}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click.native="showDataDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="editDataDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Raw Data</v-card-title>
        <v-card-text>
          <v-text-field
            multi-line
            :value="rawData"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click.native="editDataDialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      fixed: false,
      rightDrawer: false,
      title: 'Wonderland Trial',
      purgeDialog: false,
      showDataDialog: false,
      editDataDialog: false
    }
  },
  name: 'App',
  computed: {
    rawData() {
      return JSON.stringify(this.$store.getters['trialGroups/displayData'])
    }
  },
  methods: {
    onDisplayRawData() {
      this.showDataDialog = true
    },
    onOverwriteData() {
      this.editDataDialog = true
    },
    onClearCache() {
      this.purgeDialog = true
    },
    onPurgeData() {
      this.purgeDialog = false
      this.$store.dispatch('purge')
    }
  }
}
</script>

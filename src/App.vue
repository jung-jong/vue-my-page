<template>
  <v-app>
    <header-bar></header-bar>
    <side-nav></side-nav>

    <!-- Sizes your content based upon application components -->
    <v-main class="main">
      <!-- Provides the application the proper gutter -->
      <v-container class="container" fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import SideNav from "@/components/SideNav.vue";

export default {
  name: "App",
  components: {
    HeaderBar,
    SideNav,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>

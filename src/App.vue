<template>
  <v-app>
    <header-bar class="header"></header-bar>
    <side-nav class="snb"></side-nav>

    <!-- Sizes your content based upon application components -->
    <v-main class="main">
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="px-10 py-10">
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
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

<style lang="scss">
@import "@/assets/scss/index.scss";
</style>

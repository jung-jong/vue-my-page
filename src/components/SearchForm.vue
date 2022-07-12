<template>
  <div class="search-wrap">
    <img src="@/assets/icons/icon_search.png" alt="" class="search-img" />
    <input class="search" type="text" placeholder="Search" />
    <img src="@/assets/icons/icon_content_add.png" alt="" />
    <img src="@/assets/icons/icon_thumbnails.png" alt="" />
    <img src="@/assets/icons/icon_list.png" alt="" />
    <v-menu bottom transition="slide-y-transition" content-class="select">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="select-btn" color="white" v-bind="attrs" v-on="on">
          <span class="select-option">{{ selected }}</span>
          <img
            src="@/assets/icons/icon_menu_expand.png"
            alt=""
            class="select-img"
          />
        </v-btn>
      </template>

      <v-list class="options">
        <v-list-item-group active-class="options-active">
          <v-list-item v-for="(serchOption, index) in serchOption" :key="index">
            <v-list-item-title @click="selectedOption(serchOption.option)">
              {{ serchOption.option }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
    };
  },
  props: { serchOption: Array },
  methods: {
    selectedOption(value) {
      this.$emit("selected", value);
      return (this.selected = value);
    },
  },
  mounted() {
    this.selected = this.serchOption[0].option;
  },
};
</script>

<style lang="scss" scoped></style>

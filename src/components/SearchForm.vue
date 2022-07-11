<template>
  <div class="search-wrap">
    <img src="@/assets/icons/icon_search.png" alt="" class="search-img" />
    <input class="search" type="text" placeholder="Search" />
    <img src="@/assets/icons/icon_content_add.png" alt="" />
    <img src="@/assets/icons/icon_thumbnails.png" alt="" />
    <img src="@/assets/icons/icon_list.png" alt="" />
    <!-- <select name="" id="" class="search-select">
      <option value="이름순">이름순</option>
    </select> -->
    <!-- <v-select
      class="search-select"
      :items="text.option"
      hide-details="auto"
      outlined
      hide-spin-buttons
      :append-icon="false"
      height="100%"
    ></v-select> -->
    <v-menu bottom transition="slide-y-transition" content-class="select">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="select-btn" color="white" v-bind="attrs" v-on="on">
          <input type="text" readonly v-model="selected" />
          <img
            src="@/assets/icons/icon_menu_expand.png"
            alt=""
            class="select-img"
          />
        </v-btn>
      </template>

      <v-list class="options">
        <v-list-item-group active-class="options-active">
          <v-list-item>
            <v-list-item-title @click="selectedOption(text.option)">{{
              text.option
            }}</v-list-item-title>
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
      text: { option: "이름순" },
      selected: null,
    };
  },
  methods: {
    selectedOption(value) {
      this.selected = value;
    },
  },
};
</script>

<style lang="scss" scoped></style>

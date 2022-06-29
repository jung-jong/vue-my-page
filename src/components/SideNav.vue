<template>
  <v-navigation-drawer app absolute>
    <v-list class="py-10 pe-5">
      <v-list-item-group v-model="model">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideNav",
  data() {
    return {
      items: [
        {
          icon: "mdi-inbox",
          text: "HOME",
        },
        {
          icon: "mdi-star",
          text: "내 창작공간",
        },
        {
          icon: "mdi-send",
          text: "E-마이보드",
        },
        {
          icon: "mdi-email-open",
          text: "내 업로드",
        },
        {
          icon: "mdi-email-open",
          text: "휴지통",
        },
      ],
      model: 0,
    };
  },
};
</script>

<style lang="scss" scoped></style>

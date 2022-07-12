<template>
  <v-navigation-drawer class="snb" app absolute permanent floating>
    <v-list class="list" flat>
      <v-list-item-group v-model="model">
        <v-list-item class="item" active-class="active" to="/" link>
          <div class="icon">
            <img
              src="@/assets/icons/icon_menu_home.png"
              alt=""
              v-if="$route.path !== '/'"
            />
            <img
              src="@/assets/icons/icon_menu_home_on.png"
              alt=""
              v-if="$route.path == '/'"
            />
          </div>
          <v-list-item-content>
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          class="item"
          active-class="active"
          to="/my-creative-space"
          link
        >
          <div class="icon">
            <img
              src="@/assets/icons/icon_menu_my_space.png"
              alt=""
              v-if="$route.path !== '/my-creative-space'"
            />
            <img
              src="@/assets/icons/icon_menu_my_space_on.png"
              alt=""
              v-if="$route.path == '/my-creative-space'"
            />
          </div>
          <v-list-item-content>
            <v-list-item-title>내 창작공간</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="item" active-class="active" to="/e-myboard" link>
          <div class="icon">
            <img
              src="@/assets/icons/icon_menu_e_myboard.png"
              alt=""
              v-if="$route.path !== '/e-myboard'"
            />
            <img
              src="@/assets/icons/icon_menu_e_myboard_on.png"
              alt=""
              v-if="$route.path == '/e-myboard'"
            />
          </div>
          <v-list-item-content>
            <v-list-item-title>E-마이보드</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="item" active-class="active" to="/my-upload" link>
          <div class="icon">
            <img
              src="@/assets/icons/icon_menu_my_upload.png"
              alt=""
              v-if="$route.path !== '/my-upload'"
            />
            <img
              src="@/assets/icons/icon_menu_my_upload_on.png"
              alt=""
              v-if="$route.path == '/my-upload'"
            />
          </div>
          <v-list-item-content>
            <v-list-item-title>내 업로드</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="item" active-class="active" to="/trash" link>
          <div class="icon">
            <img
              src="@/assets/icons/icon_menu_waste_basket.png"
              alt=""
              v-if="$route.path !== '/trash'"
            />
            <img
              src="@/assets/icons/icon_menu_waste_basket_on.png"
              alt=""
              v-if="$route.path == '/trash'"
            />
          </div>
          <v-list-item-content>
            <v-list-item-title>휴지통</v-list-item-title>
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
      menu: [
        {
          icon: "@/assets/icons/icon_menu_home_on.png",
          text: "HOME",
        },
        {
          icon: "@/assets/icons/icon_menu_home_on.png",
          text: "내 창작공간",
        },
        // {
        //   icon: "mdi-send",
        //   text: "E-마이보드",
        // },
        // {
        //   icon: "mdi-email-open",
        //   text: "내 업로드",
        // },
        // {
        //   icon: "mdi-email-open",
        //   text: "휴지통",
        // },
      ],
      model: 0,
      active: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>

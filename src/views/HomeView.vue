<template>
  <div>
    <div class="d-flex justify-space-between">
      <div class="d-flex align-center">
        <span class="search-title color">개인</span>
        <span class="search-title">에 대한 검색결과</span>
        <span class="search-title count">&nbsp;(총 건)</span>
      </div>

      <search-form></search-form>
    </div>

    <div class="d-flex justify-space-between subtitle">
      <span class="text-subtitle-1">최근사용</span>
      <span class="text-subtitle-1">더보기</span>
    </div>

    <v-row class="mb-5">
      <v-col>
        <v-card
          class="card"
          :class="{ active: activeCard }"
          max-width="300px"
          @click="
            {
              activeCard = !activeCard;
            }
          "
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
          </v-img>

          <div class="card-btn" @click.stop="">
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mr-3"
                  color="deep-purple lighten-3"
                  fab
                  x-small
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon color="white">mdi-share-variant-outline</v-icon>
                </v-btn>
              </template>
            </v-menu>

            <v-menu
              :close-on-content-click="false"
              offset-y
              content-class="drop-menu"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="white"
                  fab
                  x-small
                  v-bind="attrs"
                  v-on="on"
                  @click="showEditMenu = !showEditMenu"
                >
                  <v-icon id="edit-btn" color="deep-purple lighten-3"
                    >mdi-dots-horizontal</v-icon
                  >
                </v-btn>
              </template>

              <v-list class="edit-menu">
                <v-list-item-group active-class="edit-active">
                  <v-list-item>
                    <div class="edit-icon">
                      <img src="@/assets/icons/icon_list_name.png" alt="" />
                    </div>
                    <v-list-item-title>이름 수정</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <div class="edit-icon">
                      <img
                        src="@/assets/icons/icon_list_folder_move.png"
                        alt=""
                      />
                    </div>
                    <v-list-item-title>폴더 이동</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <div class="edit-icon">
                      <img
                        src="@/assets/icons/icon_list_share_url.png"
                        alt=""
                      />
                    </div>
                    <v-list-item-title @click="showUrlMenu = !showUrlMenu"
                      >공유 URL</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item>
                    <div class="edit-icon">
                      <img
                        src="@/assets/icons/icon_list_duplication.png"
                        alt=""
                      />
                    </div>
                    <v-list-item-title>사본 저장</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <div class="edit-icon">
                      <img
                        src="@/assets/icons/icon_list_waste_basket.png"
                        alt=""
                      />
                    </div>
                    <v-list-item-title>삭제</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>

              <v-list class="url-menu" elevation="3" v-show="showUrlMenu">
                <v-list-item>
                  <v-list-item-title class="url-title"
                    >공유 URL</v-list-item-title
                  >
                </v-list-item>
                <v-list-item class="url-menu-item">
                  <v-list-item-title class="url-title-sub"
                    >공유 URL 사용</v-list-item-title
                  >
                  <v-list-item-action>
                    <v-switch color="purple"></v-switch>
                  </v-list-item-action>
                </v-list-item>
                <v-list-item class="url-menu-item">
                  <v-list-item-title class="url-title-sub"
                    >공유 URL</v-list-item-title
                  >
                  <v-btn elevation="1" small outlined>URL 복사</v-btn>
                </v-list-item>
                <v-text-field
                  class="text"
                  solo
                  readonly
                  flat
                  hide-details="auto"
                  :value="localAdmin"
                  >URL 복사</v-text-field
                >
              </v-list>
            </v-menu>
          </div>

          <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>
          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <div class="d-flex justify-space-between subtitle">
      <span class="text-subtitle-1"
        >E-마이보드 검색결과(총 {{ searchCount }}건)</span
      >
      <span class="text-subtitle-1">더보기</span>
    </div>

    <!-- <v-row class="mb-5">
      <v-col >
      </v-col>
    </v-row> -->
    <div class="d-flex">
      <v-card
        class="card mr-5"
        width="300px"
        v-for="(myBoard, index) in myBoard"
        :key="index"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          width="100%"
          :src="myBoard.THUMB_URL"
          :lazy-src="myBoard.THUMB_URL"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <div class="d-flex flex-column pa-5">
          <span class="font-weight-bold text--primary pb-3">
            {{ myBoard.CONTENTS_NAME }}
          </span>
          <span class="text-caption text--secondary">
            최근 수정일: {{ $dateFormat(myBoard.A_DATE) }}
          </span>
          <span class="text-caption text--secondary">
            위치 : 개인작업 > 하위폴더 > 테스트 > 폴더
          </span>
        </div>
      </v-card>
    </div>

    <div class="d-flex justify-space-between subtitle">
      <span class="text-subtitle-1">내 업로드 검색결과(총 건)</span>
      <span class="text-subtitle-1">더보기</span>
    </div>
  </div>
</template>

<script>
import mixin from "@/mixins.js";
import SearchForm from "@/components/SearchForm.vue";

export default {
  components: { SearchForm },
  name: "HomeView",
  data() {
    return {
      myBoard: [],
      localAdmin: "http://localhost/admin/",
      activeCard: false,
      items: [
        { title: "이름 수정" },
        { title: "폴더 이동" },
        { title: "공유 URL" },
        { title: "사본 저장" },
        { title: "삭제" },
      ],
      showEditMenu: false,
      showUrlMenu: false,
    };
  },
  mixins: [mixin],
  computed: {
    searchCount() {
      return this.myBoard.length;
    },
  },
  methods: {
    getMyBoard() {
      this.$axios.get("/my-page/api/my-board.php").then((response) => {
        this.myBoard = response.data;
      });
    },
    urlMenuOpen(value, event) {
      // console.log(event.target.textContent);
      if (value === "공유 URL") {
        this.showUrlMenu = !this.showUrlMenu;
      }
    },
    editMenuOutClick(event) {
      // const btn = document.querySelector("#edit-btn");
      // const edit = document.querySelector(".edit-menu");
      // if (event.target === btn) return;
      // this.showEditMenu = false;
    },
  },
  mounted() {
    this.getMyBoard();
    window.addEventListener("click", this.editMenuOutClick);
  },
};
</script>

<style lang="scss" scoped></style>

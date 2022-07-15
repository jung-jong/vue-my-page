<template>
  <div>
    <div class="d-flex justify-space-between">
      <!-- <div class="d-flex align-center">
        <span class="search-title color">개인</span>
        <span class="search-title">에 대한 검색결과</span>
        <span class="search-title date">&nbsp;(총 건)</span>
      </div> -->

      <search-form :serchOption="select"></search-form>
    </div>

    <!-- <div class="d-flex justify-space-between mb-5">
      <span class="sub-title">최근사용</span>
      <span class="sub-title color">더보기 +</span>
    </div> -->

    <div class="d-flex flex-wrap">
      <popup-folder
        :title="'신규 폴더 생성'"
        :contentsTitle="'폴더명'"
        :showInputText="true"
        :btnText="'생성'"
      ></popup-folder>

      <popup-folder
        :title="'폴더 이름 수정'"
        :contentsTitle="'폴더명'"
        :showInputText="true"
        :btnText="'변경'"
      ></popup-folder>

      <popup-folder
        :title="'폴더 삭제'"
        :folderName="'folder'"
        :contentsTitle="'폴더를 삭제하시겠습니까?'"
        :btnText="'삭제'"
        :folderCount="3"
      ></popup-folder>

      <popup-folder
        :title="'배경색 적용'"
        :contentsTitle="'선택된 배경색을 적용하시겠습니까?'"
        :btnText="'확인'"
      ></popup-folder>

      <popup-folder-move
        :id="'user1'"
        :currentFolder="'테스트'"
        :folderList="folderList"
      ></popup-folder-move>

      <popup-url :url="localAdmin"></popup-url>
    </div>

    <div class="contents-wrap">
      <div class="d-flex">
        <span class="sub-title">최근 작업 디자인</span>
        <span class="sub-title date">&nbsp;(15일)</span>
      </div>

      <div class="contents">
        <img
          class="img"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          alt=""
        />

        <div class="contents-btn" @click.stop="">
          <v-menu offset-y :close-on-content-click="false">
            <template v-slot:activator="{ on, attrs }">
              <div v-bind="attrs" v-on="on">
                <img src="@/assets/icons/icon_thumb_share.png" alt="" />
              </div>
            </template>
          </v-menu>

          <v-menu
            :close-on-content-click="false"
            offset-y
            content-class="drop-menu"
          >
            <template v-slot:activator="{ on, attrs }">
              <div
                v-bind="attrs"
                v-on="on"
                @click="showEditMenu = !showEditMenu"
              >
                <img src="@/assets/icons/icon_thumb_menu.png" alt="" />
              </div>
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
                    <img src="@/assets/icons/icon_list_share_url.png" alt="" />
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

        <div class="d-flex flex-column">
          <span class="contents-title">테스트</span>
          <span class="contents-text">최근수정일 : 0000-00-00</span>
          <span class="contents-text">위치 : 개인작업</span>
        </div>
      </div>
    </div>

    <div class="contents-wrap">
      <div class="d-flex justify-space-between">
        <span class="sub-title">내 창작공간</span>
        <span class="sub-title color">더보기 +</span>
      </div>

      <div class="contents">
        <img
          class="img"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          alt=""
        />

        <div class="d-flex flex-column">
          <span class="contents-count">항목 ?개</span>

          <span class="contents-title">테스트</span>
          <span class="contents-text">최근수정일 : 0000-00-00</span>
        </div>
      </div>
    </div>

    <div class="contents-wrap">
      <span class="sub-title">내 업로드</span>

      <div class="contents">
        <img
          class="img"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          alt=""
        />

        <div class="d-flex flex-column">
          <span class="contents-count">항목 ?개</span>

          <span class="contents-title">테스트</span>
          <span class="contents-text">최근수정일 : 0000-00-00</span>
        </div>
      </div>
    </div>

    <!-- <div class="d-flex justify-space-between subtitle">
      <span class="text-subtitle-1"
        >E-마이보드 검색결과(총 {{ searchCount }}건)</span
      >
      <span class="text-subtitle-1">더보기</span>
    </div>

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
    </div> -->
  </div>
</template>

<script>
import mixin from "@/mixins.js";
import SearchForm from "@/components/SearchForm.vue";
import PopupFolder from "@/components/PopupFolder.vue";
import PopupFolderMove from "@/components/PopupFolderMove.vue";
import PopupUrl from "@/components/PopupUrl.vue";

export default {
  components: { SearchForm, PopupFolder, PopupFolderMove, PopupUrl },
  name: "HomeView",
  data() {
    return {
      myBoard: [],
      localAdmin: "http://localhost/admin/",
      activeCard: false,
      showEditMenu: false,
      showUrlMenu: false,
      select: [{ option: "이름순" }, { option: "테스트" }],
      folderList: [
        { name: "개인작업" },
        { name: "테스트" },
        { name: "디자인편집" },
      ],
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
      if (value === "공유 URL") {
        this.showUrlMenu = !this.showUrlMenu;
      }
    },
  },
  mounted() {
    this.getMyBoard();
    window.addEventListener("click", this.editMenuOutClick);
  },
};
</script>

<style lang="scss" scoped></style>

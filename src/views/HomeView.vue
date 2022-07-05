<template>
  <div>
    <div class="d-flex justify-space-between">
      <span class="text-h6">"개인"에 대한 검색결과(총 건)</span>
      <v-form>
        <v-row align-content="center" justify="end">
          <v-col cols="3">
            <v-text-field label="field" solo dense></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-select label="field" dense solo></v-select>
          </v-col>
        </v-row>
      </v-form>
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

          <div class="card-btn">
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

            <v-btn
              color="white"
              fab
              x-small
              @click="showEditMenu = !showEditMenu"
            >
              <v-icon color="deep-purple lighten-3">mdi-dots-horizontal</v-icon>
            </v-btn>

            <div class="edit-menu" v-if="showEditMenu">
              <v-card width="300px" @click.stop="">
                <v-list>
                  <v-list-item-group active-class="" color="indigo">
                    <v-list-item v-for="(item, index) in items" :key="index">
                      <v-list-item-title @click="urlMenuOpen(item.title)"
                        >{{ item.title }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>

              <v-card
                width="300px"
                class="url-menu"
                @click.stop=""
                v-if="showUrlMenu"
              >
                <v-list>
                  <v-list-item>
                    <v-list-item-title>공유 URL</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>공유 URL 사용</v-list-item-title>
                    <v-list-item-action>
                      <v-switch v-model="message" color="purple"></v-switch>
                    </v-list-item-action>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>공유 URL</v-list-item-title>
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
              </v-card>
            </div>
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

export default {
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
    urlMenuOpen(value) {
      if (value === "공유 URL") {
        return (this.showUrlMenu = !this.showUrlMenu);
      }
    },
  },
  mounted() {
    this.getMyBoard();
  },
};
</script>

<style lang="scss" scoped></style>

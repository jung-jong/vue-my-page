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
                  class="me-3"
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

            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="white" fab x-small v-bind="attrs" v-on="on">
                  <v-icon color="deep-purple lighten-3"
                    >mdi-dots-horizontal</v-icon
                  >
                </v-btn>
              </template>

              <v-list>
                <v-list-item-group
                  v-model="model"
                  active-class=""
                  color="indigo"
                >
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title @click="urlMenuOpen()">{{
                      item.title
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>

              <v-card width="300px" class="url-menu">
                <v-list>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>공유 URL</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>

                <v-list>
                  <v-list-item>
                    <v-list-item-title>공유 URL 사용</v-list-item-title>
                    <v-list-item-action>
                      <v-switch v-model="message" color="purple"></v-switch>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-switch v-model="hints" color="purple"></v-switch>
                    </v-list-item-action>
                    <v-list-item-title>Enable hints</v-list-item-title>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn text @click="menu = false"> Cancel </v-btn>
                  <v-btn color="primary" text @click="menu = false">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
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
      <span class="text-subtitle-1">E-마이보드 검색결과(총 건)</span>
      <span class="text-subtitle-1">더보기</span>
    </div>

    <v-row class="mb-5">
      <v-col>
        <v-card class="" max-width="200">
          <v-img
            class="white--text align-end"
            height="150px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
          </v-img>
          <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>
          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <div class="d-flex justify-space-between subtitle">
      <span class="text-subtitle-1">내 업로드 검색결과(총 건)</span>
      <span class="text-subtitle-1">더보기</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      activeCard: false,
      items: [
        { title: "이름 수정" },
        { title: "폴더 이동" },
        { title: "공유 URL" },
        { title: "사본 저장" },
        { title: "삭제" },
      ],
      fav: true,
      menu: false,
      message: false,
      hints: true,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/home.scss";
</style>

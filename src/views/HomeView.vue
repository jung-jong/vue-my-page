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
// import HelloWorld from "../components/HelloWorld";

export default {
  // name: "Home",
  // components: {
  //   HelloWorld,
  // },
};
</script>

<style lang="scss">
@import "@/assets/scss/home.scss";
</style>

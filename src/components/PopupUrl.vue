<template>
  <div class="popup-wrap">
    <v-icon class="popup-close"> mdi-close</v-icon>

    <div class="popup-contents">
      <div class="popup-contents-title-wrap">
        <span class="popup-contents-title">폴더 이동</span>
      </div>

      <div class="popup-contents-wrap">
        <span class="popup-contents-text">공유 URL 사용</span>
        <v-switch
          class="popup-swich"
          inset
          hide-details="auto"
          :color="swichColor"
          v-model="swich"
        ></v-switch>
      </div>

      <div class="popup-contents-wrap">
        <span class="popup-contents-text">공유 URL</span>
        <button class="popup-btn">URL 복사</button>
      </div>

      <input class="popup-input-text" type="text" readonly :value="url" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupUrl",
  props: {
    url: String,
  },
  data() {
    return {
      activeBtn: Number,
      swich: false,
      swichColor: "rgb(160, 150, 240)",
    };
  },
  methods: {
    active(i) {
      this.activeBtn = i;
    },
  },
  mounted() {
    const swich = document.querySelector(".v-input--switch__thumb");
    if (swich.style.color == this.swichColor) {
      swich.style.color = "rgb(255, 255, 255)";
    }
  },
  updated() {
    const swich = document.querySelector(".v-input--switch__thumb");
    if (swich.style.color == this.swichColor) {
      swich.style.color = "rgb(255, 255, 255)";
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixin.scss";
@import "@/scss/popup-url";
</style>

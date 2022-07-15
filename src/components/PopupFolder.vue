<template>
  <div class="popup-wrap">
    <div class="popup-header">
      <span>{{ title }}</span>
      <v-icon class="popup-close"> mdi-close</v-icon>
    </div>

    <div class="popup-contents">
      <div
        class="popup-contents-title-wrap"
        :style="[
          title == '폴더 삭제'
            ? { justifyContent: 'center' }
            : '' || title == '배경색 적용'
            ? { justifyContent: 'center' }
            : '',
        ]"
      >
        <span class="popup-folder-name" v-if="title == '폴더 삭제'">
          {{ folderName }}&nbsp;
        </span>
        <span class="popup-contents-title">{{ contentsTitle }}</span>
      </div>

      <span class="popup-contents-text" v-if="title == '폴더 삭제'">
        해당 폴더에는
        <span class="popup-folder-count">총 {{ folderCount }}개</span>
        콘텐츠가 저장되어 있으며,<br />
        폴더 삭제시 함께 삭제됩니다.
      </span>

      <input
        class="popup-input-text"
        type="text"
        placeholder="생성할 폴더 이름"
        v-if="showInputText"
      />

      <div class="popup-check-wrap" v-if="title == '배경색 적용'">
        <div class="d-flex">
          <div class="checkbox">
            <input
              type="checkbox"
              id="selectCheck"
              value="0"
              v-model="checked"
              @change="selectChecked"
            />
          </div>
          <label
            for="selectCheck"
            class="select-check"
            :class="checked[0] == '0' ? activeCheck : ''"
          >
            선택 페이지
          </label>
        </div>

        <div class="d-flex">
          <div class="checkbox">
            <input
              type="checkbox"
              id="allCheck"
              value="1"
              v-model="checked"
              @change="allChecked"
            />
          </div>
          <label for="allCheck" :class="checked[0] == '1' ? activeCheck : ''">
            전체 페이지
          </label>
        </div>
      </div>
    </div>
    <div class="popup-btn-wrap">
      <button class="popup-btn">취소</button>
      <button class="popup-btn popup-btn-bg">{{ btnText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupFolder",
  props: {
    title: String,
    folderName: String,
    contentsTitle: String,
    showInputText: Boolean,
    btnText: String,
    folderCount: Number,
  },
  data() {
    return {
      checked: ["0"],
      activeCheck: "active-check",
    };
  },
  methods: {
    selectChecked() {
      if (this.checked[0] == "1") return (this.checked = [0]);
    },
    allChecked() {
      if (this.checked[0] == "0") return (this.checked = [1]);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixin.scss";
@import "@/scss/popup-folder";
</style>

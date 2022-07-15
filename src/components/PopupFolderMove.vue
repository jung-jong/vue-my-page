<template>
  <div class="popup-wrap">
    <v-icon class="popup-close"> mdi-close</v-icon>

    <div class="popup-contents">
      <div class="popup-contents-title-wrap">
        <span class="popup-contents-title">폴더 이동</span>
      </div>

      <span class="popup-contents-text">
        <img src="" alt="" /> /{{ id }}/{{ currentFolder }}
      </span>

      <div class="popup-folder-btn-wrap">
        <div
          class="popup-folder-btn"
          v-for="(item, index) in folderList"
          :key="index"
          :class="{ active: index == activeBtn }"
          @click="active(index)"
        >
          <input
            class="popup-folder-name"
            type="text"
            readonly
            :value="item.name"
            style="color: inherit"
          />
          <v-icon>mdi-menu-right</v-icon>
        </div>
      </div>
    </div>

    <div class="popup-btn-wrap">
      <button class="popup-btn">취소</button>
      <button class="popup-btn popup-btn-bg">이동</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupFolderMove",
  props: {
    id: String,
    currentFolder: String,
    folderList: Array,
  },
  data() {
    return {
      activeBtn: Number,
    };
  },
  methods: {
    active(i) {
      this.activeBtn = i;
    },
  },
  mounted() {
    for (const i in this.folderList) {
      if (this.folderList[i].name == this.currentFolder) {
        this.activeBtn = i;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixin.scss";
@import "@/scss/popup-folder-move";
</style>

<template>
  <div class="popup-wrap">
    <div class="popup-header">
      <span>신규 폴더 생성</span>
    </div>

    <div class="popup-contents">
      <span class="popup-sub-title">폴더명</span>
      <input class="popup-text" type="text" placeholder="생성할 폴더 이름" />

      <div class="d-flex justify-space-between">
        <button class="popup-btn">취소</button>
        <button class="popup-btn">생성</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupNewFolder",
};
</script>

<style lang="scss" scoped></style>

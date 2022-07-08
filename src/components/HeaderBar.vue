<template>
  <v-app-bar class="header" app flat>
    <div class="sub-header">
      <a href="/">
        <img
          src="http://www.clipartkorea.co.kr/image2019/logo.png"
          alt=""
          class="logo"
        />
      </a>
      <v-btn class="main-btn btn" elevation="1" height="auto">
        <img src="@/assets/icons/btn_new_design.png" alt="" />
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderBar",
};
</script>

<style lang="scss" scoped></style>

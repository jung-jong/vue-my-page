<template>
  <div>
    <div class="d-flex justify-space-between">
      <span class="text-h5">내 창작공간</span>
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

    <span class="text-h6">"개인"에 대한 검색결과(총 건)</span>

    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      hide-default-footer
    ></v-data-table>

    <div class="d-flex justify-center">
      <v-btn elevation="1" width="300px" min-width="200px" large
        >+ 더보기</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCreativeSpace",
  data() {
    return {
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/my-creative.scss";
</style>

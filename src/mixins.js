const mixin = {
  data() {
    return {};
  },
  methods: {
    $dateFormat(e) {
      if (e !== null) {
        return e.slice(0, 10);
      }
    },
  },
};

export default mixin;

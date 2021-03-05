<template>
  <div class="back-icon" @click="goBack">
    <i class="iconfont icon-shangyibu" v-show="backIconShow"></i>
  </div>
</template>

<script>
export default {
  name: "BackIcon",
  props: {
    backIconShow: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.back-icon {
  display: flex;
  width: 0.44rem;
  justify-content: center;
  align-items: center;
}
.back-icon i {
  color: #000;
  font-size: 0.2rem;
}
</style>
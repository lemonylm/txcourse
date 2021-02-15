<template>
  <router-link :to="{ name: 'ListPage' }">
    <div class="list-wrap">
      <i class="iconfont icon-liebiaomoshi_kuai" v-show="listIconShow"></i>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ListIcon",
  props: {
    listIconShow: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
};
</script>

<style scoped>
.list-wrap {
  display: flex;
  width: 0.44rem;
  height: 0.44rem;
  justify-content: center;
  align-items: center;
}
.list-wrap i {
  color: pink;
  font-size: 0.24rem;
}
</style>
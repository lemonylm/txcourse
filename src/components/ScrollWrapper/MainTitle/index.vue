<template>
  <div class="main-title">
    <h1>{{ data.field_name }}</h1>
    <router-link :to="{ path: '/list', query: { field: data.field } }">
      <span>更多课程</span><i class="iconfont icon-jia_sekuai"></i
    ></router-link>
  </div>
</template>

<script>
export default {
  name: "MainTitle",
  props: {
    data: Object,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.main-title {
  display: flex;
  justify-content: space-between;
  height: 0.44rem;
  font-size: 0.2rem;
  align-items: center;
  line-height: 0.44rem;
  padding: 0 0.1rem;
}

a {
  display: flex;
  align-items: center;
  color: #999;
}
span {
  font-size: 0.16rem;
}
i {
  margin-left: 0.1rem;
  font-size: 0.12rem;
}
</style>
<template>
  <div class="item-wrap">
    <a :href="'https://ke.qq.com/course/' + data.id">
      <img :src="data.img" :alt="data.course_name" />
      <h1>{{ data.course_name }}</h1>
      <p>{{ price }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "CourseListItem",
  props: {
    data: Object,
  },

  computed: {
    price: function () {
      let res = "￥" + this.data.price + ".00";
      if (this.data.price == 0) {
        res = "免费!";
      }
      return res;
    },
  },
};
</script>

<style scoped>
.item-wrap {
  height: 1.8rem;
  width: 50%;
  padding: 0.05rem;
  box-sizing: border-box;
  font-size: 0.14rem;
}
.item-wrap h1{
    margin-top: 0.05rem;
    height: 0.4rem;
    line-height: .16rem;
}
.item-wrap p {
  color: red;
  margin-top: 0.15rem;
  font-size: 0.2rem;
}
</style>
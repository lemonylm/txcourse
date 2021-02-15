<template>
  <div class="container">
    <page-header :backIconShow="true" :listIconShow="false"></page-header>
  </div>
</template>

<script>
// import IndexModel from "@/models/index";
// const indexModel = new IndexModel();
import PageHeader from "@/components/Header/Index";

export default {
  name: "ListPage",
  components: {
    PageHeader,
  },
};
</script>

<style lang='css' scoped>
div {
  color: pink;
}
</style>
<template>
  <div class="container">
    <page-header :backIconShow="false" :listIconShow="true"></page-header>
    <index-scroll-wrapper></index-scroll-wrapper>
  </div>
</template>

<script>
// import IndexModel from "@/models/index";
// const indexModel = new IndexModel();
import PageHeader from "@/components/Header/Index";
import IndexScrollWrapper from "@/components/ScrollWrapper/Index";

export default {
  name: "IndexPage",
  components: {
    PageHeader,
    IndexScrollWrapper,
  },
};
</script>

<style lang='css' scoped>
.container{
  background-color: #eee;
}
</style>
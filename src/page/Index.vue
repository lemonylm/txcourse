<template>
  <div>Index Page</div>
</template>

<script>
import IndexModel from "@/models/index";
const indexModel = new IndexModel();
export default {
  name: "IndexPage",
  async mounted() {
    const data = await indexModel.getCourseDatas();
    console.log(data);
  },
};
</script>

<style lang='css' scoped>
div {
  color: pink;
}
</style>
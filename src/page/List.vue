<template>
  <div class="container">
    <page-header :backIconShow="true" :listIconShow="false"></page-header>
    <list-tab :fieldData='fieldData'></list-tab>
  </div>
</template>

<script>
// import IndexModel from "@/models/index";
// const indexModel = new IndexModel();
import PageHeader from "@/components/Header/Index";
import ListTab from "@/components/ListTab/Index";

import ListModel from "@/models/list";
const listModel = new ListModel();
export default {
  name: "ListPage",
  components: {
    PageHeader,
    ListTab
  },
  data() {
    return {
      fieldData: [],
      courseData: [],
    };
  },
  async mounted() {
    await this.getCourseFields();
    this.getCourses("all");
  },
  methods: {
    async getCourseFields() {
      const data = await listModel.getCourseFields();
      this.fieldData = data.result;
    },
    async getCourses(field) {
      const data = await listModel.getCourses(field);
      this.courseData = data.result;
    },
  },
};
</script>

<style lang='css' scoped>
div {
  color: pink;
}
</style>
<template>
  <div class="recom-board">
    <recom-course-item  v-for="(item,index) of recomCourseData" :key='index' :data='item' ></recom-course-item>
  </div>
</template>

<script>
import RecomCourseItem from "@/components/ScrollWrapper/RecomCourseList/Item";
export default {
  name: "RecomCourseList",
  components: {
    RecomCourseItem,
  },
  props:{
      recomCourseData:Array
  }
};
</script>

<style scoped>
</style>
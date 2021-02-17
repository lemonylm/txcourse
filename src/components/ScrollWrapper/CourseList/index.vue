<template>
  <div class="course-board">
    <course-list-item
      v-for="(item, index) of courseData"
      :key="index"
      :data="item"
    ></course-list-item>
  </div>
</template>

<script>
import CourseListItem from "@/components/ScrollWrapper/CourseList/Item";
export default {
  name: "CourseList",
  props: {
    courseData: Array,
  },
  components: {
    CourseListItem,
  },
};
</script>

<style scoped>
.course-board{
    display: flex;
    flex-wrap: wrap;
    padding: .05rem;
    background-color: #fff;
    box-sizing: border-box;
}
</style>
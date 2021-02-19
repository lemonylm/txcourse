<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <course-list :courseData="courseData"></course-list>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import CourseList from "@/components/ScrollWrapper/CourseList/index";

export default {
  name: "ListScrollWrapper",
  components: {
    CourseList,
  },
  props: {
    courseData: Array,
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper,{
      mouseWheel: true,
      click: true,
      tap: true,
    });
  },
};
</script>

<style scoped>
.wrapper {
  /* position: absolute; */
  height: calc(100vh - (0.79rem));
  overflow: hidden;
  /* background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 3px 12px 0 rgba(31, 38, 135, 0.37);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18); */
}
.content{
  height: 13rem;
}
</style>
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <index-swiper :swiperData="swiperData"></index-swiper>
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
      123 <br />
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import IndexSwiper from "@/components/ScrollWrapper/IndexSwiper/index";
import IndexModel from "@/models/index";
const indexModel = new IndexModel();
export default {
  name: "IndexScrollWrapper",
  components: {
    IndexSwiper,
  },
  data() {
    return {
      swiperData: [],
      fieltData: [],
      courseData: [],
      recomCourseData: [],
    };
  },
  mounted() {
    this.getCourseDatas();
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      mouseWheel: true,
      ckick: true,
      tap: true,
    });
  },
  methods: {
    async getCourseDatas() {
      const data = await indexModel.getCourseDatas();
      let res = data.result;
      this.swiperData = res.swipers;
      this.fieltData = res.fields;
      this.courseData = res.courses;
      this.recomCourseData = res.recomCourses;
    },
  },
};
</script>

<style scoped>
.wrapper {
  /* position: absolute; */
  height: calc(100vh- (0.44rem));
  overflow: hidden;
  /* background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 3px 12px 0 rgba(31, 38, 135, 0.37);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18); */
}
</style>
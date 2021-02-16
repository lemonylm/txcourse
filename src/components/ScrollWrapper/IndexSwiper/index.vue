<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <swiper :option="swiperOptions" ref="indexSwiper"
        ><swiper-slide v-for="(item, index) of swiperData" :key="index"
          ><slider-inner :data="item"></slider-inner>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import SliderInner from "@/components/ScrollWrapper/IndexSwiper/SliderInner";
export default {
  name: "IndexSwiper",
  components: {
    Swiper,
    SwiperSlide,
    SliderInner,
  },
  props: {
    swiperData: Array,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true,
        loopedSlides: 1,
        autoplay: true,
      },
    };
  },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
}
</style>
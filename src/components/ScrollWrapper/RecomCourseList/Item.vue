<template>
  <div class="course-item">
    <a :href="'https://ke.qq.com/course/' + data.course_id">
      <div class="img-wrap">
        <img :src="data.course_img" :alt="data.course_name" />
      </div>
      <div class="info-wrap">
        <h1 class="course-name">{{ data.course_name }}</h1>
        <p class="teacher-info">
          <img :src="data.teacher_img" :alt="data.teacher_name" />
          <span>{{ data.teacher_name }}</span>
        </p>
        <p class="course-price">￥{{data.price}}.00</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "RecomCourseItem",
  props:{
      data:Object
  }
};
</script>

<style scoped>
.course-item{
    position: relative;
    margin-bottom: .1rem;
    background-color: #fff;
    height: .8rem;
    border-bottom: 1px solid #eee;
}
.img-wrap{
    height: 100%;
    width: 1.43rem;
}
.info-wrap{
    position: absolute;
    left: 1.48rem;
    top: 0.05rem;
    font-size: .12rem;
}
.course-name{
    height: .24rem;
    overflow: hidden;
}
.teacher-info {
    display: flex;
    align-items: center;
}

.teacher-info img{
    margin-top: 0.05rem;
    width: .25rem;
    border-radius: 50%;
}
.teacher-info span{
    margin-left: .1rem;
}
.course-price{
    color: red;
    font-size: .18rem;
}
</style>
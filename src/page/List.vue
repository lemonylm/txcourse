<template>
  <div>
      List Page
  </div>
</template>

<script>
import ListModel from '@/models/list'
const listModel =new ListModel()
export default {
name:'ListPage',
async mounted() {
    const fieldData = await listModel.getCourseFields(),
    courseData = await listModel.getCourses('all')
    console.log(fieldData,courseData);
    
},
}
</script>

<style lang='css' scoped>
div{
    color:skyblue;
}
</style>